import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";
const PostsList = () =>{
    const posts = useContext(PostsContext)
    return(
        <div className="row">
            <div className="col-12">
                {posts.map((post) => {
                    console.log(post)
                })}
            </div>
        </div>    
    )
}

export default PostsList;