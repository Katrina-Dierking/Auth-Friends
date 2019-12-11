import React, { useContext} from 'react';
import FriendContext from './FriendContext';


function DeleteFriend () {
    const {friends, unFriend} = useContext (FriendContext)
    console.log(friends)


    return (
        <>
            {friends.map (friend => (
                <div>
                    <h3>Friend's Name: {friend.name}
                    <br></br>
                    Age: {friend.age}
                    <br></br>
                    Email: {friend.email} </h3>

                    <button className = 'remove-friend-btn'
                        onClick = {() => unFriend (friend.id)}
                        >
                            UnFriend
                        </button>
                        <hr></hr>
                    <br></br>
                </div>
                
            ))}
        </>
    )
}

export default DeleteFriend;