import React from "react";

const SinglePost = () => {
    return (
        <div className="single-post w-100 p-3">
            <div className="author">
                <h6>Md Nazmul Hasan</h6>
                <p className="post-date">November 20 at 9:43 PM</p>
            </div>
            <div className="content">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                    distribution of letters, as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors ... <a href="#">See more</a></p>
            </div>
        </div>
    )
}

export default SinglePost;