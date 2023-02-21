import { ArrowDownward } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import CustomCard from '../CustomCard';

import useStyles from "./styles";

const GridView = ({ employees }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.container}>
      { employees.map((employee)=>{
        return (
          <Grid item key={employee._id}>
            <CustomCard employee={employee}/>
          </Grid>
      )})
      }
    </Grid>
  );
}

export default GridView;