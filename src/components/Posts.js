import { createRef, useEffect } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { CreatePostAction, GetPostsAction, SetNameAction } from "../store/actions/PostAction";


const PostsComponent = ({ posts,createPost,setName,name,getPost }) => {      
    const textInput=createRef();
    const postArr = [];

    useEffect(()=>{
        if(posts && !posts.length)
        getPost();
    },[getPost,posts]);

    for (let post of posts) {
        postArr.push(<div key={Math.random()} style={{borderStyle:'dotted'}}>{post.title}</div>)
    }

    const createPostHandler=()=>{
        createPost();
    }

    const displayNameHandler=()=>{
        setName(textInput.current.value);
    }
    return (
        <>
        <Link to="/createpost">New Post</Link>
            <div>Posts component</div>
            <div>{postArr}</div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts,
        name:state.NameReducer.name
    }
}
const mapDispatchToProps=(dispatch)=>{    
    return {
        createPost:()=>dispatch(CreatePostAction()),
         setName:(name)=>dispatch(SetNameAction(name)),
         getPost:()=>dispatch(GetPostsAction()),
    }    
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);