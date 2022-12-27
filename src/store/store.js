import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { PostsReducer } from "./reducers/PostsReducer";
import { NameReducer } from "./reducers/NameReducer";
import thunk from "redux-thunk";
import axios from "axios";

const exampleMiddleware = (store) => (next) => (action) => {
    
    let result=next(action);
    
    return result;
}
// function exampleMiddlewareFullForm(store){
//     return function(next){
//         return function(action){
//             return next(action);
//         }
//     }
// }

// const fetchDataMiddleware=(store)=>(next)=>(action)=>{
//     if(action.type===GET_POSTS){
//         //ajax call
//         // axios.get(`https://redux-http-f04b0-default-rtdb.firebaseio.com/posts.json`)
//         // .then(response=>{
//         //     console.log(response.data);
//         //     let posts=[];
//         //     for(let key in response.data){
//         //         posts.push({...response.data[key],id:key});
//         //     }
//         //     store.dispatch(ConfirmedGetPostsAction(posts));
//         // })
//     }
//     return next(action);
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);
const allReducers=combineReducers({
    PostsReducer,
    NameReducer
})
export const store = createStore(allReducers,composeEnhancers(middleware));