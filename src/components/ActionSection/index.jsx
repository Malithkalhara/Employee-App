import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import useStyles from "./styles";

const ActionSection = ({ label,onHandler }) => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" onClick={onHandler}>{label}</Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
    
  );
}

export default ActionSection;