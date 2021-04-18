import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Book from './components/Customer/Book/Book';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import Review from './components/Customer/Review/Review';
import BookingList from './components/Customer/BookingList/BookingList';
import OrderList from './components/Admin/OrderList/OrderList';
import ManageService from './components/Admin/ManageService/ManageService';
import Services from './components/Home/Services/Services';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute  path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute  path='/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute  path='/manageService'>
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path='/book/:id'>
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
