import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";


const TextGroupField = (props)=> {
    const {label, labelId, type, placeholder } = props
    return (
        <Form.Group className="mb-3" controlId={labelId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

TextGroupField.propTypes = {
    label: Proptypes.string,
    type: Proptypes.string,
    labelId: Proptypes.string,
    placeholder: Proptypes.string
}

TextGroupField.defaultProps = {
    label: "",
    labelId: "",
    type: "text",
    placeholder: ""
}

export default TextGroupField;