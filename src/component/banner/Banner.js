import React from "react";
import Proptypes from "prop-types";
import { Alert } from "react-bootstrap";

const Banner = (props)=> {
    const {type, message, handleCloseBanner} = props;

    return (
        <Alert variant={type} onClose={() => handleCloseBanner(false)} dismissible>{message}</Alert>
    )
}

Banner.propTypes = {
    message: Proptypes.string,
    info: Proptypes.string,
    handleCloseBanner: Proptypes.func
}

Banner.defaultProps = {
    message: "",
    type: "info",
    handleCloseBanner: ()=>{}
}


export default Banner;