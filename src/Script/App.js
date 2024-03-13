import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
    const history = useHistory();

    const handleLogin = () => {
        console.log('Login clicked');
        history.push('/login');
    };

    const handleSignUp = () => {
        console.log('Sign Up clicked');
        // Tambahkan logika untuk sign up di sini
    };

    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">JobConnect U</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Search jobs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Companies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                            <form className="log-reg-btn d-flex">
                                <button className="btn btn-custom reg-btn">Sign Up</button>
                                <button className="btn btn-custom log-btn" onClick={handleLogin}>Log in</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/signup">
                        <SignupPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
