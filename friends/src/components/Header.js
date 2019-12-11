import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeading = styled.h1 `
font-size: 35px;
text-align:center;
`

const Container = styled.div `
padding: 1%;
background-color: #A5c3c6;
border-bottom: 2px solid #454245;
box-shadow: 5px 5px 5px black;
`

const Header = () => {
    return (
        <Container className = 'header'>
            <Link to = {'/index'}> Home | </Link>
            <Link to = {'/FriendForm'}> Add New Friend | </Link>
            <Link to = {'/login'} >Log In</Link> 

            <StyledHeading>
                <h1>Welcome to the Neighborhood!!</h1>
            </StyledHeading>
        </Container>
    )
}

export default Header; 