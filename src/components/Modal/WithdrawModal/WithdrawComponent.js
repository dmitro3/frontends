import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import classNames from 'classnames';
import currency from 'currency.js';
import { ethers } from 'ethers';
import _ from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { contracts, fromSzabo, fromWei, toWei, withdraw } from 'src/service/connectSM';
import { fetchOverview, fetchUserInfo } from 'src/store/contract';
import { fetchUser } from 'src/store/userInfo';

import styles from './index.module.scss';

const WithdrawComponent = () => {
  const userInfo = useSelector((state) => state.contract.userInfo);
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedAddress = useSelector((state) => state.contract.selectedAddress);

  const useMax = () => {
    setValue(fromWei(ethers.BigNumber.from(userInfo[selectedAddress].tokenBalance).toString()));
  };

  async function reset() {
    setValue('');

    contracts.forEach((contract) => {
      dispatch(fetchOverview(contract));
      dispatch(fetchUserInfo(contract));
    });
    dispatch(fetchUser());

    toast.success('Withdraw Successfully');
  }

  const handleWithdraw = async () => {
    if (!value) {
      return;
    }
    try {
      setLoading(true);
      await withdraw(selectedAddress, toWei(value));

      reset();
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.index}>
      <div className={styles.body}>
        <div className={styles.inputContainer}>
          <div className={styles.balance}>
            <span>Balance: </span>
            <span className="ml-3">
              <span>
                {currency(fromWei(ethers.BigNumber.from(userInfo[selectedAddress]?.tokenBalance || 0).toString()), {
                  symbol: '',
                  precision: 6,
                })
                  .format()
                  .toString()}
              </span>
            </span>
          </div>
          <div className={styles.input}>
            <input value={value} onChange={(e) => setValue(e.target.value)} inputMode="decimal" placeholder="0.0" />

            <Button onClick={useMax} size="small" className="absolute right-0">
              Max
            </Button>
          </div>
        </div>

        <LoadingButton
          component="button"
          size="small"
          loading={isLoading}
          className={classNames('w-full bg-main-100 text-white rounded py-2 font-bold mt-6', {
            'opacity-75 cursor-not-allowed': !value,
          })}
          onClick={handleWithdraw}
        >
          Withdraw
        </LoadingButton>
      </div>
    </div>
  );
};

export default WithdrawComponent;
