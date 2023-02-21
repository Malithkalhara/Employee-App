import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

import useStyles from "./styles";

const ToggleIconButton = ({onClickHandler,isList}) => {
  const classes = useStyles();
 
  return (
    <IconButton onClick={onClickHandler}  className={classes.deleteButton}>
      {isList ? <GridViewIcon className={classes.icon}/> : <ListIcon className={classes.icon}/>}
    </IconButton>
  );
}

export default ToggleIconButton;