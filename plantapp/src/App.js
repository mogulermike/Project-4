import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Plants from './components/Plants';

import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


import { registerUser, loginUser, verifyUser } from './services/api_helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      cities: null
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    console.log("registerData is")
    console.log(registerData)
    const currentUser = await registerUser(registerData);
    console.log(currentUser)
    this.setState({ currentUser });
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          {this.state.currentUser ?
            <div>
              <p>Hello {this.state.currentUser.username}</p>
              {/* <button onClick={this.handleLogout}>Logout</button> */}
            </div>
          :
            <Link to="/login"><button>Login/Register</button></Link>
          }
        </nav>

        <Route path="/login" render={() => (
          <LoginForm handleLogin={this.handleLogin} />
        )} />

        <Route path="/register" render={() => (
          <RegisterForm handleRegister={this.handleRegister} />
        )} />

        <Route exact path={["/home","/"]} >
            <HomePage />
        </Route>

        <Route path="/BeginnerPlants" >
          <Plants />
        </Route>

      </div>
    );
  }
}

export default withRouter(App);
