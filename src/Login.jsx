import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
  return (
    <div>
    <h1>Login</h1>
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
      />
      <br/>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
       <div className='btn'>
       <Button variant="contained" color="success">
      Login
      </Button>
       </div>
       
      </div>
      </Box>
      </div>
  )
}

export default Login