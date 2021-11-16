import React from "react";
import Proptypes from "prop-types";
import { Button } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";


const Registration = (props) =>{
    const {setIsShowLoginBlock, } = props;

    return (
        <div className="w-100">
            <div className="w-100">
                <h4>Welcome to Circle</h4>
            </div>
            <div id="loginFormBlock" className="mt-5">
                <TextGroupField label="Full Name" placeholder="Type your name"/>
                <TextGroupField label="Email" placeholder="Type your valid email"/>
                <TextGroupField label="Password" type="password" placeholder="Type your password"/>
                <Button variant="info" className="w-100 mt-3 baseButton">Click to Join</Button>
            </div>

            <div className="w-100 mt-4">
                <p>Already have account? <span className="baseAnchor" onClick={()=> {setIsShowLoginBlock(true)}}>Login now</span></p>
            </div>
        </div>
    )
}

Registration.propTypes = {
    setIsShowLoginBlock: Proptypes.func,
}

Registration.defaultProps = {
    setIsShowLoginBlock: ()=>{}
}

export default Registration;