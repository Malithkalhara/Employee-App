import { useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import useStyles from "./styles";
import validations from './validations';
import LabeledInput from '@/components/LabeledInput';

const AddForm = () => {
  const classes = useStyles();
  const { register, handleSubmit , formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div className={classes.root}>
      <Card sx={{ minWidth: 275 }} className={classes.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInput register={register} error={errors?.firstName} id="firstName" label="First Name" validation={validations.name}/>
          <LabeledInput register={register} error={errors?.lastName} id="lastName" label="Last Name" validation={validations.name}/>
          <LabeledInput register={register} error={errors?.email} id="email" label="Email" validation={validations.email}/>
          <LabeledInput register={register} error={errors?.phone} id="phone" label="Phone" validation={validations.phone}/>
          <div className={classes.buttonContainer}>
            <Button className={classes.button} variant="outlined" type="submit">Add</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddForm;