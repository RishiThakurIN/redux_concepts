import axios from "axios"

export const getPostService=()=>{
    return axios.get(`https://redux-http-f04b0-default-rtdb.firebaseio.com/posts.json`);
}

export function createPost(postData){
    return axios.post(`https://redux-http-f04b0-default-rtdb.firebaseio.com/posts.json`,
    postData);
}

export const formatResult=(data)=>{
    let posts=[];
            for(let key in data){
                posts.push({...data[key],id:key});
            } 
            return posts;
}