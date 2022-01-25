import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import {  Name, StyledAnimation, StyledAnimation2, StyledCaseButton, Text } from '../../home/adashi/style';
import { Container } from './style';

import First from './assets/first.png'
import Second from './assets/second.png'
import Third from './assets/third.png'
import New from './assets/new.png'
import New2 from './assets/new2.png'
import Fourth from './assets/fourth1.png'
import Fifth from './assets/fifth.png'
import Sixth from './assets/sixth.png'
import Seventh from './assets/seventh.png'
import Eighth from './assets/eighth.png'
import Nine from './assets/nine.png'
import Ten from './assets/ten.png'
import Eleven from './assets/eleven.png'
import Twelve from './assets/twelve.png'
import Thirteen from './assets/thirteen.png'
import Fourteen from './assets/fourteen.png'
import Fifteen from './assets/fifteen.png'
import Sixteen from './assets/sixteen.png'
import Seventeen from './assets/seventeen.png'
import Eighteen from './assets/eighteen.png'
import Ninteen from './assets/ninteen.png'
import Mathematics from './assets/mathematics.png'
import Projects from './assets/project.png';
import Properties from './assets/Properties.png';
import  { ReactComponent as LineSvg }  from '../../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../../home/assets/twitter.svg';
import { CopyRightText, IconWrapper, StyledInstagram, StyledTwitter } from '../../home/style';
import { FooterContainer, FooterText, FooterTitle, FooterWrapper, StyledLineSvgg } from '../../about/style';
import { StyledAnimation3, StyledImage } from '../../home/atm-solution/style';

