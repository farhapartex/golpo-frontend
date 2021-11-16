import React from "react";
import Proptypes from "prop-types";
import { Button } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";


const Login = (props) =>{
    const {setIsShowLoginBlock} = props;

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
                <p>Don't have any account? <span className="baseAnchor" onClick={()=> {setIsShowLoginBlock(false)}}>Create new one</span></p>
            </div>
        </div>
    )
}

Login.propTypes = {
    setIsShowLoginBlock: Proptypes.func,
}

Login.defaultProps = {
    setIsShowLoginBlock: ()=>{}
}

export default Login;