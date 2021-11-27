import React from "react";
import ProfileHead from "../component/profile/profileHeading";
import ProfileBody from "../component/profile/profileBody";

const ProfilePage = ()=> {
    return (
        <div id="profilePage" className="w-65 mx-auto">
            <ProfileHead />
            <ProfileBody />
        </div>
    )
}

export default ProfilePage;