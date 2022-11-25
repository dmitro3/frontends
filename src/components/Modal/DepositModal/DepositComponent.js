/* eslint-disable no-use-before-define */

/* eslint-disable no-await-in-loop */

/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import currency from 'currency.js';
import { ethers } from 'ethers';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { approveUSDCToken, contracts, deposit, smAddress, toSzabo } from 'src/service/connectSM';
import { fetchOverview, fetchUserInfo } from 'src/store/contract';
import { fetchUser } from 'src/store/userInfo';

import styles from './index.module.scss';

const DepositComponent = () => {
  const account = useSelector((state) => state.user);
  const contractOverview = useSelector((state) => state.contract.overview);
  const selectedAddress = useSelector((state) => state.contract.selectedAddress);

  const baseToken = useSelector((state) => state.contract.baseToken);

  const [step, setStep] = useState(1);

  const [value, setValue] = useState('');

  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const toTokens = contractOverview[selectedAddress]?.assets?.map((e) => ({
    address: e.token,
    amount: parseInt((toSzabo(value) * parseInt(ethers.BigNumber.from(e.weight).toString(), 10)) / 100, 10),
  }));

  const handleDeposit = async () => {
    try {
      setLoading(true);

      let total = 0;
      const datas = [];
      for (const toToken of toTokens) {
        const { amount } = toToken;
        total += amount;
        const url = `https://api.1inch.io/v5.0/137/swap?fromTokenAddress=${baseToken[selectedAddress].address}&toTokenAddress=${toToken.address}&amount=${amount}&fromAddress=${selectedAddress}&slippage=1&disableEstimate=true`;
        const { data } = (await axios.get(url)).data.tx;
        datas.push(data);
      }
      await deposit(selectedAddress, total, datas);

      reset();
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    try {
      setLoading(true);
      await approveUSDCToken(selectedAddress, value);
      setStep(2);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  async function reset() {
    setStep(1);
    setValue('');
    contracts.forEach((contract) => {
      dispatch(fetchOverview(contract));
      dispatch(fetchUserInfo(contract));
    });

    dispatch(fetchUser());

    toast.success('Deposit Successfully');
  }

  const useMax = () => {
    setValue(account.balance);
  };

  return (
    <div className={styles.index}>
      <div className={styles.body}>
        <div className={styles.inputContainer}>
          <div className={styles.balance}>
            <span>Balance: </span>
            <span className="ml-3">
              <span>
                {currency(account.balance, {
                  symbol: '',
                  precision: 6,
                })
                  .format()
                  .toString()}{' '}
                USDC
              </span>
            </span>
          </div>
          <div className={styles.input}>
            <div className={styles.logo}>
              <Image src="/usdc-logo.png" width="40" height="40" alt="Matic logo" />
            </div>
            <input value={value} onChange={(e) => setValue(e.target.value)} inputMode="decimal" placeholder="0.0" />
            <Button onClick={useMax} size="small" className="absolute right-0">
              Max
            </Button>
          </div>
        </div>
        <div className="flex gap-6">
          <LoadingButton
            component="button"
            size="small"
            loading={isLoading && step === 1}
            className={classNames(
              'w-full text-white rounded py-2 font-bold mt-6',
              {
                'opacity-75': !value,
                'cursor-not-allowed': step !== 1 || !value,
              },
              step === 1 && Boolean(value) ? 'bg-main-100' : 'bg-gray-500',
            )}
            onClick={handleApprove}
          >
            Approve
          </LoadingButton>

          <LoadingButton
            component="button"
            size="small"
            loading={isLoading && step === 2}
            className={classNames(
              'w-full text-white rounded py-2 font-bold mt-6',
              {
                'opacity-75': !value,
                'cursor-not-allowed': step !== 2 || !value,
              },
              step === 2 && Boolean(value) ? 'bg-main-100' : 'bg-gray-500',
            )}
            onClick={handleDeposit}
          >
            Deposit
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default DepositComponent;
