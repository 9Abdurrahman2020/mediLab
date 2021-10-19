import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllDoctors from './Pages/AllDoctors/AllDoctors';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import UseContext from './UseContext/UseContext';
import Register from './Pages/Register/Register';
import DoctorsDetails from './Pages/DoctorsDetails/DoctorsDetails';
import Appointment from './Pages/Appointment/Appointment';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
      <UseContext>
        <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/all-doctors">
            <AllDoctors/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/details/:id">
            <DoctorsDetails/>
          </PrivateRoute>
          <PrivateRoute path="/appointment/:name">
            <Appointment/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </UseContext>
  );
}

export default App;
