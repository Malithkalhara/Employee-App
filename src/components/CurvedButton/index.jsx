import Button from '@mui/material/Button';
import useStyles from "./styles";

const CurvedButton = ({ label,onHandler }) => {
  const classes = useStyles();

  return (
    <Button classes={{root:classes.shape}} variant="contained" onClick={onHandler}>{label}</Button>
  );
}

export default CurvedButton;