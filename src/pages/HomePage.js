import React from "react";
import { Container } from "react-bootstrap";
import { SinglePost } from "../component/post";

const HomePage = ()=> {
    return (
        <Container fluid>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div id="homePage" className="w-75 mt-5">
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </Container>
        
    )
}

export default HomePage;