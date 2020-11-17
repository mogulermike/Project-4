import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HomeCSS = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
color: white;
margin: 20px;

div {
    display: flex;
    flex-direction: row;
    margin: 20px;

}

div div{
    height: 100px;
    width: 100px;
    background: linear-gradient(145deg, #bbbbbb, #111111);
    box-shadow:  5px 5px 10px #999999, 
             -5px -5px 10px #ffffff
}

`


const HomePage = () => {
    return (
        <HomeCSS>
            <div>
                <h1>HomePage</h1>
            </div>


            <div id = "homeNav">
                <Link to="/BeginnerPlants">
                    <div className="card">
                        Beginner Plants Page
                    </div>
                </Link>

                <Link to="/BeginnerPage">
                    <div className="card">
                        Beginner Plants Page
                    </div>
                </Link>

                <Link to="/BeginnerPage">
                    <div className="card">
                        Beginner Plants Page
                    </div>
                </Link>
                
            </div>
        </HomeCSS>
    )
}

export default HomePage;