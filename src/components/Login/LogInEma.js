import React from 'react';
import { Link } from 'react-router-dom';
import "./LogInEma.css"

const LogInEma = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="Submit"
                    value="Submit" />
                </form>
                <p>new to ema-john ?<Link to ="/register"> Create Account</Link> </p>
                <div>---------or------------</div>
                <button className="btn-regular">Google Sing In</button>
            </div>
        </div>
    );
};

export default LogInEma;