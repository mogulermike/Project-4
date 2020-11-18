import React, { Component } from 'react';
import styled from 'styled-components';



const WrapperDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:60%;
padding: 10px;
margin: 0 auto;
line-height: 100%;
border-radius: 18px;

img {
    width: 400px;
}
`
class PlantInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            plant:null
        }
    }

    componentDidMount() {
        let plant=this.state.plant;
        for(let i=0; i<this.props.plants.length; i++) {
            if(this.props.plants[i].name === this.props.match.params.name) {
                plant=this.props.plants[i];
                this.setState({ plant: plant})
            }
        }
    }

    render() {
        return (
            <div id = "plantWrapper">
                {this.state.plant &&
                    <WrapperDiv>
                        <h2>{this.state.plant.name}</h2>
                        <img src= {this.state.plant.img} alt="hello"/>
                        <h2>Light Requirements: {this.state.plant.light}</h2>
                        <h3>{this.state.plant.details}</h3>
                    </WrapperDiv>
                }
            </div>
        )
    }
}

export default PlantInfo;