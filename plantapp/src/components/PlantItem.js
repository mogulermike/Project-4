import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const WrapperDiv = styled.div`
padding: 10px;
margin: 10px;
line-height: 100%;
border-radius: 18px;


img {
    width: 300px;
    border-radius: 18px;
}
div {
    position: relative;
    display: flex;
    flex-direction: column;

}

h2 {
    position: absolute;
    align-items:center;
    text-decoration: none;
    text-shadow: 4px 4px 8px #bbbbbb;
    font-size:20px;
    color: black;
}

button {
    width:50%;
}


`


export default function PlantItem(props) {
    return (
        <div id = "plantWrapper">
            <Link to={"plantinfo/"+props.item.name}>
                <WrapperDiv>
                    <div>
                
                        <h2>{props.item.name}</h2>
                        <img src= {props.item.img} alt="img"/>
                        <button onClick={(e) => props.addPlant(e,props.item)}>Add to Profile</button>
                    </div>
                </WrapperDiv>
            </Link>
        </div>
    )
}