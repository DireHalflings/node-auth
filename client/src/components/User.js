import React from 'react';

const User = ({ user }) => {
    console.log(user);
    const { name, email, date } = user;

    return ( 
        <div>
            <h3>{ name }: {email}</h3>
            <h4>Created on: { date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}) }</h4>
        </div>
    );
}

export default User;