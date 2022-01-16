
import styled , { keyframes }from "styled-components";
import SolutionBg from './assets/solutionBg.png';
import o1 from './assets/01.png';
import o2 from './assets/02.png';
import o3 from './assets/03.png';
import o4 from './assets/04.png';


export const Container = styled.div`
background-image: url(${SolutionBg});
background-repeat: no-repeat;
width: 100%;
height: 100%;
`
export const Text = styled.div`
  font-size: 38px;
  font-weight: 500;
  color: white;
  align-items: center;
  text-align: center;
  padding-top: 10%;
  @media only screen and (max-width: 768px) and (min-width: 200px)  {
    font-size: 24px;
   }
`

export const StyledButton = styled.div`
    align-items: center;
    text-align: center;
    margin-top: 40px;
    height: 67px;
    padding-bottom: 14%;
`

export const OverViewContainer = styled.div`
    padding-top: 3%;
    flex-direction: column;
    align-items: flex-start;
`
export const StyledAnimation3 = styled.div`
@media only screen and (max-width: 768px) and (min-width: 200px)  {

   }
`

export const LeftOverViewText = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: white;
    padding: 10% 0% 0% 10%;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        padding: 3% 0% 0% 10%;
       }
`
export const ViewHeading = styled.div`
    font-size: 40px;
    font-weight: 300;
    color: #FDAE24;
    align-items: center;
    text-align: left;

    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 36px;
        font-weight: 300;
        color: #FDAE24;
        align-items: center;
        text-align: center;
        margin-top: 5%;
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
    font-size: 38px;
    font-weight: 300;
    color: white;
    align-items: center;
    text-align: center;
    padding-top: 10%;
`
export const LineWrapper = styled.div`
     margin-right: 15%;
     align-items: center;
     text-align: center;
`
export const GoalsImageWrapper = styled.div`
   padding-top: 10% ;
   align-items: center;
   text-align: center;
   
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
   display: none;

   }
`
export const FidelityImageWrapper = styled.div`
   padding-top: 3% ;
   align-items: center;
   text-align: center;
   @media only screen and (max-width: 768px) and (min-width: 200px)  {
    padding-top: 6% ;
    }
`
export const GoalsText = styled.div`
    font-size: 24px;
    font-weight: 300;
    color: #D3D3D3;
    align-items: center;
    text-align: left;
    padding: 8% 0% 5% 7%;
`
export const DesignProcessWrapper = styled.div`
    align-items: center;
    text-align: center;
    padding-top: 5%;
`
export const EmpathizeWrapper = styled.div`
    background-image: url(${o1});  
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  
`
export const DesignWrapper = styled.div`
    background-image: url(${o2});  
    background-repeat: no-repeat;
    width: 100%;
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
@media only screen and (max-width: 768px) and (min-width: 200px)  {
    width: 50%;
    height: 50%;
   }
   @media only screen and (max-width: 1024px) and (min-width: 768px) {
  margin-top: 10%;
          }
`
export const StyledCircle2 = styled.div`
@media only screen and (max-width: 768px) and (min-width: 200px)  {
  display: none;
   }
   @media only screen and (max-width: 1024px) and (min-width: 768px) {
 display: none;
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
    height: 140%;
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        padding-bottom: 4%;
    }
`
export const InnerText = styled.div`
    font-size: 72px;
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
    font-size: 32px;
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
    font-size: 32px;
    font-weight: 300;
    color: #FDAE24;
    @media only screen and (max-width: 768px) and (min-width: 200px)  {
        font-size: 24px;
        padding-bottom: 3%;
        font-weight: 300;
        align-items: center;
        margin: auto;

       }
`
export const StyledImageNumbers = styled.div`
  align-items: center;
  text-align: center;
  margin: auto;
  padding-top: 8%;
`
export const UserTesting = styled.div`
    font-size: 38px;
    font-weight: 500;
    color: white;
    padding: 10% 0% 0% 10%;
`
export const FindingsText = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: #D3D3D3;
    padding-left: 10%
`