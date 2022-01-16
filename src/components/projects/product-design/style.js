import styled from 'styled-components';
import Project1 from './assets/product1.png'
import Project2 from './assets/product2.png'
import Project3 from './assets/product3.png'
import Project4 from './assets/product4.png'

export const FirstText = styled.div`
    font-size: 72px;
    font-weight: 700;
    color: white;
    padding: 10% 0% 5% 10%;

`
export const Container = styled.div`
    background-image: url(${Project1});
    background-repeat: no-repeat;
    height: 100%;
    width: 90%;
    border-radius: 10px;
    margin: auto;
    border: 1px solid white;
    padding-bottom: 7%;
`
export const Container2 = styled.div`
    background-image: url(${Project2});
    background-repeat: no-repeat;
    height: 100%;
    width: 90%;
    border-radius: 10px;
    margin: auto;
    border: 1px solid white;
    padding: 5% 0% 10% 0%;
`
export const Container3 = styled.div`
    background-image: url(${Project3});
    background-repeat: no-repeat;
    height: 90%;
    width: 70%;
    border-radius: 10px;
    margin: auto;
    border: 1px solid white;
    padding: 5% 0% 10% 0%;
`
export const Container4 = styled.div`
    background-image: url(${Project4});
    background-repeat: no-repeat;
    height: 100%;
    width: 90%;
    border-radius: 10px;
    margin: auto;
    border: 1px solid white;
    padding: 5% 0% 10% 0%;
`
export const NameText = styled.div`
  font-weight: 800;
  font-size: 36px;
  color: white;
  padding: 3% 0% 0% 5%;
`
export const SubText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: white;
  padding: 3% 0% 0% 5%;
`
export const StyledCaseButton2 = styled.div`
    margin-top: 10px;   
    padding: 3% 0% 0% 5%;
`;

export const StyledAtmButton = styled.div`
    margin-top: 8%;   
    padding: 3% 0% 0% 10%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
      padding-bottom: 3%;
      }
`;

export const AtmText = styled.div`
font-weight: 800;
font-size: 36px;
color: white;
padding: 25% 0% 0% 10%;
`
export const AtmSubText = styled.div`
font-weight: 500;
font-size: 18px;
color: white;
padding: 7% 0% 0% 10%;
`