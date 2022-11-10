import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import './index.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(min,code, description, title, accno, brcode, contactperson) {
  return { min,code, description, title, accno, brcode, contactperson };
}

const rows = [
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  createData('','', '', '', '', '', ''),
  
  createData('','', '', '', '', '', '')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  style={{border:'1px solid black'}} size="small"></TableCell>
            <TableCell  style={{border:'1px solid black'}} size="small">
                <h4>Code</h4></TableCell>
            <TableCell  style={{border:'1px solid black'}} size="small">
                <h4>Description</h4></TableCell>
            <TableCell  style={{border:'1px solid black'}} size="small">
                <h4>Title</h4></TableCell>
            <TableCell  style={{border:'1px solid black'}} size="small">
                <h4>Acc No</h4></TableCell>
            <TableCell  style={{border:'1px solid black'}} size="small">
                <h4>Br Code</h4></TableCell>
            <TableCell  style={{border:'1px solid black'}} size="small">
                <h4>Contact Person</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{borderLeft:'1px solid black'}}>
                {row.min}
              </TableCell>    
              <TableCell  style={{borderLeft:'1px solid black'}} size="small">{row.code}</TableCell> 
              <TableCell  style={{borderLeft:'1px solid black'}} size="small">{row.description}</TableCell>
              <TableCell  style={{borderLeft:'1px solid black'}} size="small">{row.title}</TableCell>
              <TableCell  style={{borderLeft:'1px solid black'}} size="small">{row.accno}</TableCell>
              <TableCell  style={{borderLeft:'1px solid black'}} size="small">{row.brcode}</TableCell>
              <TableCell  style={{borderLeft:'1px solid black'}} size="small">{row.contactperson}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
