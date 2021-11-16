import React, { useState } from "react";
import Proptypes from "prop-types";
import { Button } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";
import CheckBox from "../common/checkBox";


const Registration = (props) =>{
    const {setIsShowLoginBlock, } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [termCondition, setTermCondition] = useState(false);



    return (
        <div className="w-100">
            <div className="w-100">
                <h4>Welcome to Circle</h4>
            </div>
            <div id="loginFormBlock" className="mt-5">
                <TextGroupField label="Full Name" id="fullName" value={fullName} handleChange={setFullName} placeholder="Type your name"/>
                <TextGroupField label="Email" id="email" value={email} handleChange={setEmail} placeholder="Type your valid email"/>
                <TextGroupField label="Password (8 digit minimum)" type="password" value={password} handleChange={setPassword} placeholder="Type your password"/>
                <CheckBox label="Accept terms & conditions" name="termCondition" value={termCondition} handleChange={setTermCondition}/>
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