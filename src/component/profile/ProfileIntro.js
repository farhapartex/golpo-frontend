import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileIntro = ()=> {
    return (
        <div id="userIntro">
            <h4>Intro</h4>
            <ul className="activity-list mt-3">
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Software Engineer at Sixads</span></li>
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Former Software Engineer at Strativ</span></li>
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Former Back-End Developer at COdesign</span></li>
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Former Software Developer at Genweb2</span></li>
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Software Engineer at Sixads</span></li>
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Former Student of Second Major (CSE) at Shahjalal University of Science & Technology, Sylhet</span></li>
                <li><span className="mr-1"><FontAwesomeIcon icon="briefcase" /></span><span>Former Student at Department of Mathematics at Shahjalal University of Science & Technology, Sylhet</span></li>
            </ul>
        </div>
    )
}

export default ProfileIntro;