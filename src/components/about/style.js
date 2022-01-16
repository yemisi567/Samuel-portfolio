import styled, {keyframes} from "styled-components";
import { bounceInLeft} from 'react-animations';
const bounceAnimation = keyframes`${bounceInLeft}`;


export const AboutTitle = styled.div`
    font-size: 64px;
    font-weight: 600;
    text-align: center;
    align-items: center;
    color: white;
    padding-top: 5%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        padding-top: 50px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        align-items: center;
        color: white;
      }
     
`;

export const AssistTitle = styled.div`
    font-size: 38px;
    font-weight: 600;
    color: white;
    margin: 10% 0 2% 7%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 24px;
        font-weight: 600;
        color: white;
        margin: 10% 0 0 10%;
      }
`;

export const StyledAboutLine = styled.div`
    padding-top: 1%;
    text-align: center;
    align-items: center;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
      text-align: center;
      align-items: center;
      }
`;

export const BackgroundText = styled.div`
  font-size: 38px;
  font-weight: 500;
  color: white;
  padding: 17% 0% 0% 0%;

  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 24px;
    font-weight: 500;
    color: white;
    padding: 10% 0% 0% 5%;
  }

`
export const RightText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #D3D3D3;
  line-height: 51.58px;
  padding: 10% 0 20% 10%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 14px;
    font-weight: 500;
    line-height: 51.58px;
    color: #D3D3D3;
    align-items: center;
    text-align: left;
    margin-left: -3%;
  }
`
export const CardWrapper = styled.div`
  padding-top: 5%;
  width: 100%;
  margin: auto;
  
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    align-items: center;
    text-align: center;
    margin: 8% 0 0 -14%;
  }


`
export const StyledTools = styled.a`

`
export const ToolsContainer = styled.div`
margin-top: 3%;
padding: 5%;
flex-direction: column;
 align-items: flex-start;
 animation: 4s ${bounceAnimation};
 animation-iteration-count: infinite;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
display: none;
 }
 @media only screen and (max-width: 769px) and (min-width: 1024px)  {
  display: none;;
 }
 @media only screen and (max-width: 1024px) and (min-width: 1366px)  {
  display: none;
 }
 
`

export const FooterWrapper = styled.div`
padding-top: 5%;
width: 95%;
height: 100%;
border-radius: 4px;
border: 1px solid #000723;
background-color: rgba(10, 16, 44, 1);
align-items: center;
text-align: left;
margin: auto;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  align-items: center;
  text-align: center;
}
`
export const FooterContainer = styled.div`
width: 100%;
height: 100%;
margin-top: 5%;
border: 1px solid #000723;
background-olor: #000723;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
    text-align: center;
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px)  {
    text-align: center;
    align-items: center;
    width: 90%;
  }
`

export const StyledIcon = styled.img`
  padding: 20% 0% 0% 30%;
  @media only screen and (max-width: 1024px) and (min-width: 769px)  {
    width: 100%;
    padding: 20% 0% 0% 40%;
  }
`
export const Tools = styled.div`
  margin-left: 87%;
  padding-top: 4%; 
  color: #FDAD00;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    display: none;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px)  {
    display: none;
  }
`
export const StyledSpinner = styled.div`
   float: right;
   margin-top: 4%;
   margin-right: 6%;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    display: none;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px)  {
    display: none;
  }
 
`
export const StyledLineSvgg = styled.div`
  padding: 5% 0 0 15%;
`
export const StyledCaseButton = styled.div`
    margin-left: 15%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
       padding: 5% 0 5% 0%;
    }
`;

export const IconWrapper = styled.div`
     margin: 5% 0 0 7%;
     @media only screen and (max-width: 768px) and (min-width: 200px)  {
       
      }
      @media only screen and (max-width: 769px) and (min-width: 1024px)  {
        margin-top: 50px;
      }
      @media only screen and (max-width: 1024px) and (min-width: 1366px)  {
        margin-top: -10px;

      }
`
export const FooterTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: white;
  padding: 2% 0 0 7%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 30px;
    padding: 6% 0 0 7%;
  }

`
export const FooterText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #D3D3D3;
  padding: 2% 0 0 7%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 24px;
    padding: 6% 0 0 7%;
    align-items: center;
    text-align: left;
  }

`