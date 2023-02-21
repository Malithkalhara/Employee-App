import * as React from 'react';

import useStyles from "./styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

import DeleteIconButton from '@/components/DeleteIconButton';

const CustomCard = ({employee}) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345, minWidth:250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={employee.photo}
      />
      <CardContent>
        <div className={classes.text}>
          {employee.firstName + " " + employee.lastName}
        </div>
        <div className={classes.text}>
          {employee.email}
        </div>
        <div className={classes.text}>
          {employee.phone}
        </div>
        { employee.gender==="M" ? 
          <div className={classes.text}>
            Male
          </div> : null }
        { employee.gender==="F" ? 
          <div className={classes.text}>
            Female
        </div> : null }
      </CardContent>
      <div className={classes.actionBar}>
        <CardActions>
          <DeleteIconButton />
          <IconButton className={classes.editButton}>
            <ManageAccountsOutlinedIcon className={classes.icon}/>
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}

export default CustomCard;