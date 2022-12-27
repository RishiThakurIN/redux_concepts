import { useNavigate, useNavigation } from "react-router-dom";
import { createPost, formatResult, getPostService } from "../../services/getPostService";

export const CREATE_NEW_POST='[create post] new post';
export const CONFIRMED_CREATE_NEW_POST='[create post] confirmed new post';
export const SET_NAME='[set name] new name';
export const GET_POSTS='[Post Action] Get Posts';
export const CONFIRMED_GET_POSTS='[Post Action] Confirmed Get Posts';

export const CreatePostAction=(postData,navigation)=>{
    return dispatch=>{
        createPost(postData)
        .then(response=>{
            const singlePost={
                ...postData,
                id:response.data.name
            }
            dispatch(ConfirmedCreatePostAction(singlePost));
            navigation('/posts');
        });
    }
}

export function ConfirmedCreatePostAction(singlePost){
    return {
        type:CONFIRMED_CREATE_NEW_POST,
        payload:singlePost,
    }
}

export const SetNameAction=(name)=>{
    return {
        type:SET_NAME,
        payload:name,
    }
}

export function GetPostsAction(){
    return (dispatch,getState)=>{  //thunk
        getPostService()
        .then(response=>{
            // console.log(response.data);
            // console.log('----',getState());
            const posts=formatResult(response.data);
             dispatch(ConfirmedGetPostsAction(posts));
            // console.log('++++',getState());
        })
    }
    // return {
    //     type:GET_POSTS,
    // }
}

export function ConfirmedGetPostsAction(posts){
    return {
        type:CONFIRMED_GET_POSTS,
        payload:posts,
    }
}