import React from "react";
import { Container, Button } from "react-bootstrap";
import TextGroupField from "../component/common/textGroupField";


const UserAuth = () =>{
    return (
        <div className="w-100">
            <Container fluid>
                <div className="row">
                    <div className="col-8" id="loginLeftSide"></div>
                    <div className="col-4">
                        <div className="w-75 mx-auto mt-5">
                            <h4 className="text-center">Login to Golpo</h4>
                        </div>
                        <div className="w-75 mx-auto mt-3">
                            <TextGroupField label="Email" placeholder="Type your valid email"/>
                            <TextGroupField label="Password" type="password" placeholder="Type your password"/>
                            <Button variant="info">Login</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default UserAuth;