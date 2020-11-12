import React from 'react';
import styled from 'styled-components';
import PlantItem from './PlantItem';

const WrapperDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
justify-content: center;
margin-top: 40px;
`

const plantInfo = [
    {
        name: 'Pothos',
        type: 'Trailing',
        level: "3",
        img: "./images/jon.png",
    },
    {
        name: 'Umbrella Plant',
        type: 'Tropical',
        level: "5",
        img: "./images/jon.png",
    },
    {
        name: 'Snake Plant',
        type: 'Hardy',
        level: "3",
        img: "./images/jon.png",

    }
]

export default function Plants() {
    return (
        <WrapperDiv>
            {plantInfo.map((item, id) => {
                return <div key={id}>
                    <PlantItem item={item} />
                </div>
            })}
        </WrapperDiv>
    )
}