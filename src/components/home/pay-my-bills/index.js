import React, { Fragment } from 'react';
import { Name, Text,  StyledDot, Title, SubText, StyledFlowChart, StyledCaseButton } from '../adashi/style';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { CardWrapper, FooterContainer, FooterText, FooterTitle, FooterWrapper, StyledLineSvgg} from '../../about/style';
import Flag from './assets/challange.png';
import Dot from '../../home/assets/dot.png'
import Bg from './assets/what-i-did.png'
import Bliss from './assets/ruth.png'
import Douglas from '../adashi/assets/Douglas.png'
import Revolution from './assets/track.png'
import FlowChart from './assets/flowchart.png'
import FlowChart2 from './assets/flowchart2.png'
import FlowChart3 from './assets/flowchart3.png'
import Savings from './assets/fidelity.png'
import UserTesting from './assets/conclusion.png'
import Bills from './assets/next-project.png'
import  { ReactComponent as LineSvg }  from '../../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../../home/assets/twitter.svg';
import { CopyRightText, IconWrapper, StyledInstagram, StyledTwitter } from '../style';
import { Container, Image } from './style';

const PayMyBills = () => {

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
    const handleAdashiClick = () => {
        navigate('/adashi');
    }

    const messageClick = () => {
        navigate('/contact');
    }
    
    return (
        <Fragment>
           <Container>
           <Name><strong>PAYMYBILLS</strong></Name>
           <Text>A platfrom for users to pay their essential bills <br />
                and track their spending record.
            </Text>
            <ReactBootStrap.Row className="justify-content-md-center" style={{padding: '10% 10%',  marginLeft: '5%'}}>
                    <ReactBootStrap.Col xs lg="2" sm='2'>
                    <ReactBootStrap.Button md="auto" style={{ border: 'none' , backgroundColor: 'rgba(9, 207, 131, 1)' ,color: 'white', fontWeight: '600', padding: '8% 20%', fontSize: '24px'}}>Website</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs lg="2" sm='2'>
                    <ReactBootStrap.Button style={{ border: 'none' , backgroundColor: 'rgba(9, 207, 131, 1)' ,color: 'white', fontWeight: '600', marginLeft: '5%', padding: '8% 20%', fontSize: '24px'}}>Mobile</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
           </Container>
             <div className='reveal'>
             <div className='padding'>
              <ReactBootStrap.Row>
                    <div className='brief'>brief</div>
                    <ReactBootStrap.Col sm={4} className='about'>
                        About PayMyBills
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={8} className='about-text'>
                            PayMyBills is a platform that allows users to pay for their essential bills easily and 
                            also makes it easy for them to track their spending history. 
                            The product is a BOT solution that allow users to make bills payment using What'sApp.
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </div>
              <FooterContainer >
                     <FooterWrapper style={{width: '100%', paddingBottom: '4%'}}>
                                        <div className='padding'>
                                        <ReactBootStrap.Card style={{border: 'none' }} >
                                    <ReactBootStrap.Card.Body >
                                        <ReactBootStrap.Card.Title style={{fontSize: '34px'}}><strong> Highlight</strong></ReactBootStrap.Card.Title>
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
                 
                    <FooterWrapper style={{backgroundColor: 'white', width: '100%', marginTop: '-1%'}} >
                           <div className='padding' style={{paddingBottom: '10%'}}>
                           <div className='first'><strong>The Challange</strong></div>
                               <ReactBootStrap.Row>
                                   <ReactBootStrap.Col sm={7}>
                               <div className='challange'>
                               Paying vital payments has become a part of our daily lives.In Nigeria, <br />  it appears that a larger
                                                    proportion of the population pays for airtime, <br />  data, or cable on a daily basis. 
                                                    Most people find the procedure of making <br />  payments difficult since they must either go to their bank or use a POS. 
                                                    <br /> 
                                                    <br /> 
                                                    Furthermore, many people spend a lot of money on services like <br /> airtime and data without even realizing
                                                    how much they have <br /> spent over time.
                                                    <br /> 
                                                    <br /> 
                                                    Note: PayMyBills is a BOT solution, and the stakeholders made the decision to also <br />  design a web 
                                                    platform to allow users to perform the same transaction and also  <br /> add more features.
                               </div>
                                   </ReactBootStrap.Col>
                                   <ReactBootStrap.Col sm={5}>
                               < img src={Flag} alt='' width='100%' height='80%' />
                                       </ReactBootStrap.Col>
                               </ReactBootStrap.Row>
                           </div>
                            </FooterWrapper>
                                                 <div className='scope' style={{paddingTop: '5%', paddingLeft: '5%'}}>Scope - Goals - Approach</div>
                                        <Title style={{paddingBottom: '5%'}}>UX Research Methods</Title>
                                       <div className='padding'>
                                       <ReactBootStrap.Row>
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                                   <div className='dot-text' > <strong>.</strong> Scope of Work</div>
                                             
                                               <div className='about-martins' >
                                               1. Create a web portal for our existing BOT solution for bill payment.
                                                <br />
                                                2. Create a design that is simple to utilize for everyone.
                                                <br />
                                                3. Create a service that allows individuals or corporate brands to keep track of their expenditure.
                                               </div>
                                              
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                                    <div className='dot-text2' ><strong>.</strong> My goals</div>
                                             
                                              <div className='about-martins' >
                                               1. To design a web platform that has almost the same functionality as the BOT solution.
                                                <br />
                                                2. To create a service that allows customers to pay bills in a few simple steps.
                                               </div>
                                             
                                                </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                                            <ReactBootStrap.Row>
                                                <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3', paddingTop: '10%'}}>
                                                    <div className='dot-text' ><strong>.</strong> My Approach</div>
                                                </ReactBootStrap.Col>
                                               <ReactBootStrap.Row>
                                               <ReactBootStrap.Col sm={4} style={{color: '#D3D3D3', paddingTop: '30px'}}>
                                            
                                              <div className='about-martins' >
                                                1. UX Research deliverables
                                                <br />
                                                2. Create prototype deliverables
                                                <br />
                                                3. Design high fidelity prototype
                                                <br />
                                                4. Usability test
                                                </div>
                                             
                                                </ReactBootStrap.Col>
                                               </ReactBootStrap.Row>
                                            </ReactBootStrap.Row>
                                       </div>
                                      
                   <img src={Bg} alt='' width="100%" height='80%' style={{marginTop: '10%'}}/>
                   <div className='scope' style={{paddingTop: '5%', paddingLeft: '5%'}}>Persona - Competitive Analysis</div>
                   <Title style={{paddingLeft: '5%'}}>UX Research Methods</Title>
                   <SubText>At this stage, i was practically learning about the people i am designing for. 
                        Here are the two(2)<br /> deliverables used:
                        <br />
                       <div style={{marginTop: '20px'}}> 1. Persona - This is a fictional character that i built as a sort of a user stereotype i.e typical users<br />
                         (the people i am designing for). </div>
                       </SubText>   
                 <div className='scope' style={{paddingBottom: '2%', paddingLeft: '5%'}}> <StyledDot src={Dot}/><span style={{color: '#D3D3D3', }}>Who am i designing for?</span></div>
                    <div className='padding'>
                   <ReactBootStrap.Row sm={12} md={12} style={{paddingBottom: '30px'}}>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper>
                            <ReactBootStrap.Card class="card mb-4 border-0" style={{ width: '100%'}}>
                                    <ReactBootStrap.Card.Body style={{height: '100%', width: '100%', borderRadius: '5px',  border:'1px solid white'}}>
                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <img src={Bliss} alt = '' style={{borderRadius: '50%', width: '80%', height: '100%'}}/>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={8}>
                                                <div style={{fontSize: '32px', fontWeight: '700'}}>Ruth Charles</div>
                                                <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'>  <strong>.</strong> <span style={{color: '#D3D3D3'}}> 25years</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'> <strong>.</strong> <span style={{color: '#D3D3D3'}}> Female</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'>  <strong>.</strong> <span style={{color: '#D3D3D3'}}> Banker</span></div>
                                               </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        <ReactBootStrap.Card.Title style={{fontSize: '20px'}}>
                                        <div style={{marginTop: '7%'}}><strong >About:</strong></div>
                                         </ReactBootStrap.Card.Title>
                                          <div className='about-martins'>
                                          Ruth is a young Nigerian woman who works for GTBank.
                                           Her everyday working hours are from 9 a.m. to 5 p.m.
                                           She is based in Lagos. She enjoys watching movies on Netflix and listening to Christian music.
                                          </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '20px'}}>
                                            <strong>Goals:</strong>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                        <strong>.</strong> <span>She needs a platform where she can pay for her essential bills faster</span>
                                        <br />
                                        <strong>.</strong> <span>Bill payment is taking a larger percentage of her salary, so she is looking for a platform to track her spending on a monthly basis.</span>
                                       </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '20px'}}>
                                            <div style={{ marginTop: '10px'}}>
                                            <strong>Frustrations:</strong>
                                            </div>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                        <strong>.</strong> <span>After paying her bills, she discovered that she had practically finished her paycheck in the middle of the month.</span>
                                            <br />
                                            <strong>.</strong> <span>Without being able to track the details, the network provider continues to charge her for automated services.</span>
                                        </div>
                                        <br />
                                        <br />
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper style={{height: '100%'}}>
                            <ReactBootStrap.Card class="card mb-4 border-0" style={{width: '100%', height: '100%'}}>
                                    <ReactBootStrap.Card.Body style={{height: '100%', width: '100%', borderRadius: '5px',  border:'1px solid white'}}>
                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <img src={Douglas} alt = '' style={{borderRadius: '50%', width: '80%', height: '100%'}}/>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={8}>
                                                <div style={{fontSize: '32px', fontWeight: '700'}}>Douglas Frank</div>
                                                <ReactBootStrap.Row>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'>  <strong>.</strong><span style={{color: '#D3D3D3'}}> 22years</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'>  <strong>.</strong><span style={{color: '#D3D3D3'}}> Male</span></div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col sm={4}>
                                            <div className='scope2'>  <strong>.</strong><span style={{color: '#D3D3D3'}}> Student</span></div>
                                               </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>
                                        <ReactBootStrap.Card.Title style={{fontSize: '20px'}}>
                                        <div style={{marginTop: '7%'}}><strong >About:</strong></div>
                                         </ReactBootStrap.Card.Title>
                                          <div className='about-martins'>
                                          Douglas is a Master's student at a public institution in Nigeria. 
                                          He enjoys saving money from his monthly salary in order to obtain professional certification.
                                           He also enjoys meeting new people.
                                          </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '20px'}}>
                                            <strong>Goals:</strong>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                      <strong>.</strong> <span>He needs a platform that can help him save in a monthly basis from his income.</span>
                                        <br />
                                        <strong>.</strong> <span>A platform that can help him save together with new people without having issues.</span>
                                        <br />
                                       <strong>.</strong> <span> A platform that automate savings for him.</span>
                                       </div>
                                        <ReactBootStrap.Card.Title style={{fontSize: '20px'}}>
                                            <div style={{ marginTop: '10px'}}>
                                            <strong>Frustrations:</strong>
                                            </div>
                                         </ReactBootStrap.Card.Title>
                                        <div className='about-martins'>
                                            <strong>.</strong> <span>Spending all his income without adequate planning.</span>
                                            <br />
                                            <strong>.</strong> <span>He saves alone and eventually spend his savings before the stipulated time.</span>
                                            <br />
                                        </div>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    </div>
                <img src={Revolution} alt=''  width="100%" height='90%'/>
                <div className='scope' style={{paddingTop: '5%', paddingLeft: '5%'}}>Brainstorming - User Flow</div>
                   <Title style={{paddingLeft: '5%'}}>Ideation deliverables</Title>
                  <SubText>
                       At this stage, i had to think critically about the result obtained while doing the research 
                       </SubText>  
                       <StyledDot style={{marginLeft: '5%'}}>
                                <img src={Dot} alt='' /> 
                             </StyledDot>
                                <div className='dot-text' style={{margin: '-2% 0% 0% 6%'}} >Brainstorming</div>
                  <div className='padding'>
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
                       <div style={{color: '#D3D3D3', fontWeight: '600' , fontSize: '48px' , marginTop: '5%', paddingLeft: '5%'}}>
                        “Research, the key <br /> for a solid product…”
                        </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 </div>
                 <div className='scope' style={{paddingTop: '10px', paddingBottom: '5%'}}>
                      <StyledDot src={Dot}/> <span style={{color: '#D3D3D3', marginLeft:'10px'}}>User Flow</span></div>
                 <img src={FlowChart} alt=''  width="100%" height='100%'/>
                 <div className='scope' style={{paddingTop: '5%'}}>Sitemap- Wireframe - High fidelity</div>
                   <Title style={{marginLeft: '-3%'}}>Prototyping deliverables</Title>
                   <div className='scope' >
                      <strong>.</strong> <span style={{color: '#D3D3D3'}}>Site Map</span></div>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col >
                    <div className='about-martins' style={{padding: '0% 0% 5% 3%'}}>
                     This was used to demonstrate the solution's hirarchy/navigation structure.
                        <br />
                    </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <img src={FlowChart2} alt=''  width="100%" height='50%'/>
                 <div className='scope' style={{paddingTop: '5%', paddingBottom: '2%'}}>
                      <StyledDot src={Dot}/> <span style={{color: '#D3D3D3'}}>Wireframe</span></div>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col style={{marginLeft: '2%'}}>
                   <div className='wireframe'>
                     This is a two-dimensional illustration of a page's interface that specifically focuses on space <br />
                      allocation and prioritization of content, functionalities available, and intended behaviors. 
                        <br />
                    </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <StyledFlowChart src={FlowChart3} alt=''  width="100%" height='50%'/>
                 <div className='scope' style={{paddingTop: '5%', paddingBottom: '2%'}}>
                      <strong>.</strong> <span style={{color: '#D3D3D3'}}>High Fidelity</span>
                      </div>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col style={{marginLeft: '2%'}}>
                   <div className='wireframe'>
                     This is how I demonstrate the aesthetic and typographic modifications that are delivered.
                        <br />
                    </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <StyledFlowChart src={Savings} alt=""  width="100%" height='50%'/>
                 <div className='padding' style={{marginTop: '6%'}}>
                                     <strong className='title' > User Testing</strong>
                                                                  <br />
                                       <ReactBootStrap.Row style={{marginTop: '4%'}} >
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                               <div className='about-martins' >
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
                                              
                                                </ReactBootStrap.Col>
                                                <ReactBootStrap.Col sm={6} style={{color: '#D3D3D3'}}>
                                                    <div className='dot-text2' ><strong>.</strong> Key Findings</div>
                                             
                                              <div className='about-martins' >
                                              1. We noticed that the web platform that was designed <br /> gave our users more flexibility while using the platfom.
                                            <br />
                                            2.  Also, some users were unable to engage with the <br />platfrom well enough which lead to different iterations <br />so as to improve the experience.
                                               </div>
                                             
                                                </ReactBootStrap.Col>
                                            </ReactBootStrap.Row>
                                  </div>
                    <ReactBootStrap.Row>
                 <ReactBootStrap.Col >
                     <div className='about-martin3'>  <strong>.</strong> Conclusion</div>
                         <div className='about-martins' style={{marginLeft: "4%", paddingBottom: '7%'}}>
                         The stakeholders took a fantastic decision to make the <br /> product available on web for its users apart from just using <br />the BOT. 
                         This increase the data base of our users <br />and increased sale afterwards.
                     </div>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                 <img src={UserTesting} alt=""  width="100%" height='50%'/>
                 <ReactBootStrap.Row>
                     <ReactBootStrap.Col>
                       <div style={{fontWeight: '500', fontSize: '18px', color: 'white', alignItems: 'center', textAlign: 'center', marginTop: '30%'}} onClick={handleAdashiClick}>
                       { `NEXT PROJECT ->`}
                        </div>
                        <div style={{fontWeight: '700', fontSize: '48px', color: '#09CF83', marginLeft: '40%', marginTop: '14px'}} onClick={handleAdashiClick}>ADASHI</div>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col>
                         <Image>
                         <img src={Bills} alt=""  width="80%" height='100%'/>
                        </Image>
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

export default PayMyBills;