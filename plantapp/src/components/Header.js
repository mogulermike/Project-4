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

const Header = () => {
    return (
        <HeaderCSS>
        <div id="header">
            {/* <LogoImg src="./images/logo2.png" alt="logo"/> */}
            <nav>
                <NavLink to='/home' activeClassName="active">Home</NavLink>
                <NavLink to='/login' activeClassName="active">Login</NavLink>
                <NavLink to='/newTrip' activeClassName="active">Search</NavLink>
            </nav>
        </div>
        </HeaderCSS>
    )
}

export default Header;