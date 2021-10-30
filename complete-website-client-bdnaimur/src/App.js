import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddPackages from './Components/Admin/AddPackages';
import Admin from './Components/Admin/Admin';
import Allservices from './Components/Admin/Allservices/Allservices';
import CheckOut from './Components/CheckOut/CheckOut';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Blogs from './Components/Home/Blogs/Blogs';
import SingleBookingDetails from './Components/Home/BookingDetails/SingleBookingDetails';
import Bookings from './Components/Home/Bookings/Bookings';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import AddOurTeam from './Components/OurTeam/AddOurTeam';
import OurTeam from './Components/OurTeam/OurTeam';
import Packages from './Components/Packages/Packages';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ShowAllOrders from './Components/ShowAllOrders/ShowAllOrders';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import AddBlogs from './Components/Home/Blogs/AddBlogs';
import AllBlogs from './Components/Home/Blogs/AllBlogs';
library.add(fab);
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/singleBookingDetails/:bookingId">
            <SingleBookingDetails/>
          </Route>
          <PrivateRoute path="/checkOut/:productId">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/admin">
             <Admin/>
            </Route>
            <PrivateRoute path="/userDashboard">
             <Dashboard/>
            </PrivateRoute>
          <PrivateRoute path="/bookings">
              <Bookings/>
            </PrivateRoute>
            <PrivateRoute path="/blogs">
              <Blogs/>
            </PrivateRoute>
            <Route path="/showAllOrders">
              <ShowAllOrders/>
            </Route>
          <Route path="/allservices">
            <Allservices/>
          </Route>
          <Route path="/ourTeam">
            <OurTeam/>
          </Route>
          <Route path="/packages">
            <Packages/>
          </Route>
          <Route path="/addPackages">
            <AddPackages/>
          </Route>
          <Route path="/addTeamMember">
            <AddOurTeam/>
          </Route>
          <PrivateRoute path="/addBlogs">
            <AddBlogs/>
          </PrivateRoute>
          <PrivateRoute path="/allBlogs">
            <AllBlogs/>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
    </div>
  );
}

export default App;
