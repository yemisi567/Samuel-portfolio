
import styled from "styled-components";
import newBg from './assets/newBg.png';



export const Name = styled.div`
color: #09CF83;
font-weight: 700;
font-size: 38px;
text-align: center;
align-items: center;
padding-top: 7%;
`
export const Container = styled.div`
background-image: url(${newBg});
background-repeat: no-repeat;
width: 100%;
height: 100%;
margin: auto;

`
export const StyledAnimation = styled.div`

@media only screen and (max-width: 768px) and (min-width: 200px)  {

}
@media only screen and (max-width: 1024px) and (min-width: 768px)  {
;
}

`
export const StyledAnimation2 = styled.div`

@media only screen and (max-width: 768px) and (min-width: 200px)  {

  
}
@media only screen and (max-width: 1024px) and (min-width: 768px)  {

}
`

export const StyledFlowChart = styled.img`
background-color: white;
margin-top: 60px;

`

export const StyledCaseButton = styled.div`
    margin-left: 70%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-weight: 400;
        font-size: 35px;
        margin-left: 1%;
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
 font-size: 30px;
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
font-size: 38px;
 font-weight: 500;
 padding: 0% 0% 0% 5%;
 color: white;
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 24px;
   font-weight: 500;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px)  {
    font-size: 35px;
    font-weight: 500;
    margin-left: -3%;
  }
`
export const SubText = styled.div`
font-size: 18px;
 font-weight: 500;
 padding: 5% 0% 0% 5%;
 color: white;
 line-height: 51px;
 @media only screen and (max-width: 768px) and (min-width: 200px)  {
  font-size: 18px;
 font-weight: 500;
 margin: auto;
 padding: 5% 0% 5% 7%;
 line-height: 51px;
}
`