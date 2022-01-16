import React, { Fragment } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FooterContainer, FooterText, FooterTitle, FooterWrapper, StyledLineSvgg } from '../../about/style';
import { CopyRightText, IconWrapper, StyledInstagram, StyledTwitter } from '../../home/style';
import { FirstText } from '../graphics-design/style';
import Graphics from './assets/graphics.png'
import Padlock from './assets/padlock.png'
import  { ReactComponent as LineSvg }  from '../../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../../home/assets/twitter.svg';
import Project3 from './assets/product3.png'
import { Container, NameText, SubText, Container2, StyledCaseButton2, Container4, AtmSubText, AtmText, StyledAtmButton } from './style';
import { StyledImage } from '../../home/atm-solution/style';
import { StyledAnimation, StyledAnimation2, StyledCaseButton } from '../../home/adashi/style';


const ProductDesign = () => {

    const navigate = useNavigate();
    const handleAdashiClick = () => {
        navigate('/adashi');
    }

    const handlePayMyBillsClick = () => {
        navigate('/pay-my-bills');
    }
    const handleAtmClick = () => {
        navigate('/atm-solution');
    }
    const handleGraphicsClick = () => {
        navigate('/graphics-design');
    }
    const handleOtherProjectsClick = () => {
        navigate('/other-projects');
    }
    
    const messageClick = () => {
        navigate('/contact');
    }

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

  window.addEventListener("scroll", reveal);


    return (
       <Fragment>
           <div className='reveal'>
           <FirstText>Product Design< br/> Projects</FirstText>
                  <StyledAnimation2>
                 <div style={{marginTop: '5%'}}>
                 <Container>
                   <div style={{paddingTop: '10%', paddingLeft: '5%'}}>
                  <StyledImage>
                  <img src={Padlock} alt=''/>
                  </StyledImage>
                   </div>
                   <NameText>
                   Adashi Esusu Akawo
                   </NameText>
                   <SubText>A platfrom to save/contribute money as <br />a group or individual and get paid <br />automatically.</SubText>
                   <StyledCaseButton2>
                        <ReactBootStrap.Button style={{backgroundColor: '#FDAE24' , color: 'white', fontSize: '14px' , border: 'none' , fontWeight: '600', padding: '2% 2%'}} onClick={handleAdashiClick}>Read Case Study</ReactBootStrap.Button>
                                </StyledCaseButton2>
                   </Container>
                 </div>
                   <div style={{marginTop: '5%'}}>
                   <Container2>
                   <NameText>
                   PayMyBills
                   </NameText>
                   <SubText>A platfrom for users to pay their essential <br />bills and track their spending record.</SubText>
                   <StyledCaseButton2>
                        <ReactBootStrap.Button style={{backgroundColor: '#FDAE24' , color: 'white', fontSize: '14px' , border: 'none' , fontWeight: '600', padding: '2% 2%'}} onClick={handlePayMyBillsClick}>Read Case Study</ReactBootStrap.Button>
                    </StyledCaseButton2>
                   </Container2>
                    </div>
                     <div style={{marginTop: '5%'}}>
                     <ReactBootStrap.Row style={{border: '1px solid white', borderRadius: '10px', width: '90%', margin: 'auto'}}>
                          <ReactBootStrap.Col sm={4}>
                          <AtmText>
                            ATM Experience
                            </AtmText>
                            <AtmSubText>This Solution help to improve ATM < br />experienece in Nigeria, West Africa.</AtmSubText>
                            <StyledAtmButton>
                        <ReactBootStrap.Button style={{backgroundColor: '#FDAE24' , color: 'white', fontSize: '14px' , border: 'none' , fontWeight: '600', padding: '6% 6%'}} onClick={handleAtmClick}>Read Case Study</ReactBootStrap.Button>
                    </StyledAtmButton>
                          </ReactBootStrap.Col>
                          <ReactBootStrap.Col sm={8}>
                            <StyledImage>
                            <img src={Project3} alt='' width={'103%'} height={'100%'} />
                            </StyledImage>
                          </ReactBootStrap.Col>
                      </ReactBootStrap.Row>
                     </div>

                  <div style={{marginTop: '5%'}}>
                  <Container4>
                   <NameText>
                   Other projects
                   </NameText>
                   <SubText>Check out other web project<br /> (web and mobile).</SubText>
                   <StyledCaseButton2>
                        <ReactBootStrap.Button style={{backgroundColor: '#FDAE24' , color: 'white', fontSize: '14px' , border: 'none' , fontWeight: '600', padding: '2% 3%'}} onClick={handleOtherProjectsClick}>View more</ReactBootStrap.Button>
                    </StyledCaseButton2>
                   </Container4>
                  </div>
                  </StyledAnimation2>
                   <ReactBootStrap.Row style={{paddingBottom: '10%'}}>
                     <ReactBootStrap.Col>
                      <StyledAnimation>
                      <div style={{fontWeight: '500', fontSize: '18px', color: 'white', alignItems: 'center', textAlign: 'center', marginTop: '325px'}}>
                       { `NEXT PROJECT ->`}
                        </div>
                        <div className='graph' onClick={handleGraphicsClick}>GRAPHICS</div>
                      </StyledAnimation>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col>
                         <div style={{marginTop: '30%'}}>
                         <img src={Graphics} alt=""  width="80%" height='100%'/>
                         </div>
                    </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <FooterContainer>
                            <FooterWrapper>
                                <FooterTitle>
                                <strong>Let's get to work</strong>
                                </FooterTitle>
                                <FooterText>
                                Thank you for taking the time to read about me. Please feel free <br />
                                            to contact me at any time if you have any queries or would want to  <br /> 
                                            discuss new opportunities.
                                            <br />
                                            <br />
                                        or book a time with me via call using my calendly link <a href='https://calendly.com/samuelakintunde' style={{textDecoration: 'none'}}><span style={{color: '#FDAE24'}} >here.</span></a>
                                </FooterText>
                                <ReactBootStrap.Row style={{paddingBottom: '5%'}}>
                                            <ReactBootStrap.Col sm={6}>
                                            <StyledLineSvgg>
                                             <LineSvg />
                                        </StyledLineSvgg>
                                            </ReactBootStrap.Col>
                                            <IconWrapper>
                                            <a href='https://www.linkedin.com/in/samuelakintunde/' ><Linkedln /></a>
                                          <StyledInstagram>
                                          <Instagram src={Instagram} alt='' />
                                          </StyledInstagram>
                                          <StyledTwitter>
                                          <a href='https://twitter.com/sam_techardent' ><Twitter /></a>
                                          </StyledTwitter>
                                         </IconWrapper>
                                         <StyledCaseButton >
                                                            <ReactBootStrap.Button variant="warning" style={{backgroundColor: 'rgba(253, 174, 36, 1)', color: 'white', fontSize: '18px' , fontWeight: '600', padding: '1%'}} onClick={messageClick}>Send a message</ReactBootStrap.Button>
                                                    </StyledCaseButton>
                                </ReactBootStrap.Row>
                            </FooterWrapper>
                            <CopyRightText style={{color: 'white'}}><span style={{color: 'white', fontWeight: '700'}}>CopyRight @ 2020  || Samuel Akintunde</span></CopyRightText>
                        </FooterContainer>
           </div>
           </Fragment>
    )
}

export default ProductDesign;