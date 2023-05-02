// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
// import AcUnitIcon from '@material-ui/icons/AcUnit';
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
       
        <Route exact path='/' element={ user ? <Home /> : <Register/>}/>
        <Route exact path='/login' element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route exact path='/register' element={user ? <Navigate to="/" /> :<Register/>}/>
        <Route exact path='/profile/:username' element={<Profile/>}/>

        {/* <Route path="/profile/:username">
          <Profile />
        </Route> */}

      </Routes>
    </Router>

  )
}

export default App;
