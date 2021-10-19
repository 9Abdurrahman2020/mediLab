import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../UseContext/useAuth';
import './login.css'
const Login = () => {
    const {googleSignIn, githubSignIn, error, setLocation, setHistory} = useAuth()
    const location = useLocation()
    useEffect( ()=>{
        setLocation(location)
    },[location])
    const history = useHistory()
    useEffect( ()=>{
        setHistory(history)
    },[history])
    return (
        <div className="login-container">
            <div  className="login-box">
                <h1 className="text-center">Login</h1>
                <div>
                    <p>Email:</p>
                    <input type="email" />
                    <p>Password:</p>
                    <input type="password" />
                    <br />
                    <p className="text-danger text-center">{error}</p>
                    <button className="btn btn-primary login-btn">login</button>
                    <p className="text-center">New User? <Link to="/register">Register</Link></p>
                     <p className="text-center">Or Sign Up Using</p>
                    <div className="signup-btn-container">
                    <button onClick={googleSignIn} className="signup-google-btn">Signup Using Google</button>
                    <button onClick={githubSignIn} className="signup-github-btn">Signup Using Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;