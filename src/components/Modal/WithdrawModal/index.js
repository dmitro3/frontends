import { ButtonBase, Dialog, DialogContent } from '@mui/material';
import { useDispatch } from 'react-redux';
import CloseModalIcon from 'src/components/Icon/CloseModalIcon';
import { closeModal } from 'src/store/modal';

import Transition from '../Transition';

const WithdrawModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open TransitionComponent={Transition} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <CloseModalIcon onClick={onClose} />
        <div className="p-3 text-center text-xl">Withdraw funds</div>
        <div className="p-2">
          <div className="mb-10">This action will withdraw all you funds to your wallet</div>

          <div className="flex justify-between items-center my-3">
            <ButtonBase
              component="button"
              className="w-6/12 relative text-white border border-main-100 border-solid bg-transparent hover:bg-main-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
            >
              Cancel
            </ButtonBase>
            <ButtonBase
              component="button"
              className="w-6/12 relative text-white bg-main-100 hover:bg-main-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            >
              withdraw
            </ButtonBase>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
