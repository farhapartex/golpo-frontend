import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { Login, Registration } from "../component/auth";


const UserAuth = () =>{
    const [isShowLoginBlock, setIsShowLoginBlock] = useState(true);
    return (
        <div className="w-100">
            <Container fluid>
                <div className="row">
                    <div className="col-8" id="loginLeftSide"></div>
                    <div className="col-4">
                        <div className="w-75 p-5 mx-auto" id="loginBaseBlock">
                            {isShowLoginBlock && <Login setIsShowLoginBlock={setIsShowLoginBlock}/>}
                            {!isShowLoginBlock && <Registration setIsShowLoginBlock={setIsShowLoginBlock}/>}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default UserAuth;