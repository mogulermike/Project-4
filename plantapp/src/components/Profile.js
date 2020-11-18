import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeCSS = styled.div`

align-items:center;
margin:40px;

p{
    text-shadow: 4px 4px 8px #000000;
    font-size:40px;
}

h2{
    text-shadow: 4px 4px 8px #000000;
    font-size:40px;
}
img {
    width: 300px;
    border-radius: 18px;
    margin:20px;
}
#plants{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;

    h2{
        font-size:30px;
        margin:0;
    }
}
`



class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            plant:null,
            allplants:null
        }
    }

    componentDidMount = async () => {
        let allplants = await this.props.getUserPlant()
        this.setState({
            allplants: allplants
        })
    }

    render () {
        
        return (
            <HomeCSS>
                <div>
                    {this.props.currentUser ?
                        <h2>Welcome to your Profile Page! {this.props.currentUser.username}</h2>
                        : null
                    }
                    <Link to='/home' activeClassName="active">
                        <button onClick={(e) => this.props.handleLogout(e)}>Logout</button>
                    </Link>
                    <h2>Your personal garden:</h2>

                    <div id="plants">
                    {this.state.allplants && this.state.allplants.data.Plants.map((item, id) => {
                        return (
                            <div key={id}>
                            
                            <h2>{item.name}</h2>
                            <img src= {item.img} alt="img"/>
                            </div>
                        )
                            
                    })}
                    </div>
        

                    
                    

                </div>
            </HomeCSS>
        )
    }
}

export default Profile;