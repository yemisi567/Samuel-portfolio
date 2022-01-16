
import styled , { keyframes }from "styled-components";
import { bounceInLeft, bounceIn ,flash, rotateInDownLeft} from 'react-animations';
import newBg from './assets/newBg.png';
const bounceAnimation = keyframes`${bounceInLeft}`;
const bounceAnimation2 = keyframes`${bounceIn}`;
const bounceAnimation3 = keyframes`${flash}`;
const bounceAnimation4 = keyframes`${rotateInDownLeft}`;


export const Name = styled.div`
color: #09CF83;
font-weight: 700;
font-size: 48px;
text-align: center;
align-items: center;
padding-top: 5%;
`
export const Container = styled.div`
background-image: url(${newBg});
background-repeat: no-repeat;
width: 100%;
height: 100%;
margin: auto;

`
export const StyledAnimation = styled.div`
animation: 5s ${bounceAnimation};
animation-iteration-count: infinite;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  animation: 5s ${bounceAnimation};
animation-iteration-count: 3;
}
@media only screen and (max-width: 1024px) and (min-width: 768px)  {
  margin-left: -3%;animation: 5s ${bounceAnimation};
  animation-iteration-count: infinite;
}

`
export const StyledAnimation2 = styled.div`
animation: 5s ${bounceAnimation2};
animation-iteration-count: 2;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  animation: 5s ${bounceAnimation2};
  animation-iteration-count: 2;
  
}
@media only screen and (max-width: 1024px) and (min-width: 768px)  {
  animation: 5s ${bounceAnimation4};
  animation-iteration-count: 2;
}
`

export const StyledFlowChart = styled.img`
background-color: white;
margin-top: 60px;

`

export const StyledCaseButton = styled.div`
    margin-left: 71px;
    padding-top: 50px;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-weight: 400;
        font-size: 35px;
      }
    
`
export const CardWrapper = styled.div`
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    align-items: center;
  }

`

export const Text = styled.div`
 font-size: 48px;
 font-weight: 500;
 padding-top: 20px;
 text-align: center;
 align-items: center;
 color: white;
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 30px;
    font-weight: 500;
  }
`
export const StyledDot = styled.div`
 margin-top: 6%;
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
 display: none;
}
`
export const Title = styled.div`
font-size: 64px;
 font-weight: 500;
 padding: 0% 0% 0% 5%;
 color: white;
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 35px;
   font-weight: 500;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px)  {
    font-size: 35px;
    font-weight: 500;
    margin-left: -3%;
  }
`
export const SubText = styled.div`
font-size: 24px;
 font-weight: 500;
 padding: 5% 0% 0% 5%;
 color: white;
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
  font-size: 24px;
 font-weight: 500;
 margin: auto;
 padding: 5% 0% 5% 7%;
}
`