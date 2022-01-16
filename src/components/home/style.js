
import styled , { keyframes }from "styled-components";
import { bounceInLeft, bounceIn ,flash, rotateInDownLeft} from 'react-animations';
 
const bounceAnimation = keyframes`${bounceInLeft}`;
const bounceAnimation2 = keyframes`${bounceIn}`;
const bounceAnimation3 = keyframes`${flash}`;
const bounceAnimation4 = keyframes`${rotateInDownLeft}`;


export const NameStyle = styled.div`
    font-size: 48px;
    font-weight: 500;   
    padding: 15% 0 0 1%;
    color: #FFFFFF;
    animation: 5s ${bounceAnimation2};
    animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 40px;
        font-weight: 400;
        padding-top: 15%;
        align-items: center;
        text-align: center;
        animation: 5s ${bounceAnimation2};
        animation-iteration-count: infinite;
      }
      @media only screen and (max-width: 568px) and (min-width: 320px)  {
        font-size: 24px;
        font-weight: 400;
        padding-top: 15%;
        align-items: center;
        text-align: center;
        animation-iteration-count: infinite;
        animation: 5s ${bounceAnimation2};
        }
`

export const SubNameStyle = styled.div`
    font-size: 100px;
    font-weight: 700;   
    animation: 5s ${bounceAnimation};
    animation-iteration-count: infinite;
    color: rgba(244, 116, 128, 1);
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 40px;
        font-weight: 400;
        animation: 5s ${bounceAnimation};
        animation-iteration-count: infinite;
      }
      @media only screen and (max-width: 568px) and (min-width: 320px)  {
        font-size: 24px;
        font-weight: 400;
        padding: 15% 0 5% 0;
        align-items: center;
        text-align: center;
        animation: 5s ${bounceAnimation};
        animation-iteration-count: infinite;
        }
`

export const AboutMe = styled.div`
    font-weight: 600;
    font-size: 24px;
    color: #FFFFFF;
    animation: 5s ${bounceAnimation3};
    animation-iteration-count: 1;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
      font-size: 20px;
      font-weight: 400;
      align-items: center;
      animation: 5s ${bounceAnimation3};
      animation-iteration-count: 1;
      text-align: center;
    }
`
export const StyledLineSvg = styled.div`
    padding-top: 10%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
     display: none;
    }
`
export const StyledSamuelImage = styled.img`
    width: 100%;
    height: 100%;
    padding-top: 15%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        width: 100%;
       height: 100%;
      }
`

export const IconWrapper = styled.div`
     margin-top: 3%;
     padding-left: 7%;
     flex-direction: column;
      align-items: flex-start;
     @media only screen and (max-width: 768px) and (min-width: 200px)  {
      flex-direction: column;
      align-items: flex-start;
        margin-top: 5%;
        text-align: center;
      }
      @media only screen and (max-width: 769px) and (min-width: 1024px)  {
        margin-top: 50px;
        display: grid;
      }
      @media only screen and (max-width: 1024px) and (min-width: 1366px)  {
        margin-top: -10px;

      }
`

export const StyledInstagram = styled.a`
padding-top: -5%;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  margin-top: -1%;
  }
  @media only screen and (max-width: 769px) and (min-width: 1024px)  {
    margin-top: -3%;
  }
`
export const StyledTwitter= styled.a`
 margin-left: 1%;
 margin-top: 4%;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  margin-left: 3%;
  }
  @media only screen and (max-width: 769px) and (min-width: 1024px)  {
    margin-left: 1%;
  }

`

export const Icon = styled.div`
margin: 3% 0 0 2%;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  margin-top: 5%;
      
 }

 @media only screen and (max-width: 1024px) and (min-width: 1366px)  {
  margin-top: -10px;

 }

`
export const FeaturedTitle = styled.div`
    font-weight: 600;
    font-size: 64px;
    padding: 10% 0 0 7%;
    color: #FFFFFF;
    animation: 5s ${bounceAnimation2};
    animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-weight: 500;
        font-size: 35px;
        animation: 5s ${bounceAnimation2};
        animation-iteration-count: infinite;
       margin: auto;
      }
`
export const FeaturedSemiTitle = styled.div`
    font-weight: 600;
    font-size: 64px;
    padding: 9% 0 0 7%;
    color: #FFFFFF;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-weight: 500;
        font-size: 24px;
        padding-top: 15%;
        align-items: center;
        text-align: center;
       
      }
`

