import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderCSS = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
color: white;
height: 80px;
margin-right:20px;
margin-left:30px;

nav a {
    background: rgba(255, 255, 255, 0.2);
    text-decoration: none;
    color: white;
    border: .5px solid rgb(255, 255, 255);
    padding: 6px;
    border-radius: 4px;
    margin: 10px;
    white-space: nowrap;
}

nav a:hover {
    background-color: rgb(0,255,128);
    color: rgb(45, 45, 45);
    border: .5px solid rgb(0,128,0);
}
p{
    text-shadow: 4px 4px 8px #000000;
    font-size:20px;
}


`

const Header = (props) => {
    return (
        <HeaderCSS>
            
                <div>
                    {props.currentUser ?
                        <p>Welcome, {props.currentUser.username}</p>
                        : null
                    }
                </div>
                <div>
                    {/* <LogoImg src="./images/logo2.png" alt="logo"/> */}
                    <nav>
                        <NavLink to='/home' activeClassName="active">Home</NavLink>
                        
                        {!props.currentUser ?
                            <NavLink to='/login' activeClassName="active">Login/Register</NavLink>
                            :
                            // <button onClick={(e) => 
                            //     props.handleLogout(e)}>Logout</button>
                            // <NavLink to='/profile' onClick={(e) => 
                            //     props.handleLogout(e)} activeClassName="active">Logout</NavLink>
                            <NavLink to='/profile' activeClassName="active">Profile</NavLink>
                        }
                        
                        <NavLink to='/plants' activeClassName="active">Plants</NavLink>
                    </nav>
                </div>
            
        </HeaderCSS>
    )
}

export default Header;