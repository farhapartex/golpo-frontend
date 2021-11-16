import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";


const Login = () =>{
    return (
        <div className="w-100">
            <div className="w-100">
                <h4>Login to Circle</h4>
            </div>
            <div id="loginFormBlock" className="mt-5">
                <TextGroupField label="Email" placeholder="Type your valid email"/>
                <TextGroupField label="Password" type="password" placeholder="Type your password"/>
                <Button variant="info" className="w-100 mt-3 baseButton">Login</Button>
            </div>

            <div className="w-100 mt-4">
                <p>Don't have any account? <Link to="" className="baseAnchor">Create new one</Link></p>
            </div>
        </div>
    )
}

export default Login;