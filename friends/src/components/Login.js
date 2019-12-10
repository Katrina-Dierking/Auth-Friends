import React, {Component} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends Component {
    state = {
        credentials : {
            username: '',
            password: ''
        }
    };

  handleChange = event => {
      this.setState ({
          credentials: {
              ...this.state.credentials,
              [event.target.name] : event.target.value
          }
      });
  };
  
    const onSubmit = event => {
      event.preventDefault();

      axiosWithAuth()
      .post('/login', this.state.credentials)
      .then (result => {
          console.log('kd: login: axios post', result.data)
          localStorage.setItem('token', result.data.token);
          this.props.history.push('/protected');
      })
      .catch(error => 
        console.log(error));
  };

  render () {
      return (
          <>
          <form onSubmit = {this.onSubmit}>
                <input 
                    type = 'text'
                    name = 'username'
                    placeholder = 'username'
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange}
                    />
                    <br></br>

                <input 
                    type = 'password'
                    name = 'password'
                    placeholder = ' * password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    />
                    <br></br>

                    <button> Log In </button>
            </form>
        </>
      )
  }
}

export default Login;