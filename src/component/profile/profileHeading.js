import React from "react";
import { Container } from "react-bootstrap";
import avatar from "../../static/images/avatar.jpg";
import ProfieSecondaryNav from "./ProfileSecondaryNav";

const ProfileHead = ()=> {
    return (
        <div id="profileHeading" className="mt-5">
            <Container fluid>
                <div className="row">
                    <div className="col-3" id="avatar">
                        <img src={avatar}/>
                    </div>
                    <div className="col-9">
                        <div className="w-75 mt-4 p-3">
                            <h3>Md Nazmul Hasan</h3>
                            <p>Don't underestimate me. I know more than I say. Think more than I speak, notice more than you realize</p>
                        </div>

                        <div>
                            <ProfieSecondaryNav />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileHead;