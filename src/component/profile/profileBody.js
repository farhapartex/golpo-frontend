import React from "react";
import { Container } from "react-bootstrap";
import ProfileIntro from "./ProfileIntro";
import { SinglePost } from "../post";


const ProfileBody = ()=> {
    return (
        <div id="profileBody" className="mt-4">
            <Container fluid>
                <div className="row">
                    <div className="col-3">
                        <ProfileIntro />
                    </div>
                    <div className="col-9">
                        <div className="self-timeline w-75">
                            <SinglePost />
                            <SinglePost />
                            <SinglePost />
                            <SinglePost />
                            <SinglePost />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileBody;