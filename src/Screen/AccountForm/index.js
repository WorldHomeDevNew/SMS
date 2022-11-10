import React from "react";
import { Grid, Paper,TextField, Button,Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Table from '../Table'
import './index.css'

function Form(){
    return(
    <div className="bg__colr">
        <Grid container>
           <Grid item lg={2} md={3} sm={3} xs={12} className="Form">
           <h4>.</h4>
           <TextField   type='date' variant="outlined" color='primary' fullWidth required size="small" />
           </Grid>
           <Grid item lg={1} md={3} sm={3} xs={12} className="Form">
           <h4>Code</h4>
           <TextField hiddenLabel defaultValue='0665' variant="outlined" size="small" />
           </Grid>
           <Grid item lg={3} md={3} sm={3} xs={12} className="Form">
           <h4>Bank Description</h4>
           <TextField hiddenLabel  variant="outlined" fullWidth required size="small" />
           </Grid>
           <Grid item lg={5} md={3} sm={3} xs={12} className="Form">
           <h4>Account Title</h4>
           <TextField hiddenLabel variant="outlined" fullWidth required  size="small"/>
           </Grid>
        </Grid>
        <Grid container>
           <Grid item lg={6} md={3} sm={3} xs={12} className="Form">
           <h4>Account No</h4>
           <TextField   hiddenLabel variant="outlined" fullWidth required  size="small"/>
           </Grid>
           <Grid item lg={2} md={3} sm={3} xs={12} className="Form">
           <h4>Branch Code</h4>
           <TextField hiddenLabel variant="outlined" fullWidth required  size="small"/>
           </Grid>
        </Grid>
        <Grid container>
        <Grid item lg={6} md={3} sm={3} xs={12} className="Form">
        <h4>Contact Person</h4>
           <TextField hiddenLabel variant="outlined" fullWidth required size="small" />
           </Grid>
           <Grid item lg={5} md={3} sm={3} xs={12} className="Form">
           <h4>Contact No</h4>
           <TextField hiddenLabel variant="outlined" fullWidth required size="small" />
           </Grid>
        </Grid>

        <Grid container>
        <Grid item lg={2} md={3} sm={3} xs={12} className="Form">
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="New Account"
          labelPlacement="end"
        />
           </Grid>
           <Grid item lg={4} md={3} sm={3} xs={12} className="Form">
           
           </Grid>
           <Grid item lg={1} md={3} sm={3} xs={12} className="Form">
           <Button variant='contained' fullWidth required  style={{marginTop:'10px',marginBottom:"10px", backgroundColor:'black', color:'whitesmoke'}}>Save</Button>
           </Grid>
           <Grid item lg={1} md={3} sm={3} xs={12} className="Form">
           <Button variant='contained' fullWidth required style={{marginTop:'10px',marginBottom:"10px", backgroundColor:'black', color:'whitesmoke'}}>Exit</Button>
           </Grid>
        </Grid>

       <Grid container className="table">
       <Table/>
        </Grid>    
    </div>
    )
}
export default Form;