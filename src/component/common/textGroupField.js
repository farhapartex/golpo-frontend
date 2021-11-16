import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";


const TextGroupField = (props)=> {
    const {label, id, type, value, handleChange, placeholder } = props
    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} value={value} onChange={(e)=>{handleChange(e.target.value)}} placeholder={placeholder} />
        </Form.Group>
    )
}

TextGroupField.propTypes = {
    label: Proptypes.string,
    type: Proptypes.string,
    id: Proptypes.string,
    placeholder: Proptypes.string,
    value: Proptypes.string,
    handleChange: Proptypes.func
}

TextGroupField.defaultProps = {
    label: "",
    id: "",
    type: "text",
    value: "",
    placeholder: "",
    handleChange: ()=>{}
}

export default TextGroupField;