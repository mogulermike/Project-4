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


export default function Plants(props) {
    return (
        <WrapperDiv>
            {props.plants && props.plants.map((item, id) => {
                return <PlantItem 
                    item={item} 
                    key={id}
                />
            })}


        </WrapperDiv>
    )
}