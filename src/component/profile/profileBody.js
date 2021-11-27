import React from "react";
import { Container } from "react-bootstrap";

const ProfileBody = ()=> {
    return (
        <div id="profileBody" className="mt-4">
            <Container fluid>
                <div className="row">
                    <div className="col-3">
                        <div id="userIntro">
                            <h4>Intro</h4>
                            <ul className="activity-list mt-3">
                                <li>Software Engineer at Sixads</li>
                                <li>Former Software Engineer at Strativ</li>
                                <li>Former Back-End Developer at COdesign</li>
                                <li>Former Software Developer at Genweb2</li>
                                <li>Former Student of Second Major (CSE) at Shahjalal University of Science & Technology, Sylhet</li>
                                <li>Former Student at Department of Mathematics at Shahjalal University of Science & Technology, Sylhet</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9"></div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileBody;