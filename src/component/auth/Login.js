import React, {useState} from "react";
import Proptypes from "prop-types";
import { Button, } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";
import { Banner } from "../banner";


const Login = (props) =>{
    const {setIsShowLoginBlock} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowErrorBanner, setIsShowErrorBanner] = useState(false);
    const [isShowSuccessBanner, setIsShowSuccessBanner] = useState(false);
    const [errorBannerMessage, setErrorBannerMessage] = useState("");
    const [successBannerMessage, setSuccessBannerMessage] = useState("");

    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validation = ()=> {
        let errorList = [];

        if(!email || email.length === 0){
            errorList.push("Email is missing");
        }

        if(email && !validateEmail(email)){
            errorList.push("Email is not valid");
        }

        if(!password || password.length === 0){
            errorList.push("Password is missing");
        }

        return errorList.join(", ");
    }

    const handleLogin = ()=> {
        const validationRes = validation();

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
            setSuccessBannerMessage("Logn Done");

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
                <h4>Login to Circle</h4>
            </div>

            <div id="loginFormBlock" className="mt-5">
                <TextGroupField label="Email" value={email} handleChange={setEmail} placeholder="Type your valid email"/>
                <TextGroupField label="Password" type="password" handleChange={setPassword} value={password} placeholder="Type your password"/>
                <Button variant="info" className="w-100 mt-3 baseButton" onClick={()=>{handleLogin()}}>Login</Button>
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