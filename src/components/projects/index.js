import React, { Fragment } from 'react';
import Arrow from './assets/arrow.png';
import { useNavigate } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import { ContainerGraphics, ContainerProject, Product, ViewText, StyledArrow } from './style';
import { FooterContainer, FooterText, FooterTitle, FooterWrapper, IconWrapper, StyledLineSvgg } from '../about/style';
import { StyledCaseButton } from '../about/style';
import  { ReactComponent as LineSvg }  from '../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../home/assets/twitter.svg';
import { CopyRightText, StyledInstagram, StyledTwitter } from '../home/style';
import { StyledImage } from '../home/atm-solution/style';
import { StyledAnimation2 } from '../home/adashi/style';

const Projects = () => {
    const navigate = useNavigate();
    const handleProjectViewClick = () => {
        navigate('/product-design');
    }
    const handleGraphicsViewClick = () => {
        navigate('/graphics-design');
    }

    const messageClick = () => {
        navigate('/contact');
    }

    return (
            <Fragment>
              <StyledAnimation2>
              <ContainerProject>
                 <Product>Product Design</Product>
                 <ViewText onClick={handleProjectViewClick}>View</ViewText>
                <StyledImage>
                <StyledArrow src={Arrow} alt='' onClick={handleProjectViewClick}/>
                </StyledImage>
              </ContainerProject>
              <div style={{marginTop: '10%'}}>
              <ContainerGraphics>
              <Product>Graphics Design</Product>
                 <ViewText onClick={handleGraphicsViewClick}>View</ViewText>
                <StyledImage>
                <StyledArrow src={Arrow} alt='' onClick={handleGraphicsViewClick}/>
                </StyledImage>
              </ContainerGraphics>
              </div>
              </StyledAnimation2>
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
                                <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={6}>
                                            <StyledLineSvgg>
                                             <LineSvg />
                                        </StyledLineSvgg>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={6} style={{marginTop: '3%'}}>
                                                    <StyledCaseButton >
                                                            <ReactBootStrap.Button variant="warning" style={{backgroundColor: 'rgba(253, 174, 36, 1)', color: 'white', fontSize: '18px' , fontWeight: '600', padding: '2%'}} onClick={messageClick}>Send a message</ReactBootStrap.Button>
                                                    </StyledCaseButton>
                                                </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        <IconWrapper>
                                        <a href='https://www.linkedin.com/in/samuelakintunde/' ><Linkedln /></a>
                                            <StyledInstagram>
                                            <Instagram src={Instagram} alt='' />
                                            </StyledInstagram>
                                            <StyledTwitter>
                                            <a href='https://twitter.com/sam_techardent' ><Twitter /></a>
                                            </StyledTwitter>
                                         </IconWrapper>
                            </FooterWrapper>
                            <CopyRightText style={{color: 'white'}}><span style={{color: 'white', fontWeight: '700'}}>CopyRight @ 2020  || Samuel Akintunde</span></CopyRightText>
                        </FooterContainer>
                       
            </Fragment>
        
    )
}

export default Projects;