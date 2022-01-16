import styled from "styled-components";
import Project from './assets/project.png'
import Graphics from './assets/graphic.png'


export const ContainerProject = styled.div`
top: 30%;
background-image: url(${Project});
height: 70%;
background-repeat: no-repeat;
width: 95%;
border-radius: 10px;
margin: auto;

`


export const ContainerGraphics = styled.div`
background-image: url(${Graphics});
height: 70%;
background-repeat: no-repeat;
width: 95%;
border-radius: 10px;
margin: auto;
`

export const Product = styled.div`
 padding: 25% 0% 2% 5%;
 font-size: 36px;
 font-weight: 600;
 color: white;
`
export const ViewText = styled.div`
  padding: 0% 0% 2% 5%;
  color: #FDAE24;
  font-size: 30px;
  font-weight: 500;
`
export const StyledArrow = styled.img`
padding: 0% 0% 0% 10%;
margin-top: -9%;

`