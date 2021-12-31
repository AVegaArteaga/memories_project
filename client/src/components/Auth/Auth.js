import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassoword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    //covic function
    const handleShowPassword = () => setShowPassoword((prevShowPassoword)=> !prevShowPassoword); //toggling it
    
    const handleSubmit = () =>{

    };

    const handleChange = () =>{
        
    };
    const switchMode = () =>{
        setIsSignup((prevIsSignup) => !prevIsSignup );
        handleShowPassword(false);
    };

    return (
     <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={5}>
             <Avatar className={classes.avatar}>
                 <LockOutlinedIcon />
             </Avatar>
             <Typography component='h1' variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'} </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                    { isSignup && (
                        <React.Fragment>
                            <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                            <TextField name="firstName" label="Last Name" handleChange={handleChange} half/>
                        </React.Fragment>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleSubmit} type="email"/>
                    <Input name="password" label="Password" handleChange={handleSubmit} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    { isSignup && <Input name="confirmPassword"  label="Repeat Password" handleChange={handleChange} type="password"/>}

                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                    {isSignup ? 'Sign Up!' : 'Sign In!' }
                </Button>
                <Grid conatiner justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}> 
                        {isSignup ? 'Already have an account? Sign In!' : 'Dont have an accout? Sing Up'}
                        </Button>
                    </Grid>
                </Grid>
             </form> 
         </Paper>
     </Container>
    );
};

export default Auth