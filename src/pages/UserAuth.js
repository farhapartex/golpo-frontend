import React from "react";
import { Container } from "react-bootstrap";
import { Login } from "../component/auth";


const UserAuth = () =>{
    return (
        <div className="w-100">
            <Container fluid>
                <div className="row">
                    <div className="col-8" id="loginLeftSide"></div>
                    <div className="col-4">
                        <div className="w-75 p-5 mx-auto" id="loginBaseBlock">
                            <Login />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default UserAuth;