import React from 'react';
import {useDispatch} from 'react-redux';
import gmailLogo from '../../assets/icons/gmaillogo.svg';
import {Button} from '@material-ui/core';
import './Login.scss';


const Login = ({signIn}) => {
    

    return (
        <div className="login">
            <div className="login__container">
                <img src={gmailLogo} alt="login" />
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={signIn}>
                        Login
                </Button>
            </div>
        </div>
    );
};

export default Login;