import React, { Fragment } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Container, 
        DesignProcessWrapper, 
        DesignWrapper, 
        EmpathizeWrapper,
        FidelityImageWrapper,
        FindingsText,
        GoalsHeading, 
        GoalsImageWrapper,
        GoalsText, 
        IdeateWrapper, 
        InnerText, 
        LeftOverViewText,
        LineWrapper,
        OverViewContainer, 
        PrototypeOptions, 
        PrototypeWrapper, 
        QuestionsText, 
        RightOverViewText,
        StyledAnimation3,
        StyledButton, 
        StyledCircle, 
        StyledCircle2, 
        StyledImage, 
        StyledImageNumbers,
        Text, 
        UserTesting, 
        ViewHeading
} from './style';
import Number1 from './assets/1.png'
import Number2 from './assets/2.png'
import Number3 from './assets/3.png'
import Line from './assets/line.png'
import Circle from './assets/editor.png'
import DesignProcess from './assets/design-proces.png'
import Question from './assets/questionong.png'
import Architecture from './assets/architecture.png'
import Persona from './assets/persona-2.png'
import Userflow from './assets/userflow.png'
import Note from './assets/note.png'
import Note2 from './assets/note2.png'
import Color from './assets/color.png'
import Color2 from './assets/color2.png'
import Color3 from './assets/color3.png'
import Color4 from './assets/color4.png'
import Color5 from './assets/color5.png'
import Color6 from './assets/color6.png'
import FaintLine from './assets/faintline.png'
import Round from './assets/round.png'
import Icon from './assets/iconography.png'
import Aa from './assets/Aa.png'
import HighFidelity from './assets/highfidelity.png'
import Fidelity from './assets/atm-fidelity.png'
import Fidelity2 from './assets/atm-fidelity2.png'
import Fidelity3 from './assets/atm-fidelity3.png'
import Fidelity4 from './assets/atm-fidelity4.png'
import Fidelity5 from './assets/atm-fidelity5.png'
import Fidelity7 from './assets/atm-fidelity7.png'
import Fidelity8 from './assets/atm-fidelity8.png'
import Fidelity9 from './assets/atm-fidelity9.png'
import Atm from './assets/atm.png'
import Atm2 from './assets/atm2.png'
import Atm3 from './assets/atm3.png'
import Atm4 from './assets/atm4.png'
import  { ReactComponent as LineSvg }  from '../../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../../home/assets/twitter.svg';
import { CopyRightText, StyledInstagram, StyledTwitter } from '../style';
import { FooterContainer, FooterText, FooterTitle, FooterWrapper, IconWrapper, StyledLineSvgg } from '../../about/style';
import { StyledAnimation, StyledCaseButton } from '../adashi/style';


