import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";
import PostCard from "./PostCard";

const PostsList = () =>{
    const posts = useContext(PostsContext)
    return(
        <div className="row">
            <div className="col-12">
                {posts.map((post) => {
                    return <PostCard />
                })}
            </div>
        </div>    
    )
}

export default PostsList;