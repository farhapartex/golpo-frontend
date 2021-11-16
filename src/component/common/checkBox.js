import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";

const CheckBox = (props)=> {
    const {id, label, name, value, handleChange} = props;


    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Check type="checkbox" name={name} value={value} onChange={(e)=>{handleChange(e.target.checked)}} label={label} />
        </Form.Group>
    )
}

CheckBox.propTypes = {
    label: Proptypes.string,
    id: Proptypes.string,
    name: Proptypes.string,
    value: Proptypes.bool,
    handleChange: Proptypes.func
}


CheckBox.defaultProps = {
    label: "",
    id: "",
    name: "",
    value: true,
    handleChange: ()=> {}
}

export default CheckBox;