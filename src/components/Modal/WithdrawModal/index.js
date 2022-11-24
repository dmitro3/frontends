import AddIcon from '@mui/icons-material/Add';
import { ButtonBase, Dialog, DialogContent } from '@mui/material';
import classNames from 'classnames';
import currency from 'currency.js';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import CloseModalIcon from 'src/components/Icon/CloseModalIcon';
import { closeModal } from 'src/store/modal';

import Transition from '../Transition';
import styles from './index.module.scss';

const WithdrawModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open TransitionComponent={Transition} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <CloseModalIcon onClick={onClose} />
        <div className="p-3 text-center mb-3 text-xl">Withdraw tokens from pool</div>
        <div className={styles.index}>
          <div className={styles.body}>
            <div className={styles.inputContainer}>
              <div className={styles.balance}>
                <span>Balance: </span>
                <span className="ml-3">
                  <span>
                    {currency(100000000000, {
                      symbol: '',
                    })
                      .format()
                      .toString()}
                  </span>
                </span>
              </div>
              <div className={styles.input}>
                <div className={styles.logo}>
                  <Image src="/btc-logo.png" width="40" height="40" alt="Matic logo" />
                </div>
                <input inputMode="decimal" placeholder="0.0" />
              </div>
              <div className={styles.iconPlus}>
                <AddIcon fontSize="small" />
              </div>
            </div>

            <div className={classNames(styles.inputContainer, 'mt-2')}>
              <div className={styles.balance}>
                <span>Balance: </span>
                <span className="ml-3">
                  <span>
                    {currency(100000000000, {
                      symbol: '',
                    })
                      .format()
                      .toString()}
                  </span>
                </span>
              </div>
              <div className={styles.input}>
                <div className={styles.logo}>
                  <Image src="/eth-logo.png" width="40" height="40" alt="Matic logo" />
                </div>
                <input inputMode="decimal" placeholder="0.0" />
              </div>
              <div className={styles.iconPlus}>
                <AddIcon fontSize="small" />
              </div>
            </div>

            <div className={classNames(styles.inputContainer, 'mt-2')}>
              <div className={styles.balance}>
                <span>Balance: </span>
                <span className="ml-3">
                  <span>
                    {currency(100000000000, {
                      symbol: '',
                    })
                      .format()
                      .toString()}
                  </span>
                </span>
              </div>
              <div className={styles.input}>
                <div className={styles.logo}>
                  <Image src="/matic-logo.png" width="40" height="40" alt="Matic logo" />
                </div>
                <input inputMode="decimal" placeholder="0.0" />
              </div>
            </div>

            <ButtonBase
              component="button"
              size="small"
              className="w-full bg-main-100 rounded py-2 font-bold mt-6"
              onClick={() => {}}
            >
              Withdraw
            </ButtonBase>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
