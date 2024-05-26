import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LoginPage from './Login';
import RegisterPage from './Register';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <Router>
        

        {/* Route for the LoginPage */}
        <Route path="/login" component={LoginPage} />

        {/* Route for the WelcomePage */}
        <Route exact path="/WelcomePage" component={WelcomePage} />
        {/* Route for the RegisterPage */}

        <Route path="/register" component={RegisterPage} />

        {/* Add more routes as needed */}
        
        {/* Route for handling unknown paths */}
        {/* This Route will match for any path that is not matched by the routes above */}
        <Route component={() => <div>404 Not Found</div>} />
      </Router>
    </CookiesProvider>
  );
}

export default App;
