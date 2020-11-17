import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const WrapperDiv = styled.div`
padding: 10px;
margin: 10px;
line-height: 100%;
border-radius: 18px;
background: linear-gradient(145deg, #bbbbbb, #111111);
box-shadow:  5px 5px 10px #999999, 
             -5px -5px 10px #ffffff;

img {
    width: 100px;
}
`


export default function PlantItem(props) {
    return (
        <div id = "plantWrapper">
            <Link to={"plantinfo/"+props.item.name}>
                <WrapperDiv>
                    <h2>{props.item.name}</h2>
                    <img src= {props.item.img} alt="img"/>
                    <button onClick={(e) => props.addPlant(e,props.item)}>Add to Profile</button>
                </WrapperDiv>
            </Link>
        </div>
    )
}