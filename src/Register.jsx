import * as React  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
    const nav=useNavigate()
    const[data,setData]=useState({
        username:"",
        password:"",
        cnfpassword:""
    })
    console.log(data);
    const handleClick=async()=>{
        try{
            const res=await axios.post("http://localhost:3001/auth/register",data)
            alert("registered successfully")
            nav("/login")
        }catch(e){
            alert("register unsuccessfull")
            console.log(e);
        }
    }
  return (
    <div>
      <h1>Register</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          name="username"
          onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
        />
        <br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
          onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
        />
        <br/>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          name='cnfpassword'
          autoComplete="current-password"
          onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
        />
         <div className='btn'>
         <Button variant="contained" color="success" onClick={handleClick}>
        Register
        </Button>
         </div>
         
        </div>
        </Box>
        </div>
  )
}

export default Register;
