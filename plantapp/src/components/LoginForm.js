import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const PageCSS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  
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
          <Link to="/register">Don't have an account? Register</Link>
        </form>
        </div>
      </PageCSS>
    )
  }
}

export default LoginForm;