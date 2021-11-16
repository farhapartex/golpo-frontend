import React, { useState } from "react";
import Proptypes from "prop-types";
import { Button } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";
import CheckBox from "../common/checkBox";
import { isFormValidation } from "../../common/methods";
import { Banner } from "../banner";


const Registration = (props) =>{
    const {setIsShowLoginBlock, } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [termCondition, setTermCondition] = useState(false);

    const [isShowErrorBanner, setIsShowErrorBanner] = useState(false);
    const [isShowSuccessBanner, setIsShowSuccessBanner] = useState(false);
    const [errorBannerMessage, setErrorBannerMessage] = useState("");
    const [successBannerMessage, setSuccessBannerMessage] = useState("");

    const handleRegistration = ()=> {
        const formObj = {
            Name: fullName,
            Email: email,
            Password: password,
            Term: termCondition
        }

        const validationRes = isFormValidation(formObj);

        if(validationRes && validationRes.length > 0){
            setIsShowSuccessBanner(false);
            setSuccessBannerMessage("");

            setIsShowErrorBanner(true);
            setErrorBannerMessage(validationRes);
        }
        else{
            setIsShowErrorBanner(false);
            setErrorBannerMessage("");

            setIsShowSuccessBanner(true);
            setSuccessBannerMessage("Yeee! Registration Done");

            // TODO Call Login API
        }
    }

    const closeSuccessBanner = ()=> {
        setIsShowSuccessBanner(false);
        setSuccessBannerMessage("");
    }

    const closeErrorBanner = ()=> {
        setIsShowErrorBanner(false);
        setErrorBannerMessage("");
    }



    return (
        <div className="w-100">

            {isShowErrorBanner && <Banner type="danger" message={errorBannerMessage} handleCloseBanner={closeErrorBanner}/>}
            {isShowSuccessBanner && <Banner type="info" message={successBannerMessage} handleCloseBanner={closeSuccessBanner}/>}

            <div className="w-100">
                <h4>Welcome to Circle</h4>
            </div>
            <div id="loginFormBlock" className="mt-5">
                <TextGroupField label="Full Name" id="rFullName" value={fullName} handleChange={setFullName} placeholder="Type your name"/>
                <TextGroupField label="Email" id="rEmail" value={email} handleChange={setEmail} placeholder="Type your valid email"/>
                <TextGroupField label="Password (8 digit minimum)" type="password" value={password} handleChange={setPassword} placeholder="Type your password"/>
                <CheckBox id="termsConditions" label="Accept terms & conditions" name="termCondition" value={termCondition} handleChange={setTermCondition}/>
                <Button variant="info" className="w-100 mt-3 baseButton" onClick={()=> {handleRegistration()}}>Click to Join</Button>
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