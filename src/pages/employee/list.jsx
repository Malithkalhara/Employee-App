import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';

import CurvedButton from "@/components/CurvedButton";
import ToggleIconButton from "@/components/ToggleIconButton";
import GridView from '@/components/GridView';
import DataTable from '@/components/DataTable';
import useStyles from "./styles";

const List = ({employees}) => {
  const router = useRouter();
  const classes = useStyles();
  const [isList, setIsList] = useState(false);

  const handleClick = () => {
    router.push("/employee/add");
  }

  const handleListClick = () => {
    setIsList(!isList);
  }

  return (
    <Grid container>
      <Grid container item justifyContent="flex-end" style={{marginTop:"150px"}} >
        <CurvedButton label="Add Employee" onHandler={handleClick}/>
        <ToggleIconButton onClickHandler={handleListClick} isList={isList}/>
      </Grid>
      <div className={classes.container}>
        {isList ? <DataTable data={employees}/> : <GridView employees={employees} />}
      </div>
    </Grid>
    
  );
}

export default List;

export const getServerSideProps = async () => {
  const response = await fetch("http://ec2-100-25-205-45.compute-1.amazonaws.com:5000/employee");
  const data = await response.json();

  return {
    props:{
      employees:data
    }
  }
}


