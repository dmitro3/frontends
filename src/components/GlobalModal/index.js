import { useSelector } from 'react-redux';
import ModalTypesMapping from 'src/store/modal/ModalTypesMapping';

const GlobalModal = () => {
  const { modalProps, modalType } = useSelector((state) => state.modal);
  const ModalComponent = ModalTypesMapping[modalType];
  if (!ModalComponent) return null;
  return <ModalComponent {...modalProps} />;
};

export default GlobalModal;
