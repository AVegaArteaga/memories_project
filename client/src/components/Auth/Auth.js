import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import Icon from './icons';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {signin, signup} from '../../actions/auth';
const initialState = {firstName: '', lastName: '', email:'', password:'', confirmPassword:''};

const Auth = () => {
    
    const classes = useStyles();
    const [showPassword, setShowPassoword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //covic function
    const handleShowPassword = () => setShowPassoword((prevShowPassoword)=> !prevShowPassoword); //toggling it
    
    const handleSubmit = (e) =>{
        e.preventDefault();


        if(isSignup){
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = (e) => {
        
        setFormData({ ...formData,[e.target.name]: e.target.value});

    };
    const switchMode = () =>{
        setIsSignup((prevIsSignup) => !prevIsSignup );
        setShowPassoword(false);
    };

    const googleSuccess = async (res) => {
        const result = res.profileObj; // undefined optional chaining operation
        const token = res.tokenId;

        try {
            dispatch({type: 'AUTH', data: {result, token}});
            navigate("/");

        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was Unseccessful. Try Again.");
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
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                            <Input name="lastName"  label="Last Name"  handleChange={handleChange} half/>
                        </React.Fragment>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    { isSignup && <Input name="confirmPassword"  label="Repeat Password" handleChange={handleChange} type="password"/>}

                </Grid>
                <GoogleLogin 
                    clientId="73583287469-24n3df9nncuofg56ccdm61cvap7ek58c.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>}  variant='conatined' > 
                            Google Sign In
                        </Button>

                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
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