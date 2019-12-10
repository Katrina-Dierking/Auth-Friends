import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <>
        <h2>Name: {friend.name}</h2>
        <h3>Age: {friend.age}</h3>
        <h3>Email: {friend.email}</h3>
        </>
    );
};

export default FriendCard;