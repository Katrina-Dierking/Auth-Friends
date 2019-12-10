import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';
import Friend from './Friend';


function FriendsList () {
    const [friends, setFriends] = useState([]);

    useEffect(() => {

        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then (result => {
                console.log("kd:FriendsList:axios 'friends:'", result)
                setFriends(result.data.friends)
            })
            .catch (error => console.log(error))
    })

    return (
        <>
            <Friend />
            <h1> Meet My Friends: </h1>
            {friends.map (friend => (
                <div>
                    key={friend.id}
                    <FriendCard friend = {friend} />
                </div>
                
            ))}
        </>
    )
}

export default FriendsList;