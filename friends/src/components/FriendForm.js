import React, {useState, useContext} from 'react';
import FriendContext from './FriendContext'
import FriendsList from './FriendsList'

// import styled from 'styled-components';

function FriendForm () {
    const [newFriend, setNewFriend] = useState 
    ({
        name: '',
        age: '',
        email: '',
        id: 'null'
    });

    const {addFriend} = useContext (FriendContext);

    const [friendData, setFriendData] = useState ([])

    const handleChange = event => {
        setNewFriend (
            {...newFriend, 
            [event.target.name]: event.target.value
        })
    };

    function handleSubmit (event) {
        event.preventDefault()
        addFriend(newFriend)
        setFriendData (prevFriend => [...prevFriend, addFriend])
    };

           
    return (
        <>
        {/* <Container> */}
        
            <form onSubmit = {handleSubmit}>
                <input
                    type = 'text'
                    name = 'name'
                    value = {newFriend.name}
                    placeholder = "* New Friend's Name"
                    onChange = {handleChange}
                />
            
                <br></br>
           
            <input
                type = 'text'
                name = 'age'
                value = {newFriend.age}
                placeholder = 'age'
                onChange = {handleChange}
            />
            
            <br></br>

            <input
                type = 'text'
                name = 'email'
                value = {newFriend.email}
                placeholder = '* email'
                onChange = {handleChange}
            />
           
            <br></br>
            
            <button >Add New Friend</button>
         


            {friendData.map (friend =>
                <h3 key = {friend.name + friend.email}>
                {friend.name}
                {friend.age}
                {friend.email}
            </h3>)}
           
        </form>
        <FriendsList />
        </>
    );
};
        
        


export default FriendForm;