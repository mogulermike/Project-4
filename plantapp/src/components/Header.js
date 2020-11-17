import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderCSS = styled.div`
background: rgb(63, 63, 63);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
color: white;
height: 80px;

nav a {
    text-decoration: none;
    color: white;
    border: 2px solid rgb(130, 130, 130);
    padding: 6px;
    border-radius: 4px;
    margin: 10px;
    white-space: nowrap;
}

nav a:hover {
    background-color: rgb(41, 244, 122);
    color: rgb(45, 45, 45);
    border: 2px solid rgb(41, 244, 122);
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
                        <NavLink to='/home' activeclassname="active">Home</NavLink>
                        
                        {!props.currentUser ?
                            <NavLink to='/login' activeclassname="active">Login/Register</NavLink>
                            :
                            // <button onClick={(e) => 
                            //     props.handleLogout(e)}>Logout</button>
                            // <NavLink to='/profile' onClick={(e) => 
                            //     props.handleLogout(e)} activeClassName="active">Logout</NavLink>
                            <NavLink to='/profile' activeclassname="active">Profile</NavLink>
                        }
                        
                        <NavLink to='/plants' activeclassname="active">Plants</NavLink>
                    </nav>
                </div>
            
        </HeaderCSS>
    )
}

export default Header;