const OtherProjects = () => {
    const navigate = useNavigate();

    const handleProjectsClick = () => {
        navigate('/projects');
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
            <Container>
           <Name style={{color: '#FDAE24'}}><strong>OTHER PROJECTS</strong></Name>
           <Text>A platfrom for users to pay their essential bills <br />
                and track their spending record.
            </Text>
                <ReactBootStrap.Row className="justify-content-md-center" style={{padding: '10% 10%', marginLeft: '5%'}}>
                    <ReactBootStrap.Col xs lg="2" sm='2'>
                    <ReactBootStrap.Button variant="warning" md="auto" style={{backgroundColor: '#FDAE24',  fontSize: '18px' , border: 'none' , padding: '10% 26%', color: 'white', fontWeight: '600'}}>Website</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs lg="2" sm='2'>
                    <ReactBootStrap.Button md="auto" style={{backgroundColor: '#FDAE24',  border: 'none' ,fontSize: '18px' , padding: '10% 26%', color: 'white', fontWeight: '600', }}>Mobile</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
           </Container>
          <div className='reveal'>
          <ReactBootStrap.Container style={{paddingBottom: '5%'}}>
                <ReactBootStrap.Row>
                    <div className='brief'>brief</div>
                    <ReactBootStrap.Col className='about'>
                   <StyledAnimation>
                   About Rent4less
                   </StyledAnimation>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col className='about-text'>
                   <StyledAnimation3>
                   Rent4Less by Alpha Mead is a rental scheme designed to provide a flexible and convenient option for middle income Nigerians to rent homes. 
                    Check out live website here. 
                    <br />
                    <br />
                    Role : UI/UX designer
                    <br />
                    <br />
                    <a href="https://rent4less.com.ng" style={{color: '#FDAE24'}}>https://rent4less.com.ng</a>
                   </StyledAnimation3>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
    
            <ReactBootStrap.Container>
           <StyledAnimation2>
           <div style={{marginTop: '10%'}}>
               <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                   <img src={First} alt='' width={'90%'} />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                    <img src={Second} alt='' width={'90%'} />
                    <StyledImage>
                    <img src={Properties} alt='' width={'90%'} style={{marginTop: '8%'}}/>
                    </StyledImage>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
               </div>
           </StyledAnimation2>
            </ReactBootStrap.Container>
                <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                                    <div className='brief'>brief</div>
                                    <ReactBootStrap.Col className='about'>
                                   <StyledAnimation> About  Richme</StyledAnimation>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col className='about-text'>
                                   <StyledAnimation3>
                                   Richme is a digital business card that helps users share contact information instantly
                                    - without carrying a stack of card around. Check out the live website below: 
                                    <br />
                                    Role : UI/UX designer
                                    <br />
                                    <a href="https://www.rchme.co/" style={{color: '#FDAE24'}}>https://www.rchme.co/</a>
                                   </StyledAnimation3>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                </ReactBootStrap.Container>
                    <ReactBootStrap.Container>
                   <StyledAnimation2>
                   <div style={{marginTop: '10%'}}>
                                <ReactBootStrap.Row>
                                        <ReactBootStrap.Col>
                                    <img src={Third} alt='' width={'90%'} />
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col>
                                        <img src={Fourth} alt='' width={'90%'} />
                                        <ReactBootStrap.Row>
                                        <ReactBootStrap.Col style={{marginTop:"10%"}}>
                                    <img src={New} alt=''width={'90%'}  />
                                        </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        <ReactBootStrap.Row>
                                        <ReactBootStrap.Col>
                                    <img src={New2} alt='' width={'90%'} />
                                        </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        </ReactBootStrap.Col>
                                    </ReactBootStrap.Row>
                                </div>
                   </StyledAnimation2>
                    </ReactBootStrap.Container>
                      <div className='edit2'>
                      <ReactBootStrap.Container >
                        <ReactBootStrap.Row>
                                            <div style={{fontSize: '24px',fontWeight: '400' ,color: '#D3D3D3'}}>brief</div>
                                            <ReactBootStrap.Col className='about'>
                                           <StyledAnimation>
                                           About  D0_DEEL APP
                                           </StyledAnimation>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col className='about-text'>
                                           <StyledAnimation3>
                                           A digital solution designed as a website and a mobile 
                                            app to control the acticity of members of a particular set of youth called Corpers (NYSC) in Nigeria. 
                                            <br />
                                            <br />
                                            Role: Project Manager
                                            <br />
                                            <br />
                                            <a href="https://www.dodeelcds.com.ng/" style={{color: '#FDAE24'}}>https://www.dodeelcds.com.ng/</a>
                                           </StyledAnimation3>
                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                        </ReactBootStrap.Container>
                      </div>
                                <ReactBootStrap.Container>
                               <StyledAnimation3>
                               <div style={{marginTop: '10%'}}>
                                            <ReactBootStrap.Row>
                                                    <ReactBootStrap.Col>
                                                <img src={Fifth} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                                    </ReactBootStrap.Col>
                                                    <ReactBootStrap.Col>
                                                    <img src={Sixth} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                                    </ReactBootStrap.Col>
                                                    <ReactBootStrap.Col>
                                                <img src={Seventh} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                                    </ReactBootStrap.Col>
                                                </ReactBootStrap.Row>
                                            </div>
                               </StyledAnimation3>
                                </ReactBootStrap.Container>
                                    <ReactBootStrap.Container>
                                   <StyledAnimation3>
                                   <div style={{marginTop: '10%'}}>
                                                <ReactBootStrap.Row>
                                                        <ReactBootStrap.Col>
                                                    <img src={Eighth} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                                        </ReactBootStrap.Col>
                                                        <ReactBootStrap.Col>
                                                        <img src={Nine} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                                        </ReactBootStrap.Col>
                                                        <ReactBootStrap.Col>
                                                    <img src={Ten} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                                        </ReactBootStrap.Col>
                                                    </ReactBootStrap.Row>
                                                </div>
                                   </StyledAnimation3>
                                    </ReactBootStrap.Container>
                                    <ReactBootStrap.Container>
                                    <div style={{marginTop: '10%'}}>
                                                <ReactBootStrap.Row>
                                                        <ReactBootStrap.Col>
                                                    <img src={Eleven} alt='' width={'90%'} style={{paddingBottom: '5%'}} />
                                                        </ReactBootStrap.Col>
                                                        <ReactBootStrap.Col>
                                                        <img src={Twelve} alt='' width={'90%'} style={{paddingBottom: '5%'}} />
                                                        </ReactBootStrap.Col>
                                                        <ReactBootStrap.Col>
                                                    <img src={Thirteen} alt='' width={'90%'}  style={{paddingBottom: '5%'}}/>
                                                        </ReactBootStrap.Col>
                                                    </ReactBootStrap.Row>
                                                </div>
                                    </ReactBootStrap.Container>
                                    <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                                            <div className='brief'>brief</div>
                                            <ReactBootStrap.Col className='about'>
                                           <StyledAnimation>
                                           About  Edusponsor
                                           </StyledAnimation>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col className='about-text'>
                                         <StyledAnimation3>
                                       <div style={{paddingBottom: '5%'}}>
                                       Edusponsor is a platform that enables candidates have access to examination 
                                            sponsorship as well as other gifts from organizations after participating in qualifying examination. 
                                            <br />
                                            <br />
                                            My Role: Project Manager & UI/UX Designer
                                            <br />
                                            <br />
                                            <a href="https://www.edusponsor.com/" style={{color: '#FDAE24'}}>https://www.edusponsor.com/</a>
                                       </div>
                                         </StyledAnimation3>
                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                        </ReactBootStrap.Container>
                                    <ReactBootStrap.Container>
                                       <ReactBootStrap.Row >
                                       <ReactBootStrap.Col>
                                        <img src={Fourteen} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col>
                                        <img src={Fifteen} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col>
                                        <img src={Sixteen} alt='' width={'90%'} style={{paddingBottom: '5%'}}/>
                                        </ReactBootStrap.Col>
                                       </ReactBootStrap.Row>
                                       <ReactBootStrap.Row style={{marginTop: '-40%'}}>
                                       <ReactBootStrap.Col>
                                        <img src={Seventeen} alt='' width={'90%'} style={{marginTop: '15%', paddingBottom: '5%'}}/>
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col>
                                        <img src={Eighteen} alt='' width={'90%'}  style={{marginTop: '25%', paddingBottom: '5%'}}/>
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col>
                                        <img src={Ninteen} alt='' width={'90%'} style={{marginTop: '25%', paddingBottom: '5%'}}/>
                                        </ReactBootStrap.Col>
                                       </ReactBootStrap.Row>
                                       <ReactBootStrap.Row style={{marginTop: '5%'}}>
                                           <ReactBootStrap.Col sm={4}>
                                           <img src={Mathematics} alt='' width={'90%'} style={{marginTop: '15%', paddingBottom: '5%'}}/>
                                           </ReactBootStrap.Col>
                                       </ReactBootStrap.Row>
                                    </ReactBootStrap.Container>
                                    <ReactBootStrap.Row style={{paddingBottom: '10%'}}>
                     <ReactBootStrap.Col>
                       <StyledAnimation>
                       <div style={{fontWeight: '500', fontSize: '18px', color: 'white', alignItems: 'center', textAlign: 'center', marginTop: '325px'}}>
                       { `NEXT PROJECT ->`}
                        </div>
                        <div className='project-text' onClick={handleProjectsClick}>Projects</div>
                       </StyledAnimation>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col>
                         <div style={{marginTop: '30%'}}>
                         <img src={Projects} alt=""  width={'90%'}/>
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

export default OtherProjects;