import React from 'react';
import { Link, useLocation , useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./LogInEma.css"

const LogInEma = () => {
    const {singInUsingGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.form || '/shop'

    const handleGoogleLogin =( ) => {
        singInUsingGoogle()
        .then (result => {
           history.push(redirect_uri)
        })
    }


    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="Submit"
                    value="Submit" />
                </form>
                <p>new to ema-john ?<Link to ="/register"> Create Account</Link> </p>
                <div>---------or------------</div>
                <button className="btn-regular"
                onClick={handleGoogleLogin}
                >Google Sing In</button>
            </div>
        </div>
    );
};

export default LogInEma;