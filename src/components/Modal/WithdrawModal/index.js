import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseModalIcon from 'src/components/Icon/CloseModalIcon';
import { closeModal } from 'src/store/modal';

import Transition from '../Transition';
import WithdrawComponent from './WithdrawComponent';

const WithdrawModal = () => {
  const dispatch = useDispatch();
  const contractOverview = useSelector((state) => state.contract.overview);

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open TransitionComponent={Transition} onClose={() => {}} maxWidth="lg">
      <DialogContent>
        <CloseModalIcon onClick={onClose} />
        <div className="p-3 text-center mb-3 text-xl">Withdraw tokens from {contractOverview.fundName}</div>
        <WithdrawComponent />
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
