
import styled , { keyframes }from "styled-components";
import SolutionBg from './assets/solutionBg.png';
import o1 from './assets/01.png';
import o2 from './assets/02.png';
import o3 from './assets/03.png';
import o4 from './assets/04.png';
import { bounceInLeft, bounceInRight,bounceIn ,flash, slideInUp} from 'react-animations';
const bounceAnimation = keyframes`${bounceInLeft}`;
const bounceAnimation1 = keyframes`${bounceInRight}`;
const bounceAnimation2 = keyframes`${bounceIn}`;
const bounceAnimation3 = keyframes`${flash}`;
const bounceAnimation5 = keyframes`${slideInUp}`;

export const Container = styled.div`
background-image: url(${SolutionBg});
`
export const Text = styled.div`
  font-size: 64px;
  font-weight: 500;
  color: white;
  align-items: center;
  text-align: center;
  padding-top: 20%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 34px;
   }
`

export const StyledButton = styled.div`
    align-items: center;
    text-align: center;
    margin-top: 40px;
    height: 67px;
    padding-bottom: 199px;
`

export const OverViewContainer = styled.div`
    padding-top: 153px;
`
export const StyledAnimation3 = styled.div`
animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
    animation: 5s ${bounceAnimation2};
    animation-iteration-count: 4;
   }
`

export const LeftOverViewText = styled.div`
    font-size: 36px;
    font-weight: 600;
    color: white;
    padding: 10% 0% 0% 10%;
    animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        padding: 3% 0% 0% 10%;
        animation: 5s ${bounceAnimation2};
        animation-iteration-count: infinite;
       }
`
export const ViewHeading = styled.div`
    font-size: 72px;
    font-weight: 300;
    color: #FDAE24;
    align-items: center;
    text-align: left;
    animation: 5s ${bounceAnimation1};
animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 36px;
        font-weight: 300;
        color: #FDAE24;
        align-items: center;
        text-align: center;
        margin-top: 5%;
        animation: 5s ${bounceAnimation1};
        animation-iteration-count: infinite;
       }
    
`
export const RightOverViewText = styled.div`
    font-size: 24px;
    font-weight: 300;
    color: #D3D3D3;
    align-items: center;
    text-align: left;
    line-height: 44.28px;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 22px;
        font-weight: 300;
        color: #D3D3D3;
        align-items: center;
        text-align: left;
        line-height: 44.28px;
        margin-top: 5%;
        margin-left: 2%;
       }

`
export const GoalsHeading = styled.div`
    font-size: 72px;
    font-weight: 300;
    animation: 5s ${bounceAnimation};
    animation-iteration-count: infinite;
    color: white;
    align-items: center;
    text-align: center;
    padding-top: 10%;
`
export const LineWrapper = styled.div`
     margin-right: 30%;
     align-items: center;
     text-align: center;
`
export const GoalsImageWrapper = styled.div`
   padding-top: 10% ;
   align-items: center;
   text-align: center;
   animation: 5s ${bounceAnimation3};
   animation-iteration-count: infinite;
   
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
   margin-top: 3%;

   }
`
export const FidelityImageWrapper = styled.div`
   padding-top: 3% ;
   align-items: center;
   text-align: center;
   animation: 5s ${bounceAnimation5};
   animation-iteration-count: 5;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    padding-top: 6% ;
    animation: 5s ${bounceAnimation5};
    animation-iteration-count: 5;
    }
`
export const GoalsText = styled.div`
    font-size: 24px;
    font-weight: 300;
    color: white;
    align-items: center;
    text-align: left;
    padding: 8% 0% 5% 7%;
    animation: 5s ${bounceAnimation5};
animation-iteration-count: 5;
`
export const DesignProcessWrapper = styled.div`
    align-items: center;
    text-align: center;
    padding-top: 5%;
    animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
`
export const EmpathizeWrapper = styled.div`
    background-image: url(${o1});  
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
  
`
export const DesignWrapper = styled.div`
    background-image: url(${o2});  
    background-repeat: no-repeat;
    width: 100%;
    animation: 5s ${bounceAnimation2};
    animation-iteration-count: infinite;
    height: 140%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        background-image: none;
       }
       @media only screen and (max-width: 1024px) and (min-width: 768px) {
        background-image: url(${o2});  
        background-repeat: no-repeat;
        width: 100%;
        height: 200%;
        padding-bottom: 3%;
              }
`
export const StyledCircle = styled.div`
animation: 5s ${bounceAnimation};
   animation-iteration-count: infinite;
@media only screen and (max-width: 768px) and (min-width: 200px)  {
    width: 50%;
    height: 50%;
    animation: 5s ${bounceAnimation};
   animation-iteration-count: infinite;
   }
   @media only screen and (max-width: 1024px) and (min-width: 768px) {
  margin-top: 10%;
  animation: 5s ${bounceAnimation};
   animation-iteration-count: infinite;
          }
`
export const StyledImage = styled.div`
@media only screen and (max-width: 768px) and (min-width: 200px)  {
   display: none;
   }
`
export const IdeateWrapper = styled.div`
    background-image: url(${o3});  
    background-repeat: no-repeat;
    animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
    width: 100%;
    height: 140%;
    @media only screen and (max-width: 768px) and (min-width: 200px) {
        background-image: none;
    }
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        background-image: url(${o3});  
    background-repeat: no-repeat;
    width: 100%;
    height: 200%;
    padding-bottom: 4%;
                }
`
export const PrototypeWrapper = styled.div`
    background-image: url(${o4});  
    background-repeat: no-repeat;
    width: 100%;
    animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
    height: 140%;
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        padding-bottom: 4%;
        animation: 5s ${bounceAnimation2};
animation-iteration-count: infinite;
    }
`
export const InnerText = styled.div`
    font-size: 96px;
    font-weight: 800;
    padding: 7% 0% 0% 22%;
    margin-right: 50%;
    color: #FDAE24;
    @media only screen and (max-width: 767px) and (min-width: 200px) {
    display: none;
      }
     @media only screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 50px;
    font-weight: 800;
    padding: 7% 0% 0% 22%;
    margin-right: 50%;
    color: #FDAE24;
          }
`
export const PrototypeOptions = styled.div`
    font-size: 48px;
    font-weight: 800;
    align-items: center;
    color: #455A64;
    padding-top: -5%;
    @media only screen and (max-width: 768px) and (min-width: 200px) {
        font-size: 24px;
    }
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        margin-top: 7%;
    }
`

export const QuestionsText = styled.div`
    font-size: 48px;
    font-weight: 300;
    color: #FDAE24;
    animation: 5s ${bounceAnimation1};
animation-iteration-count: infinite;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 48px;
        font-weight: 300;
        align-items: center;
        margin: auto;
        animation: 5s ${bounceAnimation1};
animation-iteration-count: infinite;

       }
`
export const StyledImageNumbers = styled.div`
  align-items: center;
  text-align: center;
  margin: auto;
  animation: 5s ${bounceAnimation1};
  animation-iteration-count: 6;
  padding-top: 8%;
`
export const UserTesting = styled.div`
    font-size: 64px;
    font-weight: 500;
    color: white;
    padding: 10% 0% 0% 10%;
`
export const FindingsText = styled.div`
    font-size: 36px;
    font-weight: 600;
    color: #D3D3D3;
    padding-left: 10%
`