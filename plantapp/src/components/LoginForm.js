import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const PageCSS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  input[type=submit]:hover {
    background-color:white;
    color: #4CAF50
  }

  a{
    text-decoration:none;
    text-shadow: 4px 4px 8px #000000;
    font-size:20px;
    color:white;
  }
  a:hover{
    color: chartreuse;
  }

  
`



class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // aka const name = e.target.name; const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <PageCSS>
        <div>
        <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
          <input
            placeholder = "Username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            placeholder = "Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" value="Login" />
          <br></br>
          <Link to="/register">Don't have an account? Register!</Link>
        </form>
        </div>
      </PageCSS>
    )
  }
}

export default LoginForm;