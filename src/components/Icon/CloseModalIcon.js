import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';

const CloseModalIcon = ({ onClick }) => {
  return (
    <Tooltip title="Close">
      <IconButton
        aria-label="close"
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          cursor: 'pointer',
        }}
      >
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CloseModalIcon;
