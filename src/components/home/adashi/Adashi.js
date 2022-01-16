import React, { Fragment } from 'react';
import { Name, Container, Text,  StyledDot, Title, SubText, StyledFlowChart, StyledCaseButton, StyledAnimation, StyledAnimation2 } from './style';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { CardWrapper, FooterContainer, FooterText, FooterTitle, FooterWrapper, StyledLineSvgg} from '../../about/style';
import Flag from './assets/Flag.png';
import Dot from '../../home/assets/dot.png'
import Bg from './assets/Bg.png'
import Bliss from './assets/Bliss.png'
import Douglas from './assets/Douglas.png'
import Revolution from './assets/Revolution.png'
import FlowChart from './assets/flowchart.png'
import FlowChart2 from './assets/flowchart2.png'
import FlowChart3 from './assets/flowchart3.png'
import Savings from './assets/savings.png'
import UserTesting from './assets/userTesting.png'
import Bills from './assets/bills.png'
import  { ReactComponent as LineSvg }  from '../../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../../home/assets/twitter.svg';
import { CopyRightText, IconWrapper, StyledInstagram, StyledTwitter } from '../style';


const Adashi = () => {
    const navigate = useNavigate();
    const handlePayMyBillsClick = () => {
        navigate('/pay-my-bills');
    }

    const messageClick = () => {
        navigate('/contact');
    }

    return (
        <Fragment>
           <Container>
           <Name><strong>ADASHI</strong></Name>
           <Text>A platfrom to save/contribute money as a group <br />
                or individual and get paid automatically.
            </Text>
                <ReactBootStrap.Row className="justify-content-md-center" style={{padding: '4% 5%'}}>
                    <ReactBootStrap.Col xs lg="2" sm='2'>
                    <ReactBootStrap.Button md="auto" style={{ border: 'none' , backgroundColor: 'rgba(9, 207, 131, 1)' ,color: 'white', fontWeight: '600', padding: '3% 8%', fontSize: '24px'}}>Website</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs lg="2" sm='2'>
                    <ReactBootStrap.Button style={{ border: 'none' , backgroundColor: 'rgba(9, 207, 131, 1)' ,color: 'white', fontWeight: '600', padding: '3% 8%', fontSize: '24px'}}>Mobile</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
           </Container>
           <div className='padding'>
                <ReactBootStrap.Row>
                    <div className='brief'>brief</div>
                    <ReactBootStrap.Col sm={4} className='above'>
                        About Adashi
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={8} className='about-text'>
                    Adashi is a platform that allows users to save money as a group or 
                    individually and receive payments at a pre-determined time set by the user via the platform.
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
           </div>
                  <FooterContainer >
                     <FooterWrapper style={{width: '100%', paddingBottom: '4%'}}>
                                        <div className='padding'>
                                        <ReactBootStrap.Card style={{border: 'none' }} >
                                    <ReactBootStrap.Card.Body >
                                        <ReactBootStrap.Card.Title style={{fontSize: '48px'}}><strong> Highlight</strong></ReactBootStrap.Card.Title>
                                        <ReactBootStrap.Card.Text >
                                        <ReactBootStrap.Row>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3'}}>
                                                    <strong>My Role</strong>
                                                    <br />
                                                    <div style={{paddingTop: '5%', color: 'white'}}>Product Designer</div>
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3'}}>
                                                 <strong> Tools</strong>
                                                  <br />
                                                  <div style={{paddingTop: '5%', color: 'white'}}>Figma, Illustrator, Photoshop</div>
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3'}}>
                                                   <strong>  Team</strong>
                                                     <br />
                                                     <div style={{paddingTop: '5%', color: 'white'}}>Ifeoluwa Oduse, Samuel Akintunde</div>
                                                  </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                                            <ReactBootStrap.Row>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3', padding: '7% 0 5%'}}>
                                                    <strong>Skills & Methods</strong>
                                                    <div style={{paddingTop: '5%', color: 'white'}}>Experimentation, UX design, <br />
                                                    UI design, Usability test</div>
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3', paddingTop: '7%'}}>
                                                 <strong> Time-line</strong>
                                                 <div style={{paddingTop: '5%', color: 'white'}}> Aug - Oct. 2021, 8 weeks</div>
                                                </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                                        </ReactBootStrap.Card.Text>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                                        </div>
                            </FooterWrapper>
                    </FooterContainer>
                     <FooterWrapper style={{backgroundColor: 'white', width: '100%'}} >
                           <div className='padding' style={{padding: '6%'}}>
                           <div className='first'><strong>The Challange</strong></div>
                               <ReactBootStrap.Row>
                                   <ReactBootStrap.Col >
                               <div className='challange'>
                               A lot of Nigerians understand one cliche, which is "saving for the rainy day," an
                                                 expression used to  convey  how important it is to save. It's surprising to find that 
                                                 Nigerians do not save as much as believed. According to the International Monetary Fund, the
                                                  gross saving rate in Nigeria  stands at 15%, far below China at 49%, and even  below otherAfrican countries.
                                               <br />
                                               <br />
                                                While growing up, I saw a lot of government workers in Nigeria trying to save with friends at work but ended up 
                                                having issues when they were expected to collect their money from the person/individual holding the money.
                               </div>
                                   </ReactBootStrap.Col>
                                   <ReactBootStrap.Col >
                                  <img src={Flag} alt='' width='80%' height='80%' />
                                       </ReactBootStrap.Col>
                                       
                               </ReactBootStrap.Row>
                           </div>
                            </FooterWrapper>
                            <div className='padding'>
                            <div className='brief' >Scope - Goals -Approach</div>
                           <StyledAnimation>
                           <strong className='title'> What I did</strong>
                           </StyledAnimation>
                            <br />
                            <ReactBootStrap.Row style={{marginTop: '5%'}}>
                                <ReactBootStrap.Col>
                                <div className='dot-text' > <strong>.</strong> Scope of Work</div>
                                <div className='sub-title'>Design a platform that allows users to save as an <br />individual or 
                                as a group thereby allowing them to be <br />paid automatically by the system.</div>
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col>
                                <div className='dot-text' ><strong>.</strong> Goals</div>
                                <div className='sub-title'>
                                1. To design a platform that allow users to save and automate payment.
                                                <br />
                                                2. To create design that is easy to use for the users in any part of the country.
                                                3.  Design the solution for both web and mobile application.
                                                <br />
                                </div>
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                                            <ReactBootStrap.Row>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3', padding: '10% 0 5% 0'}}>
  
                                <div className='dot-text' style={{marginTop: '-7%'}}><strong>.</strong> My Approach</div>
                                              <StyledAnimation>
                                              <div className='sub-title'> 1. UX Research deliverables
                                                <br />
                                                2. Create prototype deliverables
                                                <br />
                                                3. Design high fidelity prototype
                                                <br />
                                                4. Usability test</div>
                                              </StyledAnimation>
                                                </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                           
                            </div>
                   <img src={Bg} alt='' width="100%" height='100%'/>
                   <div className='scope' style={{paddingTop: '5%', paddingLeft: '5%'}}>Persona - Competitive analysis</div>
                   <Title>UX Research Methods</Title>
                  <StyledAnimation>
                  <SubText>At this stage, i was practically learning about the people i am designing for. 
                        Here are the two(2)<br /> deliverables used:
                        <br />
                       <div style={{marginTop: '20px'}}> 1. Persona - This is a fictional character that i built as a sort of a user stereotype i.e typical users<br />
                         (the people i am designing for). </div>
                       </SubText>  </StyledAnimation>  
                 <div className='scope' style={{paddingTop:'5%'}}> <StyledDot src={Dot}/><span style={{color: '#D3D3D3'}}>Who am i designing for?</span></div>
                  <StyledAnimation2>
                  <div className='padding'>
                   <ReactBootStrap.Row sm={12} md={12} style={{paddingBottom: '30px'}}>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper >
                            <ReactBootStrap.Card class="card mb-4 border-0" style={{ width: '100%'}}>
                                    <ReactBootStrap.Card.Body style={{height: '100%', width: '100%', borderRadius: '5px',  border:'1px solid white'}}>
                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <img src={Bliss} alt = '' style={{borderRadius: '50%', width: '80%', height: '100%'}}/>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={8}>
                                                <div style={{fontSize: '48px', fontWeight: '700'}}>Ruth Charles</div>
                                                <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> 25years</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> Female</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> Nurse</span></div>
                                               </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        <ReactBootStrap.Card.Title style={{fontSize: '24px'}}>
                                        <div style={{marginTop: '7%'}}><strong >About:</strong></div>
                                         </ReactBootStrap.Card.Title>
                                          <div className='about-martins'>
                                          Bliss works as a nurse in a government-run hospital in Lagos, Nigeria. Tomi, 
                                          Damilola, Victory, and Olamide are four of her closest pals. Bliss enjoys
                                           doing a variety of activities with her pals when they get together, such as strolling out, 
                                           sitting at a bar, and gisting together, among other things. 
                                          </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '24px'}}>
                                            <strong>Goals:</strong>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                        <strong>.</strong> <span>Saving with her friends</span>
                                        <br />
                                        <strong>.</strong> <span>Saving up for her wedding in less than a year.</span>
                                        <br />
                                        <strong>.</strong> <span>Meet her monthly saving goal (consistently).</span>
                                       </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '24px'}}>
                                            <div style={{ marginTop: '10px'}}>
                                            <strong>Frustrations:</strong>
                                            </div>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                        <strong>.</strong> <span>Distance is a big hinderance because they all reside in different states.</span>
                                            <br />
                                            <strong>.</strong> <span>Afraid of using someone's personal account.</span>
                                            <br />
                                            <strong>.</strong> <span> Not sure if she can get her money at the specified period (monthly).</span>
                                            <br />
                                            <br />
                                        </div>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper style={{height: '100%', paddingBottom: '10%'}}>
                            <ReactBootStrap.Card class="card mb-4 border-0" style={{width: '100%', height: '100%'}}>
                                    <ReactBootStrap.Card.Body style={{height: '100%', width: '100%', borderRadius: '5px',  border:'1px solid white'}}>
                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <img src={Douglas} alt = '' style={{borderRadius: '50%', width: '80%', height: '100%'}}/>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={8}>
                                                <div style={{fontSize: '48px', fontWeight: '700'}}>Douglas Frank</div>
                                                <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> 22years</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> Male</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> Student</span></div>
                                               </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        <ReactBootStrap.Card.Title style={{fontSize: '24px'}}>
                                            <div style={{marginTop: '7%'}}><strong >About:</strong></div>
                                         </ReactBootStrap.Card.Title>
                                          <div className='about-martins'>
                                          Douglas is a Master's student at a public institution in Nigeria. 
                                          He enjoys saving money from his monthly salary in order to obtain professional certification.
                                           He also enjoys meeting new people.
                                          </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '24px'}}>
                                            <strong>Goals:</strong>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                        <strong>.</strong> <span>He needs a platform that can help him save in a monthly basis from his income.</span>
                                        <br />
                                        <strong>.</strong> <span>A platform that can help him save together with new people without having issues.</span>
                                        <br />
                                        <strong>.</strong> <span> A platform that automate savings for him.</span>
                                       </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '24px'}}>
                                            <div style={{ marginTop: '10px'}}>
                                            <strong>Frustrations:</strong>
                                            </div>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                        <strong>.</strong> <span>Spending all his income without adequate planning.</span>
                                            <br />
                                            <strong>.</strong> <span>He saves alone and eventually spend his savings before the stipulated time.</span>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                   </div>
              <div>
              <img src={Revolution} alt=''  width="100%" height='100%'/>
              </div>
                  </StyledAnimation2>
                <div className='scope' style={{paddingTop: '5%', paddingLeft: '5%'}}>Brainstorming - User Flow</div>
                   <Title>Ideation deliverables</Title>
                   <SubText>
                       At this stage, i had to think critically about the result obtained while doing the research 
                       </SubText>   
                       <StyledDot style={{marginLeft: '5%'}}>
                                <img src={Dot} alt='' /> 
                             </StyledDot>
                                <div className='dot-text' style={{margin: '-2% 0% 0% 6%'}} >Brainstorming</div>
                  <div className='padding'>
                 
                <StyledAnimation>
                <ReactBootStrap.Row>
                     <ReactBootStrap.Col style={{ paddingBottom: '10%'}}>
                     <div className='about-martins' style={{color: 'white'}}>
                        Myself and other designers discussed how to address issues and <br /> opportunities identified doing our research.
                        <br />
                       <div style={{marginTop: '40px' }}>
                       Here is the list of our resolutions:
                       </div>
                        <br />
                        1. Our users require a solution that is simple, quick, and risk-free.
                        <br />
                        2. Users are able to track their spending record on a weekly, monthly or yearly basis.
                    </div>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col style={{paddingBottom: '3%'}}>
                        <div style={{color: '#D3D3D3', fontWeight: '600' , fontSize: '48px' , marginTop: '20%'}}>
                        “Research, the key <br /> for a solid product…”
                        </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                </StyledAnimation>
                 </div>
                 <img src={FlowChart} alt=''  width="100%" height='100%'/>
                 <div className='scope' style={{paddingTop: '5%', paddingLeft: '5%'}}>Sitemap- Wireframe - High fidelity</div>
                   <Title><strong>Prototyping deliverables</strong></Title>
                   <div className='scope' style={{paddingTop: '5%', paddingBottom: '3%'}}>
                     <span style={{color: '#D3D3D3'}}><strong>.</strong> Site Map</span></div>
                <StyledAnimation>
                <ReactBootStrap.Row>
                     <ReactBootStrap.Col >
                     <div className='about-martins' style={{paddingBottom: '5%'}}>
                     This was used to demonstrate the solution's hirarchy/navigation structure.
                        <br />
                    </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                </StyledAnimation>
                 <img src={FlowChart2} alt=''  width="100%" height='100%'/>
                 <div className='scope' style={{paddingTop: '5%', paddingBottom: '2%'}}>
                      <StyledDot src={Dot}/> <span style={{color: '#D3D3D3', marginLeft:'10px'}}>Wireframe</span></div>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col style={{marginLeft: '70px'}}>
                    <StyledAnimation>
                    <div className='wireframe'>
                     This is a two-dimensional illustration of a page's interface that specifically focuses on space <br />
                      allocation and prioritization of content, functionalities available, and intended behaviors. 
                        <br />
                    </div>
                    </StyledAnimation>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <StyledFlowChart src={FlowChart3} alt=''  width="100%" height='100%'/>
                 <div className='scope' style={{paddingTop: '5%', paddingBottom: '2%'}}>
                      <StyledDot src={Dot}/> <span style={{color: '#D3D3D3', marginLeft:'10px'}}>High Fidelity</span>
                      </div>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col style={{marginLeft: '70px'}}>
                    <StyledAnimation>
                    <div className='wireframe'>
                     This is how I demonstrate the aesthetic and typographic modifications that are delivered.
                        <br />
                    </div>
                    </StyledAnimation>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <StyledFlowChart src={Savings} alt=""  width="100%" height='100%'/>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col style={{ marginTop: "5%"}}>
                     <Title>User Testing</Title>
                    <StyledAnimation>
                    <div className='about-martins' style={{marginLeft: "11%"}}>
                     Measure of the usability test used include:
                     <br />
                        1. Effectiveness
                        <br />
                        2. Engagement
                        <br />
                        3. Error Tolerance
                        <br />
                        4. Easy to learn
                     </div>
                    </StyledAnimation>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col style={{marginTop: "7%"}}>
                     <div className='about-martins'> <StyledDot src={Dot}/> <span style={{color: '#D3D3D3' }}>Key Findings</span></div>
                         <StyledAnimation>
                         <div className='about-martins'>
                         1.A key learning for me is to bargain more time <br />for research from my stakeholders.
                         <br />
                         2.  Also, i learnt to make my interview questions to be more< br/> open minded for my users.
                         </div>
                         </StyledAnimation>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <ReactBootStrap.Row>
                 <ReactBootStrap.Col style={{marginLeft: "5%", paddingBottom: '10%'}}>
                 <div className='about-martins' style={{paddingTop: '5%', paddingBottom: '2%'}}>
                      <StyledDot src={Dot}/> <span style={{color: '#D3D3D3'}}>Conclusion</span>
                      </div>
                        <StyledAnimation>
                       <StyledAnimation>
                       <div className='about-martins'>
                         It was a fantastic project for the team, and we were able <br /> to achieve our objectives at the end of
                          the duties assigned to <br /> the design team. 
                         The platform was created in such a way<br /> that it can be used by everyone quickly and effortlessly.
                         </div>
                       </StyledAnimation>
                        </StyledAnimation>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <img src={UserTesting} alt=""  width="100%" height='100%'/>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col>
                        <StyledAnimation>
                        <div style={{fontWeight: '500', fontSize: '18px', color: 'white', alignItems: 'center', textAlign: 'center', marginTop: '20%'}} onClick={handlePayMyBillsClick}>
                       { `NEXT PROJECT ->`}
                        </div>
                        <div className="pay" onClick={handlePayMyBillsClick}>PAY MY BILLS</div>
                        </StyledAnimation>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col>
                         <div style={{marginTop: '30%'}}>
                         <img src={Bills} alt=""  width="80%" height='100%'/>
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

export default Adashi;