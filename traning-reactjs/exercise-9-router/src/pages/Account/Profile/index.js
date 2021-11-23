import React from 'react'
import { Redirect } from 'react-router';

export default function Profile() {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    if (userLogin) {
        return (
            <>
                <h3>Your Profile:</h3>
                <div className="profile-group">
                    <label>UserName: </label><span>{userLogin.userName}</span>
                </div>
                <div className="profile-group">
                    <label>Password: </label><span>{userLogin.passWord}</span>
                </div>
            </>
        )
    } else {
        alert("You must login to view your profile!!!");
        return <Redirect to="/login" />
    }
}
