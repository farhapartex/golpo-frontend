import React, {useState} from "react";
import Proptypes from "prop-types";
import { Button, } from "react-bootstrap";
import TextGroupField from "../common/textGroupField";
import { Banner } from "../banner";
import { isFormValidation } from "../../common/methods";


const Login = (props) =>{
    const {setIsShowLoginBlock} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowErrorBanner, setIsShowErrorBanner] = useState(false);
    const [isShowSuccessBanner, setIsShowSuccessBanner] = useState(false);
    const [errorBannerMessage, setErrorBannerMessage] = useState("");
    const [successBannerMessage, setSuccessBannerMessage] = useState("");

    const handleLogin = ()=> {
        const formObj = {
            Email:  email,
            Password: password,
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
                <TextGroupField label="Email" id="luEmail" value={email} handleChange={setEmail} placeholder="Type your valid email"/>
                <TextGroupField label="Password" id="luPassword" type="password" handleChange={setPassword} value={password} placeholder="Type your password"/>
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