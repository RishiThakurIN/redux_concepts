import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import CreatePost from './pages/CreatePost/CreatePost';
import Home from './pages/Home/Home';
function App() {
  return (
    <BrowserRouter>    
    <div className="App">
      <Header/>
      <Routes>

        <Route path='/posts' element={<Posts/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
