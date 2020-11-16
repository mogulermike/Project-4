import React from 'react';
import { Link } from 'react-router-dom';


const Profile = (props) => {
    return (
        <div>
            <p>Welcome to your Profile Page!{props.currentUser.username}</p>
            
            <Link to='/home' activeClassName="active">
                <button onClick={(e) => props.handleLogout(e)}>Logout</button>
            </Link>

        </div>
    )
}

export default Profile;