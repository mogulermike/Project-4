import React, { Component } from 'react';
import styled from 'styled-components';



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
                        <h4>{this.state.plant.details}</h4>
                    </WrapperDiv>
                }
            </div>
        )
    }
}

export default PlantInfo;