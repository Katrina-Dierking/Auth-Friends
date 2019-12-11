import React, {useState} from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const Container = styled.div `
padding: 3%;
display: flex;
flex-direction:column;
max-width:20%;
justify-content: space-around;
margin: 5%;
margin-left: 35%;
align-items: center;
font-family: The Wild Hammers;
border-top: 1px solid black;
border-bottom: 1px solid black;
background-color:white;
`

function Login (props) {
    const [credentials, setCredentials] = useState 
        ({
            username: '',
            password: ''
        });
    
  
    const onSubmit = event => {
        event.preventDefault();

        axiosWithAuth()
        .post('/login', credentials)
        .then (result => {
            console.log('kd: login: axios post', result.data)
            localStorage.setItem('token', result.data.payload);
            props.history.push('/friendform');
            console.log(props)
        })
        .catch(error => 
            console.log(error));
  }

    const handleChange = event => {
        setCredentials ({
          ...credentials,
          [event.target.name] : event.target.value
        })
    };

      return (
          <>
          <Container>
          <form onSubmit = {onSubmit}>
                <input 
                    type = 'text'
                    name = 'username'
                    placeholder = '* username'
                    value = {credentials.username}
                    onChange = {handleChange}
                    />
                    <br></br>
                    <br></br>

                <input 
                    type = 'password'
                    name = 'password'
                    placeholder = ' * password'
                    value = {credentials.password}
                    onChange = {handleChange}
                    />
                    <br></br>
                    <br></br>

                    <button> Log In </button>
            </form>
        </Container>
        </>
      );
};
export default Login;