export const StyledFaintLine = styled.div`
    padding-top: 1%;
    text-align: center;
    align-items: center;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
      display: none;
    }
  
`
export const StyledFeature1 = styled.div`
  padding-top: 10%;
  animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    padding-top: 5%;
    margin-left: -5%;
  }
  @media only screen and (max-width: 568px) and (min-width: 320px)  {
    padding-top: 5%;
    margin-left: -9%;
    }
`
export const StyledFeature2 = styled.div`
  margin-top: 14%;
  width: 100%;
  height: 100%;
  animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    padding-top: 8%;
    animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
    margin-left: -5%;
  }
  @media only screen and (max-width: 568px) and (min-width: 320px)  {
    padding-top: 5%;
    animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
    margin-left: -9%;
    }
`
export const StyledFeature3 = styled.div`
    margin-top: 13%;
    width: 100%;
   height: 100%;
   animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    padding-top: 5%;
    margin-left: -5%;
    animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
  }
  @media only screen and (max-width: 568px) and (min-width: 320px)  {
    padding-top: 5%;
    margin-left: -9%;
    animation: 5s ${bounceAnimation2};
  animation-iteration-count: infinite;
    }
`
export const FeaturedName = styled.div`
   font-size: 48px;
   font-weight: 600;
   margin: 15% 5% 0% 10%;
   color: #FFFFFF;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 400;
    font-size: 24px;
    margin: 20% 10% 1% 10%;
  }

`

export const FeaturedSubText = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin: 1% 10% 1% 10%;
    color: #FFFFFF;
    animation: 5s ${bounceAnimation};
  animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
     text-align: left;
     align-items: left;
     margin: 1% 10% 1% 9%;
     animation: 5s ${bounceAnimation};
    }
`

export const StyledDot = styled.img`
  margin: 1% 0% 2% 10%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    display: none;
  }
`
export const StyledYellowDot = styled.img`
  margin: 3% 0% 3% 10%;
  background-color: #FDAE24;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    display: none;
  }
`
export const StyledDot2 = styled.img`
  margin: 6% 0 1% 10%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
   display: none;
  }
`
export const StyledButton = styled.div`
    align-items: center;
    text-align: center;
    padding-top: 5%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-weight: 400;
        font-size: 35px;
        margin: auto;
        padding-top: 10%;
      }
    
`
export const StyledThickLine = styled.div`
    padding-top: 1%;
    margin: auto;
    align-items: center;
    text-align: center;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
     display: none;
    }
`
export const StyledGraphic = styled.div`
    padding-top: 15%;
    animation: 5s ${bounceAnimation4};
    animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
    padding-top: 5%;
    margin-left: -5%;
    }
    @media only screen and (max-width: 568px) and (min-width: 320px)  {
      padding-top: 5%;
      margin-left: -9%;
      }
     
`
export const StyledCaseButton = styled.div`
    margin-left: 10%;
    padding-top: 10%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-weight: 400;
        font-size: 35px;
        margin-left: 10%;
      }
    
`

export const DesignTitle = styled.div`
   font-size: 30px;
   font-weight: 600;
   padding: 7% 0 25% 0;
   color: #FFFFFF;
   align-items: center;
    text-align: center;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 400;
    font-size: 35px;
    padding: 7% 0 10% 0;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px)  {
    margin-left: -15%;
    }

`
export const DesignTitle2 = styled.div`
   font-size: 30px;
   font-weight: 600;
   padding: 7% 0 25% 0;
   color: #FFFFFF;
   align-items: center;
    text-align: center;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 400;
    font-size: 35px;
    padding: 7% 0 10% 0;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px)  {
    margin-left: -55%;
    }

`

export const FooterText = styled.div`
   font-weight: 600;
   font-size: 72px;
   color: #000000;
   padding-top: 10%;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 600;
    font-size: 40px;
    align-items: center;
    text-align: center;
    padding-top: 10%;
  }

`

export const FooterSubText = styled.div`
   font-size: 24px;
   font-weight: 500;
   color: black;
   align-items: center;
   text-align: center;
   padding-top: 2%;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 500;
    padding-top: 10%;
    font-size: 24px;
    align-items: center;
   text-align: center;
  }
`
export const CopyRightText = styled.div`
   font-size: 24px;
   font-weight: 300;
   color: #000000;
   align-items: center;
   text-align: center;
   padding: 7% 0% 1% 0%;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-weight: 300;
    font-size: 20px;
    align-items: center;
    text-align: center;
    padding: 10% 0% 6% 0%;
  }
`
