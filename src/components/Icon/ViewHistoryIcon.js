import HistoryIcon from '@mui/icons-material/History';
import { IconButton, Tooltip } from '@mui/material';

const ViewHistoryIcon = ({ onClick }) => {
  return (
    <Tooltip title="View history">
      <IconButton
        aria-label="close"
        onClick={onClick}
        sx={{
          cursor: 'pointer',
        }}
      >
        <HistoryIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ViewHistoryIcon;
