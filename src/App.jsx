import { AuthProvider } from "./auth";
import {useState,useEffect} from 'react';
import {Home} from "./Home"
import { Login } from "./Login"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {auth} from './firebase'
import { Navigation } from "./components/navigation";
import {Signup} from './components/Signup'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import Camera from "./components/Camera";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {

  const [user, setuser] = useState(null)
  useEffect((e)=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setuser(user);
        console.log("user has been login")
      }else{
        setuser(null);
      }
    })

  },[])
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/"  element={<Home myuser={user}/>}/>
          <Route path="/login" element={<Login myuser={user}/>}/>
          <Route path="/home" element={<Home myuser={user}/>}/>
          <Route path="/moodreco" element={<Camera myuser={user}/>}/>
          <Route path="/signup" element={<Signup myuser={user}/>}/>
        </Routes>      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
