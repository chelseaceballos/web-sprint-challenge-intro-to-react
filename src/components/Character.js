
// Write your Character component here
import React from 'react';


export default function Character({info}) {

    return (

      <div>
          <p>Name: {info.name}</p>
          <p>Birth Year: {info.birth_year}</p>
          <p>Gender: {info.gender}</p>
          <p>Weight: {info.mass}</p>
          <p>Height: {info.height}</p>
          
    </div>
    )
};