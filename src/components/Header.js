import { Link } from "react-router-dom";

const Header =()=>{
    return (
        <div>
            <div className="bg-red-400" style={{backgroundColor:"red"}}>
                <h2>React Router</h2>
                <div>
                    <Link to='' href="">Home</Link>
                    <br/>
                    <Link to='/posts' href="">Posts</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;