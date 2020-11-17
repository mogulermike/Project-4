import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Plants from './components/Plants';
import PlantInfo from './components/PlantInfo';

import BeginnerPlants from './components/BeginnerPlants';

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';


import { registerUser, loginUser, verifyUser, allPlants, addPlant, getUserPlant } from './services/api_helper';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      plants: null
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
    this.props.history.push('/profile');
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    this.props.history.push('/profile');
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }

  handleLogout = async (e, currentUser) => {
    localStorage.removeItem('authToken');
    currentUser = this.state.currentUser;
    this.setState({ currentUser: null });
  }

  componentDidMount = async () => {
    await this.handleVerify();
    await this.allPlants();
  }

  allPlants = async() => {
    const plants = await allPlants();
    this.setState({
      plants: plants.data
    })
    console.log(plants)
  }

  addPlant = async(e,plantId) => {
    const userplants = await addPlant(plantId, this.state.currentUser.id)
  }

  getUserPlant = async() => {
    const allplants = await getUserPlant(this.state.currentUser.id)
    return allplants
  }


  render() {
    return (
      <div className="App">
        <Header 
          currentUser = {this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        {/* <nav>
          {this.state.currentUser ?
            <div>
              <p>Hello {this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          :
            <Link to="/login"><button>Login/Register</button></Link>
          }
        </nav> */}

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
          <BeginnerPlants />
        </Route>

        <Route path="/Plantinfo/:name" 
          render={ (props) => {
            return <PlantInfo 
                      plants = {this.state.plants}
                      {...props}
                  />
          }}
        />  
        
        
        <Route path="/Plants" >
          <Plants 
            plants = {this.state.plants}
            addPlant = {this.addPlant}
          />
        </Route>

        <Route path="/Profile" >
          <Profile
            currentUser = {this.state.currentUser}
            handleLogout={this.handleLogout}
            getUserPlant= {this.getUserPlant}
          />
        </Route>


        

      </div>
    );
  }
}

export default withRouter(App);
