import { Button, Card, CardContent, Grid, TextField, Typography, } from "@mui/material"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('pappu_kushwaha');
    const [password, setPassword] = useState('12345');

    const login = () => {
        localStorage.setItem('token', 'pappu-kushwaha');
        navigate('/dashboard');
    };

    return (
        <div className="content"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:'blue' }}>
            <Card style={{ maxWidth: 450}}>
                <CardContent>
                    <form >
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                                <Typography align="center" style={{backgroundColor:'red'}}>SIGN IN</Typography>
                            </Grid>

                            <Grid xs={12} item  >
                                <TextField name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" label="Email" size="small" placeholder="Enter Your Email ID" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                <Button type="submit" onClick={login} variant="contained" size="small"> Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
export default Login;
