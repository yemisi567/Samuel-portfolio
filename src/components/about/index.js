import React, { Fragment } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { 
        AboutTitle,
        StyledAboutLine,
        BackgroundText,
        RightText,
        AssistTitle,
        CardWrapper, 
        StyledIcon,
        Tools,
        StyledSpinner,
        StyledLineSvgg,
        IconWrapper,
        StyledCaseButton,
        ToolsContainer,
        FooterContainer,
        FooterTitle,
        FooterText,
        FooterWrapper
} from './style';
import   AboutLine  from './assets/about-line.png';
import   ProductDesign  from './assets/product-design.png';
import   GraphicDesign  from './assets/graphics-design.png';
import   MotionDesign  from './assets/motion-graphics.png';
import   BrandDesign  from './assets/brand-design.png';
import   Figma from './assets/Fig.png';
import   Diamond  from './assets/diamond.png';
import   Adobe  from './assets/Xd.png';
import   PhotoShop  from './assets/Ps.png';
import   Illustrator  from './assets/Ai.png';
import   AfterEffect from './assets/Ae.png';
import   Spinner from './assets/spinner.png';
import  { ReactComponent as LineSvg }  from '../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../home/assets/twitter.svg';
import { CopyRightText, StyledInstagram, StyledTwitter } from '../home/style';
import { StyledAnimation2 } from '../home/adashi/style';



const About = () => {
    const navigate = useNavigate();
    const messageClick = () => {
        navigate('/contact');
    }

    return (
        <Fragment>
           <div className='padding'>
           <AboutTitle>SAMUEL AKINTUNDE</AboutTitle>
            <StyledAboutLine>
                <img src={AboutLine} alt = '' width={'90%'}/>
                </StyledAboutLine>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col sm={4}>
                        <BackgroundText>Background</BackgroundText>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={8}>
                        <RightText>
                            I am Samuel (sam_techardent) Akintunde a <strong style={{color: 'white'}}>Nigerian designer</strong> presently based in <strong style={{color: 'white'}}>Nigeria</strong>.
                            I've been working in the design industry for over 3  years. My passion is to design interfaces
                            that reflect the perfect equilibrium between users, business, and product needs. 
                            To achieve that aim, each team member must be included in the design process, which will
                            be validated with consumers and iterated afterwards. My skillset spans from <strong>graphics design</strong>
                            to <strong style={{color: 'white'}}>motion design</strong> and now <strong style={{color: 'white'}}>user experience design</strong>. I’m currently a <strong style={{color: 'white'}}>Product Designer</strong>at 
                            <strong style={{color: 'white'}}> TM30 Global Limited</strong>.
                            <br />
                            <br />
                            Much of my work has been focused on creating better product user experiences. My long-term goal is to make
                             technology user-friendly and accessible to all.
                             <br />
                             <br />
                             I studied Microbiology in college but along the way discovered design. My design journey started with <strong style={{color: 'white'}}>graphics design</strong>
                             , then transitioned into <strong style={{color: 'white'}}>UI design</strong> and, finally UX design. Big ideas and brands that create things that improve 
                             the human experience interest me. I also want to travel to different parts of the world to understand more about human culture and society.
                             <br />
                             <br />
                            Mentoring and passing on expertise to the next generation of designers is something I'm very passionate about.
                             In my spare time, I enjoy listening to music, eating, watching movies, and spending time with friends.
                        </RightText>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                </ReactBootStrap.Container>
                <AssistTitle>How I can assist you:</AssistTitle>
               <StyledAnimation2>
               <ReactBootStrap.Container>
                    <ReactBootStrap.Row sm={12} md={12} style={{margin: 'auto'}}>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper>
                            <ReactBootStrap.Card style={{border: 'none', borderRadius: '10px', }}>
                                    <ReactBootStrap.Card.Img variant="top" src={ProductDesign} />
                                    <ReactBootStrap.Card.Body style={{border: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'}}>
                                        <ReactBootStrap.Card.Title style={{fontSize: '36px'}}><strong>Product Design</strong></ReactBootStrap.Card.Title>
                                        <ReactBootStrap.Card.Text >
                                            I generate product design strategies and concepts based on customer needs as a product designer. 
                                            Working collaboratively with stakeholders 
                                            and product owners to provide insight into user behavior, guide focus and planning, and develop product features.
                                        </ReactBootStrap.Card.Text>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper>
                            <ReactBootStrap.Card style={{border: 'none', borderRadius: '10px',}}>
                                    <ReactBootStrap.Card.Img variant="top" src={GraphicDesign} />
                                    <ReactBootStrap.Card.Body style={{border: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'}}>
                                        <ReactBootStrap.Card.Title style={{fontSize: '36px'}}><strong>Graphic Design</strong></ReactBootStrap.Card.Title>
                                        <ReactBootStrap.Card.Text >
                                        As a visual designer, my goal is to shape and improve the user experience by taking into account 
                                        the effects of illustrations, photography, typography, space, layouts, and color on the usability 
                                        and aesthetic appeal of products.
                                        <br />
                                        <br />
                                        </ReactBootStrap.Card.Text>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
                <ReactBootStrap.Container>
                    <ReactBootStrap.Row sm={12} md={12}>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper>
                            <ReactBootStrap.Card style={{border: 'none', borderRadius: '10px', }}>
                                    <ReactBootStrap.Card.Img variant="top" src={MotionDesign} />
                                    <ReactBootStrap.Card.Body style={{border: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'}}>
                                        <ReactBootStrap.Card.Title style={{fontSize: '36px'}}><strong>Motion Graphics</strong></ReactBootStrap.Card.Title>
                                        <ReactBootStrap.Card.Text>
                                        I have a background in traditional graphic design and have learnt to incorporate time, music, 
                                        and space into my present skill set. I make use of After Effect and Adobe Premier pro.
                                        </ReactBootStrap.Card.Text>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={6} md={6}>
                        <CardWrapper>
                            <ReactBootStrap.Card style={{border: 'none', borderRadius: '10px', }}>
                                    <ReactBootStrap.Card.Img variant="top" src={BrandDesign} />
                                    <ReactBootStrap.Card.Body style={{border: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'}}>
                                        <ReactBootStrap.Card.Title style={{fontSize: '36px'}}><strong>Brand Design</strong></ReactBootStrap.Card.Title>
                                        <ReactBootStrap.Card.Text >
                                            As a brand designer, I collaborate with clients to determine what
                                            picture or mood they want to convey and then produce graphics to establish a brand identity for their company.
                                        </ReactBootStrap.Card.Text>
                                    </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                            </CardWrapper>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
               </StyledAnimation2>
                <ToolsContainer>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col sm={4} lg={4}>
                            <StyledIcon src={Figma} />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={4} md={4}>
                          <StyledIcon src={ Diamond}/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={4} md={4}>
                           <StyledIcon src={Adobe}/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={4} md={4}>
                           <StyledIcon src={PhotoShop}/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={4} md={4}>
                            <StyledIcon src={Illustrator}/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={4} md={4}>
                            <StyledIcon src={AfterEffect}/>
                        </ReactBootStrap.Col>
                        <div>
                        <StyledSpinner>
                            <img src={Spinner} alt='' />
                            </StyledSpinner>
                         <Tools><strong>My tools</strong></Tools>
                        </div>
                    </ReactBootStrap.Row>
                    </ToolsContainer>
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
           </div>
                       
        </Fragment>
    )
}

export default About;