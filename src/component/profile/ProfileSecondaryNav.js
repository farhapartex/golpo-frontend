import React from "react";
import { Nav, } from "react-bootstrap";

const ProfieSecondaryNav = ()=> {
    return (
        <div id="profileSecondaryNav">
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/posts">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/friend-list">Friends 700</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default ProfieSecondaryNav;