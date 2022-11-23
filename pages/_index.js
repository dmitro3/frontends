import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from 'src/components/Table';
import { openModal } from 'src/store/modal';
import ModalTypes from 'src/store/modal/ModalTypes';

export default function Home() {
  const dispatch = useDispatch();

  const openGenreModal = () => {
    dispatch(
      openModal({
        modalType: ModalTypes.GENRE_MODAL,
      }),
    );
  };

  return (
    <div className="flex justify-end">
      <div className="text-gray-300 text-sm">
        <span>Filter by Genre</span>
        <IconButton onClick={openGenreModal}>
          <AddCircleOutlineIcon className="text-main-100" />
        </IconButton>
      </div>

      <Table />
    </div>
  );
}
