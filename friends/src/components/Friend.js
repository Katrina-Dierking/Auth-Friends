import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friend = () => {
    const [addFriend, setAddFriend] = useState ({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = event => {
        setAddFriend (
            {...addFriend, 
            [event.target.name]: event.target.value
        })};

    const onSubmit = event => {
        event.preventDefault()

        axiosWithAuth()
        .post ('./friends', addFriend)
        .then (result => {
            console.log ("kd: friendcard: axios post:friends", result)
            setAddFriend ({
                ...addFriend, 
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
                value = {addFriend.name}
                placeholder = "New Friend's Name"
                onChange = {handleChange}
            />
                <br></br>

            <input
                type = 'text'
                name = 'age'
                value = {addFriend.age}
                placeholder = 'age'
                onChange = {handleChange}
            />
            <br></br>

            <input 
                type = 'text'
                name = 'email'
                value = {addFriend.email}
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