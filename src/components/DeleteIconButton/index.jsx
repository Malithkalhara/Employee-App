import useStyles from "./styles";
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const DeletedIconButton = ({ label,onHandler }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.deleteButton}>
      <DeleteOutlineOutlinedIcon className={classes.icon}/>
    </IconButton>
  );
}

export default DeletedIconButton;