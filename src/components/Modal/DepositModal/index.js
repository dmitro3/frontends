import { ButtonBase, Dialog, DialogContent } from '@mui/material';
import currency from 'currency.js';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import CloseModalIcon from 'src/components/Icon/CloseModalIcon';
import ViewHistoryIcon from 'src/components/Icon/ViewHistoryIcon';
import { closeModal, openModal } from 'src/store/modal';
import ModalTypes from 'src/store/modal/ModalTypes';

import Transition from '../Transition';
import styles from './index.module.scss';

const DepositModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  const showHistory = () => {
    dispatch(closeModal());
    dispatch(
      openModal({
        modalType: ModalTypes.HISTORY_MODAL,
      }),
    );
  };

  return (
    <Dialog open TransitionComponent={Transition} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <ViewHistoryIcon onClick={showHistory} />
        <CloseModalIcon onClick={onClose} />
        <div className="p-3 text-center mb-3 text-xl">Deposit to GameFi Pool</div>
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
                  <Image src="/usdc-logo.png" width="40" height="40" alt="Matic logo" />
                </div>
                <input inputMode="decimal" placeholder="0.0" />
              </div>
            </div>

            <div className={styles.timeResult}>
              <span>Unlock time</span>
              <span>
                <b>12/15/2022, 7:00:00 AM</b>
              </span>
            </div>

            <ButtonBase
              component="button"
              size="small"
              className="w-full bg-main-100 rounded py-2 font-bold my-2"
              onClick={() => {}}
            >
              Unlock
            </ButtonBase>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
