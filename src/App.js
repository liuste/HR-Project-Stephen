import logo from './logo.svg';
import './App.css';
import Housing from '../src/controller/HousingSituation/housing_home'
import HousingApp from '../src/controller/HousingSituation/housing_application'
import Login from '../src/controller/login'
import Logout from '../src/controller/logout'
import Register from '../src/controller/register'
import OnboardAppPage from '../src/controller/OnboardPersonalInfo/OnboardAppPage'
import PersonalInfoPage from '../src/controller/OnboardPersonalInfo/PersonalInfoPage'

import UserHousing from '../src/controller/HousingSituation/housing_portal'
import { BrowserRouter as Router, Link, renderMatches, Route, Routes } from 'react-router-dom';

function App() {
  //const loggedIn = localStorage.token ? true : false
  //const loginLink = (<Link to="/login">Login</Link>)
  //const logoutLink = (<Link to="/logout">Logout</Link> )
  return(
       <Router>
         <div className="App"> 
            <nav
             style={{
               borderBottom: "solid 1px",
             paddingBottom: "1rem",
           }}
         >
           {/* {loggedIn?logoutLink:loginLink}
           |{" "} */}
           <Link to="/housing_home">Housing</Link>|{" "}
           <Link to="/housing_portal">My Housing</Link>|{" "}
           <Link to="/register">Register</Link>|{" "}
          <Link to="/OnboardAppPage">Onboarding Application</Link>|{" "}
           <Link to="/PersonalInfoPage">Personal Information Page</Link>
         </nav>
         <br />
         <br /> 
         <Routes>
           <Route path="/"/>
           <Route path="housing_home" element={<Housing />} />
           <Route path="register" element={<Register />} />
           <Route path="login" element={<Login />} />
           <Route path="logout" element={<Logout/>} />
           <Route path="housing_portal" element={<UserHousing/>} />
           <Route path="housing_application" element={<HousingApp/>} />
           <Route path="OnboardAppPage" element={<OnboardAppPage/>} />
           <Route path="PersonalInfoPage" element={<PersonalInfoPage/>} />
         </Routes>
       </div> 
       </Router>
       
    );
  
}

export default App;
