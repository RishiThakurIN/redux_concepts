import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CreatePostAction } from "../../store/actions/PostAction";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const navigate=useNavigate();

    function onCreatePost(e) {
        e.preventDefault();
        const postData = {
            title,
            description
        };
        dispatch(CreatePostAction(postData,navigate));        
    }
    return <div>
        <h2>Create Post</h2>
        <div>
            <Link to="/posts">Back to posts</Link>
        </div>
        <div>
            <form onSubmit={onCreatePost}>
                <div>
                    <label>Title</label>
                    <div>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <div><input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /></div>
                </div>
                <div>
                    <button type="submit">Create post</button>
                </div>
            </form>
        </div>
    </div>
}