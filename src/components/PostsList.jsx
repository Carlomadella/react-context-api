import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";
const PostsList = () =>{
    const posts = useContext(PostsContext)
    return(
        <h2>Elenco dei posts</h2>     
    )
}

export default PostsList;