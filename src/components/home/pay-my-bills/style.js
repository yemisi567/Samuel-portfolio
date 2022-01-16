import styled from "styled-components";
import Background from './assets/background.png';


export const Container = styled.div`
background-image: url(${Background});

`
export const Image = styled.div`
margin-top: 7%;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
    display: none;
   }
`