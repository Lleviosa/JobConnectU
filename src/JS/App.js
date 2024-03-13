import React from 'react';
import CustomButton from './Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Signuppage from './Signuppage';

function App() {
    const history = useHistory();

    const handleLogin = () => {
        console.log('Login clicked');
        history.push('/login');
    };

        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

    const handleSignUp = () => {
        console.log('Sign Up clicked');
        // Tambahkan logika untuk sign up di sini
    };

    return (
        <div>
            <h1>Welcome to My Website</h1>
            <CustomButton label="Login" onClick={handleLogin} />
            <CustomButton label="Sign Up" onClick={handleSignUp} />
        </div>
    );


export default App;