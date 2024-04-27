import React from 'react'
import styled from 'styled-components';
const Login = () => {
  return (
    <Wrapper>
      <div className='container'>
        <img src='https://raw.githubusercontent.com/nurmukhamedov/react-projects/5d1fd4127aec4ec691d5deb0cc569ef42615baf1/react-project/src/components/search-github-users/images/login-img.svg' alt = 'github users'/>
        <h1>github users</h1>
        <button className='btn'>
          Login / Sign Up
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  } 
`;

export default Login