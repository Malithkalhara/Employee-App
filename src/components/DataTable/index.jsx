import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

import useStyles from "./styles";
import ActionSection from '@/components/ActionSection'

const headings = [
  { name : "Image"},
  { name : "First Name"},
  { name : "Last Name"},
  { name : "Email"},
  { name : "Phone"},
  { name : "Gender"},
  { name : "Actions"},
]

const BasicTable = ({data}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
           {headings.map((heading,index) => (
             <TableCell className={classes.cell} key={index} align="right">{heading.name}</TableCell>
           ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src={data.photo}
                  sx={{ width: 56, height: 56 }}
                />
              </TableCell>
              <TableCell align="right">{data.firstName}</TableCell>
              <TableCell align="right">{data.lastName}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.phone}</TableCell>
              <TableCell align="right">{data.gender}</TableCell>
              <TableCell align="right">
                <ActionSection label="Edit"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable