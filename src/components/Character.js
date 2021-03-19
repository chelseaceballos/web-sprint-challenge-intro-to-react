
// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
color:'blue';
`




export default function Character({info}) {

    return (

      <StyledInfo className='info'>
         <strong><p>Name: {info.name}</p></strong> 
          <p>Birth Year: {info.birth_year}</p>
          <p>Gender: {info.gender}</p>
          <p>Weight: {info.mass}</p>
          <p>Height: {info.height}</p>
          
    </StyledInfo>
    )
};