const AtmSolution = () => {

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

        const navigate = useNavigate();
        const messageClick = () => {
                navigate('/contact');
            }
        return (
         <Fragment>
                  <Container>
                        <Text>A Solution to improve ATM experience <br />
                                in my country, Nigeria.
                        </Text>
                        <StyledButton>
                        <ReactBootStrap.Button 
                        style={{color: 'black', backgroundColor: '#C4C4C4', border: 'none', padding: '1% 5%'}}>
                                ATM</ReactBootStrap.Button>
                        </StyledButton>
                   </Container> 
                  <div className='reveal'>
                  <OverViewContainer>
                                       <div className='padding'>
                                       <ReactBootStrap.Row>
                                                <ReactBootStrap.Col>
                                                <LeftOverViewText>
                                                “enables users to initaiate <br />
                                                transaction on their mobile App <br />
                                                and wrap it up on the ATM” 
                                                </LeftOverViewText>
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                                    <ViewHeading>
                                                        Project Overview
                                                </ViewHeading>
                                              <RightOverViewText>
                                                This Solution help to improve  ATM experienece in <br />Nigeria, West  Africa. 
                                                Its helps to reduce the queue that is <br />often experience by  customers / Users of Nigerian banks.<br /> 
                                                Its a major problem in the region because 80% <br />of the population in the 
                                                country make use of the <br />ATM for their daily transactions.
                                                </RightOverViewText>
                                                </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                                            </div>               
                        </OverViewContainer>
                        <GoalsHeading>Project Goals</GoalsHeading>
                        <LineWrapper>
                        <img src={Line} alt='' width={'15%'} />
                        </LineWrapper>
                                <ReactBootStrap.Row>
                                <ReactBootStrap.Col>
                                <GoalsImageWrapper> <img src={Number1} alt='' /></GoalsImageWrapper>
                                <GoalsText>Reduce the total number of steps<br/> to perform a transaction on ATM.</GoalsText>
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col>
                                <GoalsImageWrapper><img src={Number2} alt='' /></GoalsImageWrapper>
                                <GoalsText>Help Local banks to serve <br/>their customers much better.</GoalsText>
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col>
                             <GoalsImageWrapper> <img src={Number3} alt='' /></GoalsImageWrapper>
                              <GoalsText>  Make cash withdrawal in Africa <br/>seamless for customers /users.</GoalsText>
                                </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                   <StyledAnimation>
                   </StyledAnimation>
                    <GoalsHeading>Tools Used</GoalsHeading>
                    <GoalsText>
                    <ReactBootStrap.Row>
                                    <ReactBootStrap.Col sm={4}>
                                            <StyledCircle>
                                            <img src={Circle} alt='' style={{marginTop: '10%', marginLeft: '-10%'}}/>
                                            </StyledCircle>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col sm={8} style={{paddingLeft: '13%'}}>
                                  <StyledAnimation3>
                                  <div className='tools'>
                                   <strong style={{color: '#FDAE24', fontWeight: '800'}}>Figma </strong>is a vector graphics editor and prototyping tool <br /> which is primarily web-based, 
                                    with additional offline <br /> features enabled by desktop applications for macOS and<br />  Windows. 
                                    The Figma Mirror companion apps for Android <br /> 
                                     and iOS allow viewing Figma prototypes on mobile devices.
                                     <br /> 
                                     <br /> 
                                     <strong style={{color: '#FDAE24', fontWeight: '800'}}>Adobe Illustrator</strong> is vector-based graphics software
                                      that lets  <br />you scale down your artwork for mobile screens or scale up to <br /> 
                                      billboard size — and it always look 
                                      <br /> 
                                      <br /> 
                                      <strong style={{color: '#FDAE24', fontWeight: '800'}}>Photoshop</strong> Image editing and design. Illustrator Vector <br /> 
                                      graphics and illustration. 
                                   </div>
                                  </StyledAnimation3>
                                    </ReactBootStrap.Col> 
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsHeading style={{color: '#FDAE24'}}>Design Process</GoalsHeading>
                    <LineWrapper>
                        <img src={Line} alt='' />
                   </LineWrapper>
                   <DesignProcessWrapper>
                   <img src={DesignProcess} alt='' width="90%"/>
                   </DesignProcessWrapper>
                   <GoalsText>
                    <ReactBootStrap.Row>
                                    <ReactBootStrap.Col sm={4}>
                                 <EmpathizeWrapper>
                                <InnerText>Empathize</InnerText>
                                 </EmpathizeWrapper>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col sm={8} style={{paddingLeft: '10%', marginTop: '7%', color: '#D3D3D3'}} >
                                    <strong style={{color: '#FDAE24', fontWeight: '800'}}>User research</strong> is the methodic study of target users—including<br />
                                     their needs and pain points—so designers  have the sharpest <br />
                                     possible insights to work with to make the best designs. User <br />
                                     researchers use various methods to expose problems<br /> and design opportunities, 
                                     and find crucial information to use<br /> in their design process.
                                    </ReactBootStrap.Col> 
                            </ReactBootStrap.Row>
                    </GoalsText>
                <GoalsText>
                               <ReactBootStrap.Row>
                                   <ReactBootStrap.Col sm={5}>
                                   <StyledImage>
                                            <img src={Question} alt='' />
                                            </StyledImage>
                                   </ReactBootStrap.Col>
                                   <ReactBootStrap.Col sm={7} style={{marginTop: '-6%'}}>
                                   <div className='client'>
                                   <QuestionsText>Questions during interview
                                    </QuestionsText>
                                   <StyledCircle2>
                                   <img src={Line} alt='' style={{marginLeft: '5%'}}/>
                                   </StyledCircle2>
                                   <div style={{color: '#D3D3D3'}}>
                                   <strong style={{color: '#FDAE24', fontWeight: '800'}}>Client:</strong> I want you to improve the ATM experience.
                                    <br/>
                                    <br/>
                                    <strong style={{color: '#FDAE24', fontWeight: '800'}}>Samuel:</strong> Would you like me to focus on the experience  <br /> of
                                    using an ATM we’re familiar with today  or should I  <br />rethink the whole concept of
                                     how people interact  <br />with their bank to performfinancial operations?
                                    <br/>
                                    <br/>
                                    <strong style={{color: '#FDAE24', fontWeight: '800'}}>Client:</strong> Let’s focus on the ATM experience as we’re familiar <br /> with it today.
                                    <br/>
                                    <br/>
                                    <strong style={{color: '#FDAE24', fontWeight: '800'}}>Samuel:</strong> Great, should I focus on a specific type of ATM?  <br />F
                                    or instance, those installed in bankbranches or  <br />third-party ATMs
                                     we see in convenience stores? 
                                     <br/>
                                     <br/>
                                     <strong style={{color: '#FDAE24', fontWeight: '800'}}>Client:</strong> Let’s explore the kind that is owned by a bank <br />
                                      and either mounted on a wall on the streetor  <br />inside bank branches
                                   </div>
                                
                                  </div>
                                       </ReactBootStrap.Col>
                               </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsText>
                    <ReactBootStrap.Row>
                                    <ReactBootStrap.Col style={{marginTop: '17%'}}>
                                            <div style={{color: '#D3D3D3'}}>
                                            <strong style={{color: '#FDAE24', fontWeight: '800'}}> Information architecture (IA)</strong> is the structural design of< br/> shared information environments; the art and science< br/> 
                                     of organizing and labelling websites, intranets, online< br/>  communities and software to support usability and < br/>findability;  
                                     and an emerging community of practice < br/> focused on bringing principles of design. 
                                     <br />
                                     <strong style={{color: '#FDAE24', fontWeight: '800'}}>NB: The AI for Card and Cardless transactions wasn’t < br/> shown in the solution because it the convectional way < br/> the ATM is
                                     been used in Nigeria right now.</strong>
                                            </div>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                   <img src={Architecture} alt='' width="90%" style={{marginTop: '25%'}}/>
                                    </ReactBootStrap.Col> 
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsText>
                      <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                                <DesignWrapper>
                                <InnerText>Design</InnerText>
                                 </DesignWrapper>
                        </ReactBootStrap.Col>
                                    <ReactBootStrap.Col  style={{color: '#FDAE24', marginTop: '7%'}} >
                                    <div className='persona'>
                                    <span style={{float: 'right', marginRight: '6%', fontSize: '38px'}}>User persona</span>
                                    </div>
                                    </ReactBootStrap.Col> 
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsText>
                      <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                             <StyledCircle>
                                      <img src={Persona} alt="" />
                             </StyledCircle>
                              <ReactBootStrap.Row>
                                      <ReactBootStrap.Col style={{paddingLeft: '10%'}}>
                                              <span>Age: 27</span>
                                              <br />
                                              <strong style={{color: '#FDAE24', fontWeight: '800'}}>Personality</strong>
                                              <br />
                                              <span>- Workaholic</span>
                                              <br />
                                              <span>- Doesn’t like stress</span>
                                      </ReactBootStrap.Col>
                              </ReactBootStrap.Row>
                        </ReactBootStrap.Col>
                                    <ReactBootStrap.Col  style={{ marginTop: '7%'}} >
                                   <StyledAnimation3>
                                   <strong style={{color: '#FDAE24', fontWeight: '800'}}>Bio:</strong> 
                                    <br />
                                    <div style={{color: '#D3D3D3'}}>
                                    Adebayo is a Nigerian who happens to be a product<br /> Manager that works
                                         remotely with a company in Texas.<br /> He has only 1 hour for break during work hours.
                                         <br />The nearest ATM to his house will take him 30 minutes walk.
                                         <br /> The long queue at the ATM is a big problem he do face. He wish he can get to ATM 
                                        and withdraw the cash he needs <br />without a long queue. 
                                    </div>
                                   </StyledAnimation3>
                                   <ReactBootStrap.Row style={{marginTop: '15%'}}>
                                   <ReactBootStrap.Col sm={5}>
                                   <strong style={{color: '#FDAE24', fontWeight: '800'}}>Goals:</strong> 
                                                   <br />
                                                   - Get to withdraw cash without stress. 
                                                   <br />
                                                   - Want to use his break time for other activity
                                   </ReactBootStrap.Col>
                                   <ReactBootStrap.Col sm={7} style={{marginTop: '1%'}}>
                                   <strong style={{color: '#FDAE24', fontWeight: '800'}}>Pain point:</strong> 
                                                   <br /> 
                                                - Too busy to join queue during work hours. 
                                                <br />
                                                - Too much ads during transaction.
                                                <br />
                                                -Long process while using the machine
                                       </ReactBootStrap.Col>
                               </ReactBootStrap.Row>

                                    </ReactBootStrap.Col> 
                                    
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsText>
                      <ReactBootStrap.Row>
                      <ReactBootStrap.Col style={{ marginTop: '7%'}} sm={6} >
                                  <StyledAnimation>
                                          <div style={{color: '#D3D3D3'}}>
                                          <strong style={{color: '#FDAE24', fontWeight: '800'}}>User flow</strong> is the path taken by a prototypical user 
                                    on a website<br /> or app to complete a task. The user flow takes 
                                    them from their entry point through a set of steps towards a successful outcome and final 
                                    action, such as purchasing a product.
                                          </div>
                                  </StyledAnimation>
                                    </ReactBootStrap.Col> 
                            </ReactBootStrap.Row>
                            <div className='flow'>
                                    <span style={{float: 'right',color: '#FDAE24', marginRight: '13%'}}>User flow</span>
                                    </div>
                    </GoalsText>
                    <StyledImageNumbers>
                         <img src={Userflow} alt='' />
                 </StyledImageNumbers>
                 <GoalsText>
                      <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                                <IdeateWrapper>
                                <InnerText>Ideate</InnerText>
                                 </IdeateWrapper>
                        </ReactBootStrap.Col>
                                    <ReactBootStrap.Col  style={{color: '#FDAE24', marginTop: '7%'}} >
                                     <span style={{float: 'right', marginRight: '13%', fontSize: '38px'}}>Low Fidelity</span>
                                    </ReactBootStrap.Col> 
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsText>
                            <div className='note'>
                            <ReactBootStrap.Row>
                                    <ReactBootStrap.Col>
                                    <img src={Note} alt=""/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Note2} alt=""/>
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            </div>
                    </GoalsText>
                    <GoalsText>
                      <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                        <PrototypeWrapper>
                                <InnerText style={{marginLeft: '-10%', color: '#DD7720'}}>
                                Prototype
                                </InnerText>
                                 </PrototypeWrapper>
                        </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <GoalsText>
                    <PrototypeOptions>
                      <ReactBootStrap.Row style={{marginTop: '-6%'}}>
                        <ReactBootStrap.Col>
                           Style Guide
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            Mid Fidelity
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                           High Fidelity
                        </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            </PrototypeOptions>
                    </GoalsText>
                    <QuestionsText style={{marginLeft: '5%'}}>
                            Color Pallete
                    </QuestionsText>
                    <GoalsImageWrapper>
                    <ReactBootStrap.Row style={{marginTop: '-6%'}}>
                            <ReactBootStrap.Col>
                           <img src={Color} alt=""/>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col>
                            <img src={Color2} alt=""/>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col>
                            <img src={Color3} alt=""/>
                            </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    </GoalsImageWrapper>
                    <GoalsImageWrapper>
                    <ReactBootStrap.Row>
                            <ReactBootStrap.Col>
                            <img src={Color4} alt=""/>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col>
                            <img src={Color5} alt=""/>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col>
                            <img src={Color6} alt=""/>
                            </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    </GoalsImageWrapper>
                    <QuestionsText style={{marginLeft: '5%', marginTop: '10%'}}>
                       Typography & Iconography
                    </QuestionsText>
                    <img src={FaintLine} alt='' style={{marginLeft: '5%'}} />
                    <GoalsText>
                      <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                        <PrototypeOptions>
                          <img src={Icon} alt='' style={{marginTop: '-20%'}}/>
                        </PrototypeOptions>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            <PrototypeOptions>
                          <StyledImage> <img src={Aa} alt='' style={{marginTop: '20%', marginLeft: '40%'}}/></StyledImage>
                            </PrototypeOptions>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                           <PrototypeOptions>
                                  <QuestionsText>
                                  <strong>Mulish</strong>
                                  </QuestionsText>
                         <StyledImage>
                         <img src={Round} alt='' style={{marginTop: '-10%'}}/>
                         </StyledImage>
                           </PrototypeOptions>
                           <div className='fix'>
                           ADSFDGTFGFHGGHFFGDDGGD
                            <br />
                            asfdgdteeerefddcfgrhtuthtururtr
                            <br />
                            01234567890
                           </div>
                        </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                    </GoalsText>
                    <QuestionsText style={{marginLeft: '5%', marginTop: '10%'}}>
                       Mid Fidelity
                    </QuestionsText>
                           <div className='ques'>
                           <ReactBootStrap.Row>
                                    <ReactBootStrap.Col >
                                       <img src={Atm} alt='' width='100%' height='100%'/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Atm2} alt='' width='100%' />
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <ReactBootStrap.Row>
                                    <ReactBootStrap.Col >
                                       <img src={Atm3} alt='' width='100%' height='100%'/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Atm4} alt='' width='100%' />
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                           </div>
                           <ReactBootStrap.Row style={{marginTop: '15%'}}>
                                   <ReactBootStrap.Col sm={4}>
                                   <QuestionsText style={{marginLeft: '10%', marginTop: '10%'}}>
                                                        High Fidelity
                                        </QuestionsText>
                                        <StyledImage>
                                        <img src={FaintLine} alt='' style={{marginLeft: '10%', width: '30%'}} />
                                        </StyledImage>
                                   </ReactBootStrap.Col>
                                   <ReactBootStrap.Col sm={8} style={{marginTop: '-5%', paddingLeft: '15%'}}>
                                   <div style={{marginTop: '14%', color: '#D3D3D3', lineHeight: '51px', fontSize: '20px'}}>
                                           <strong style={{color: '#FDAE24', fontWeight: '800'}}>High fidelity</strong> wireframes are often built in the advanced stages <br />
                                           of the design process to communicate design decisions to the <br />development team prior to coding the final product.
                                           </div>
                                       </ReactBootStrap.Col>
                               </ReactBootStrap.Row>
                               <ReactBootStrap.Row style={{marginTop: '15%'}}>
                                   <ReactBootStrap.Col sm={5}>
                                   <StyledImage>
                               <img src={HighFidelity} alt='' style={{marginLeft: '10%', marginTop: '3%' ,width: '80%'}}/>
                               </StyledImage>
                                   </ReactBootStrap.Col>
                                   <ReactBootStrap.Col sm={7} style={{marginTop: '-5%', paddingLeft: '15%'}}>
                                   <QuestionsText>
                                  <StyledImage>
                                  <img src={Round} alt='' style={{marginTop: '15%'}}/>
                                  </StyledImage>
                                  <div style={{marginTop: '-2%'}}>Home Screen</div>
                                  </QuestionsText>
                                           <StyledAnimation3>
                                           <div style={{marginTop: '4%', color: '#D3D3D3', lineHeight: '51px', fontSize: '20px'}}>
                                          This is the home screen display to the user when he/she gets <br /> to the machine. 
                                          The interface gives the user the opportunity  <br />to perform transaction using Card, Token and also Cardless  <br />
                                          transaction.This solution basically focuses on user using  <br />Token for his/her transaction.
                                          <br />
                                          <strong style={{color: '#FDAE24', fontWeight: '800'}}> Token is generated via the mobile app
                                                by the user where the  <br />
                                                user is able to select amount, select account type and  <br />initiate withdrawal.</strong>
                                           </div>
                                           </StyledAnimation3>
                                       </ReactBootStrap.Col>
                               </ReactBootStrap.Row>
                          <FidelityImageWrapper>
                          <ReactBootStrap.Row>
                                    <ReactBootStrap.Col >
                                       <img src={Fidelity} alt='' width='80%' height='90%'/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Fidelity2} alt='' width='80%' height='90%'/>
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                          </FidelityImageWrapper>
                            <FidelityImageWrapper>
                            <ReactBootStrap.Row>
                                    <ReactBootStrap.Col >
                                       <img src={Fidelity3} alt='' width='80%' height='90%'/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Fidelity4} alt='' width='80%' height='90%' />
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            </FidelityImageWrapper>
                           <FidelityImageWrapper>
                           <ReactBootStrap.Row>
                                    <ReactBootStrap.Col >
                                       <img src={Fidelity5} alt='' width='80%' height='90%'/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Fidelity7} alt='' width='80%' height='90%' />
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                           </FidelityImageWrapper>
                           <FidelityImageWrapper>
                           <ReactBootStrap.Row>
                                    <ReactBootStrap.Col >
                                       <img src={Fidelity8} alt='' width='80%' height='90%'/>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col>
                                    <img src={Fidelity9} alt='' width='80%' height='90%' />
                                    </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                           </FidelityImageWrapper>
                           <ReactBootStrap.Row>
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                                <UserTesting>User Testing</UserTesting>
                                                <div style={{padding: '1% 0% 4% 10%', color: '#D3D3D3', fontSize: '20px'}}>
                                                                Measure of the usability test used include:
                                                                        <br/>
                                                                1. Effectiveness
                                                                <br/>
                                                                2. Engagement
                                                                <br/>
                                                                3. Error Tolerance
                                                                <br/>
                                                                4. Easy to learn
                                                                </div>
                                                                
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                                <FindingsText>
                                                <strong>.</strong> Key Findings
                                                        </FindingsText>
                                                </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                           <FindingsText style={{marginTop: '10%', paddingBottom: '10%'}}>
                              <strong>.</strong> Conclusion
                                  </FindingsText>
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

export default AtmSolution;