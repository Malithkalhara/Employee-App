import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import useStyles from "./styles";

const LabeledInput = ({ label, register, error, id, validation }) => {
  const classes = useStyles();

  return (
    
      <div className={classes.container}>
        <span className={classes.label}>{label}</span>
        <TextField size="small" {...register(id, { ...validation })} variant="filled" error={error}/>
      </div>
   
    
  );
}

export default LabeledInput;