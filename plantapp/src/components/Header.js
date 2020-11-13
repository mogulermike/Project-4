import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderCSS = styled.div`
background: rgb(63, 63, 63);
display: flex;
align-items: center;
justify-content: flex-end;
color: white;
height: 80px;
`

const Header = (props) => {
    return (
        <HeaderCSS>
        <div id="header">
        {props.currentUser ?
            <p>{props.currentUser.username}</p>
            : null
        }
            {/* <LogoImg src="./images/logo2.png" alt="logo"/> */}
            <nav>
                <NavLink to='/home' activeClassName="active">Home</NavLink>
                
                {!props.currentUser ?
                    <NavLink to='/login' activeClassName="active">Login/Register</NavLink>
                    :
                    // <button onClick={(e) => 
                    //     props.handleLogout(e)}>Logout</button>
                    <NavLink to='/home' onClick={(e) => 
                        props.handleLogout(e)} activeClassName="active">Logout</NavLink>
                }
                
                <NavLink to='/newTrip' activeClassName="active">Search</NavLink>
            </nav>
        </div>
        </HeaderCSS>
    )
}

export default Header;