import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
  
      <> 
      {this.props.auth0.isAuthenticated ?
        <Router>
          <Header />
          
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
              exact path="/profile"
              element={<Profile />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About/>}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
        : 
        <>
        <Router>
        <Header />
        
        <Routes>
          <Route
            exact path="/"
            element={<BestBooks />}
          >
          </Route>
          <Route
            exact path="/profile"
            element={<Profile />}
          >
          </Route>
          <Route
            exact path="/about"
            element={<About/>}
          >
          </Route>
        </Routes>
        <Footer />
      </Router>
        <Login/>
        </>}
      </>
    )
  }
}

export default withAuth0(App);
