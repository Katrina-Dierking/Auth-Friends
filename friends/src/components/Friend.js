import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {withFormik, Form, field} from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

function Friend () {
    const [display, setDisplay] = useState(false);
    const [newFriend, setNewFriend] = useState 
    ({
        name: '',
        age: '',
        email: '',
        id: 'null'
    });

    const handleChange = event => {
        setNewFriend (
            {...newFriend, 
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault()

        if (newFriend.name != ' ' 
            && newFriend.age != ' ' 
            && newFriend.email != '') 
        
        {
        axiosWithAuth()
            .post ('./friends', newFriend)
            .then (result => {
                console.log ("kd: friendcard: axios post:friends", result)
            })
            .catch (error => console.log(error));

            setNewFriend ({
                ...newFriend, 
                name: '',
                age: '',
                email: '', 
                id: 'null'
            })
        };
    };

        useEffect (() => {
            axiosWithAuth()
            .get('/friends')
            .then (result => {
                console.log(result)
                setDisplay (true);
            })
            .catch (error => {
                console.log(error)
            });
        });
           
    return (
        <>
        {display && (
            <form onSubmit = {handleSubmit}>
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
        )}
        </>
    );
};


export default Friend;