import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { Login, Registration } from "../component/auth";


const UserAuth = () =>{
    const [isShowLoginBlock, setIsShowLoginBlock] = useState(true);


    return (
        <div className="w-100">
            <Container fluid>
                <div className="row">
                    <div className="col-xl-8 col-lg-7 col-md-5 col-sm-1" id="loginLeftSide"></div>
                    <div className="col-xl-4 col-lg-5 col-md-7 col-sm-11">
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