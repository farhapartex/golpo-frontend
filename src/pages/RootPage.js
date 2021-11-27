import React from "react";
import {Routes, Route,} from "react-router-dom";
import { NavigationBar } from "../component/navigation";
import { HomePage, ProfilePage } from ".";

const RootPage = ()=> {
    return (
        <div id="rootPage">
            <NavigationBar />
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/profile" element={<ProfilePage />}/>
            </Routes>
        </div>
    )
}

export default RootPage;