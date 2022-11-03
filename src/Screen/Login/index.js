import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


import loginImage from "../../Image/EPS.jpeg"
import "./index.css";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEps } from "../../store/slice/epsSlice";
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [fromData, setFromData] = useState({
        email: "EPS@gmail.com",
        password: "123456"
    })
    const handleChange = (key, value) => {
        setFromData({ ...fromData, [key]: value.target.value })
    }
    const handleClick = () => {
        if (!fromData.email) {
            alert("Please Enter Email")
        }
        if (!fromData.password) {
            alert("Please Enter Password")
        }
        const result = dispatch(sendEps(fromData))
        if (result.error) {
            alert("Reudux Error")
        }
        else {
            navigate("/dashboard")
        }
    }
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '8px 0' }
    return (
        <Grid container>
            <Paper elevatiion={10} style={paperStyle}>
                <Grid align='center' lg={12} md={12} sm={12} xs={12}>
                    <div className="eps">
                        <img src={loginImage} />
                    </div>
                    <h2>LOGIN</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required value={fromData.email} onChange={(e) => handleChange("email", e)} />
                <TextField label='Password' placeholder='Password' type='password' fullWidth required value={fromData.password} onChange={(e) => handleChange("password", e)} />
                <FormControlLabel value="end" control={<Checkbox />} label="Remember me" labelPlacement="end" />
                <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth onClick={handleClick}>Login</Button>
                <Typography>
                    <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}>
                        Forget Passsword?
                    </Link>
                </Typography>

                <Typography>
                    Do You have an account?<br />
                    <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
