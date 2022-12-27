import { ConfirmedGetPostsAction, CONFIRMED_CREATE_NEW_POST, CONFIRMED_GET_POSTS, CREATE_NEW_POST } from "../actions/PostAction";

const initialState = {
    posts: []
}
export const PostsReducer = (state = initialState, action) => {
    if (action.type === CREATE_NEW_POST) {
        const newPost =
            { id: Math.random(), title: 'New title 1', description: 'New title 1 description' };
        const posts = [...state.posts];
        posts.push(newPost);
        return {
            ...state,
            posts,
        };
    }
    if (action.type === CONFIRMED_CREATE_NEW_POST) {
        const posts = [...state.posts];
        posts.push(action.payload);
        return {
            ...state,
            posts,
        }
    }

    if (action.type === CONFIRMED_GET_POSTS) {
        return {
            ...state,
            posts: action.payload,
        };
    }
    return state;
}