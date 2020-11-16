import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
padding: 10px;
margin: 10px;
line-height: 100%;
border-radius: 18px;
background: linear-gradient(145deg, #bbbbbb, #111111);
box-shadow:  5px 5px 10px #999999, 
             -5px -5px 10px #ffffff;
`

export default function PlantItem(props) {
    return (
        <div id = "plantWrapper">
            <WrapperDiv>
                <h2>Name: {props.item.name}</h2>
                <h2>Type:{props.item.type}</h2>
            </WrapperDiv>
        </div>
    )
}