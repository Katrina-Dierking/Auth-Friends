import React, {useState, useContext} from 'react';
import FriendContext from './FriendContext'
import DeleteFriend from './DeleteFriend'

// import styled from 'styled-components';

function FriendForm () {
    const [newFriend, setNewFriend] = useState 
    ({
        name: '',
        age: '',
        email: '',
        id: ''
    });

    const {addFriend} = useContext (FriendContext);


    const handleChange = event => {
        setNewFriend (
            {...newFriend, 
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit () {
        addFriend(newFriend)
    };
           
    return (
        <>
        {/* <Container> */}
            <br></br>
            <form onSubmit = {handleSubmit}>
                <input
                    type = 'text'
                    name = 'name'
                    value = {newFriend.name}
                    placeholder = "* New Friend's Name"
                    onChange = {handleChange}
                />
            
                <br></br>
                <br></br>
           
            <input
                type = 'text'
                name = 'age'
                value = {newFriend.age}
                placeholder = 'age'
                onChange = {handleChange}
            />
            
            <br></br>
            <br></br>

            <input
                type = 'text'
                name = 'email'
                value = {newFriend.email}
                placeholder = '* email'
                onChange = {handleChange}
            />
           
            <br></br>
            <br></br>
            <button >Add New Friend</button>
            <hr></hr>
         
        </form>
        <DeleteFriend/>
        </>
    );
};
        
        


export default FriendForm;