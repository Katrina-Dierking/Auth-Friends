import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friend = () => {
    const [newFriend, setNewFriend] = useState ({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = event => {
        setNewFriend (
            {...newFriend, 
            [event.target.name]: event.target.value
        })};

    const onSubmit = event => {
        event.preventDefault()

        axiosWithAuth()
        .post ('./friends', newFriend)
        .then (result => {
            console.log ("kd: friendcard: axios post:friends", result)
            setNewFriend ({
                ...newFriend, 
                name: '',
                age: '',
                email: ''
            })
            .catch (error => console.log(error));
        })
    };

    return (
        <form onSubmit = {onSubmit}>
            <input 
                type = 'text'
                name = 'name'
                value = {newFriend.name}
                placeholder = "New Friend's Name"
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

            <button 
                type = 'submit'
                >Add New Friend
            </button>
        </form>
    );
};

export default Friend;