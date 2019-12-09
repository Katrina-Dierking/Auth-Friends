import React, {Component} with 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends Component {
    state = {
        credentials : {
            email: '',
            password: ''
        }
    };

  handleChange = (e) => {
      this.setState ({
          credentials: {
              ...this.state.credentials,
              [e.target.name] : e.target.value
          }
      });
  };
  
  login = (e) => {
      e.preventDefault();

      axiosWithAuth()
      .post('/login', this.state.credentials)
      .then (result => {
          console.log('kd: login: axios post', result.data)
          localStorage.setItem('token', result.data.token);
          this.props.history.push('/protected');
      })
      .catch(error => console.log(error));
  };

  render () {
      return (
          <>
          <form onSubmit = {this.login}>
                <input 
                    type = 'text'
                    name = 'email'
                    placeholder = 'email'
                    value = {this.state.credentials.email}
                    onChange = {this.handleChange}
                    />

                <input 
                    type = 'password'
                    name = 'password'
                    placeholder = ' * password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    />

                    <button> Log In </button>
            </form>
        </>
      )
  }
}

export default Login;