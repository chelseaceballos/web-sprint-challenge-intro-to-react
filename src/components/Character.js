// Write your Character component here

import React from 'react'
import styled from 'styled-components'
const StyledChar = styled.div`
.charInfo {
    display:flex;
    justify-content: space-evenly;
    color: #fff;
}
`
const data = (props) => { 
const {data} = props 

return  (
    <StyledChar>
    <div class="name">
        <h1>{data.name}</h1>
     </div>
    <div class="charInfo"> 
        <p>Birth year: {data.birth_year}</p>
        <p>Gender: {data.gender}</p>
        <p>Eyes color: {data.eye_color}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Mass: {data.mass}</p>
        <p>Skin Color: {data.skin_color}</p>
    </div>
    </StyledChar>
)
}
export default data 