import { AuthProvider } from "./auth";
import {Home} from "./Home"
import { Login } from "./Login"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Navigation } from "./components/navigation";
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
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/"  element={<Navigate to="/login" replace/> }/>
            <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/moodreco" element={<Camera/>}/>
          </Routes>      
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
};

export default App;

// client id
// 871906509606-fpervph8512sk23ork06ds3hfkjb3csu.apps.googleusercontent.com

// client server id 
// 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