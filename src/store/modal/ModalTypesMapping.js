import DepositModal from 'src/components/Modal/DepositModal';
import GenreModal from 'src/components/Modal/GenreModal';
import HistoryModal from 'src/components/Modal/HistoryModal';
import WithdrawModal from 'src/components/Modal/WithdrawModal';

import ModalTypes from './ModalTypes';

const ModalTypesMapping = {
  [ModalTypes.GENRE_MODAL]: GenreModal,
  [ModalTypes.DEPOSIT_MODAL]: DepositModal,
  [ModalTypes.HISTORY_MODAL]: HistoryModal,
  [ModalTypes.WITHDRAW_MODAL]: WithdrawModal,
};

export default ModalTypesMapping;
