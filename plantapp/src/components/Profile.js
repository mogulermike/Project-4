import React from 'react';


const Profile = (props) => {
    return (
        <div>
            <p>Welcome to your Profile Page!{props.currentUser.username}</p>

        </div>
    )
}

export default Profile;