import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
        console.log(this.state.allplants)
        return (
            <div>
                {this.props.currentUser ?
                    <p>Welcome to your Profile Page!{this.props.currentUser.username}</p>
                    : null
                }

                {this.state.allplants && this.state.allplants.data.Plants.map((item, id) => {
                    return (
                        <div key={id}>
                        
                        <h2>{item.name}</h2>
                        <img src= {item.img} alt="img"/>
                        </div>
                    )
                        
                })}
    

                
                <Link to='/home' activeClassName="active">
                    <button onClick={(e) => this.props.handleLogout(e)}>Logout</button>
                </Link>

            </div>
        )
    }
}

export default Profile;