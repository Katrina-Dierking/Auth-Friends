import React, { useContext} from 'react';
import FriendContext from './FriendContext';


function FriendsList () {
    const {friends} = useContext (FriendContext)
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
                        // onClick = {() => unFriend (friend.id)}
                        >
                            UnFriend
                        </button>
                    <br></br>
                </div>
                
            ))}
        </>
    )
}

export default FriendsList;