
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Recent from './components/Recently Added/Recent';
import TopRated from './components/TopRated/TopRated';
import NavBar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
     
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path='/home' element={<Home/>}></Route>
   <Route path='/recently' element={<Recent/>}></Route>
   <Route path='/toprated' element={<TopRated/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
    
  );
}

export default App;
