import React, { Fragment } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Container, FirstText, Heading, LinkText, PayMyBillsText, RightText, SemiHeading, SubHeading, Text } from './style';
import   PhotoShop  from '../../about/assets/Ps.png';
import   Illustrator  from '../../about/assets/Ai.png';
import   AfterEffect from '../../about/assets/Ae.png';
import PayMyBills from './assets/paybills.png'
import Prints from './assets/prints.png'
import ProductCategory from './assets/product-category.png'
import queen from './assets/queen.png'
import queen2 from './assets/queen2.png'
import queen3 from './assets/queen3.png'
import queen4 from './assets/queen4.png'
import queen5 from './assets/queen5.png'
import queen6 from './assets/queen6.png'
import queen8 from './assets/queen8.png'
import queen9 from './assets/queen9.png'
import Ramadan from './assets/ramadan.png'
import Waec from './assets/waec.png'
import  { ReactComponent as LineSvg }  from '../../home/assets/line.svg';
import { ReactComponent as Linkedln} from '../../home/assets/linkedln.svg';
import { ReactComponent as Instagram } from '../../home/assets/instagram.svg';
import { ReactComponent as Twitter } from '../../home/assets/twitter.svg';
import { CopyRightText, IconWrapper, StyledCaseButton, StyledInstagram, StyledTwitter } from '../../home/style';
import { FooterContainer, FooterText, FooterTitle, FooterWrapper, StyledLineSvgg } from '../../about/style';
import { StyledAnimation, StyledAnimation2 } from '../../home/adashi/style';

const GraphicsDesign = () => {
    const navigate = useNavigate();
    const messageClick = () => {
        navigate('/contact');
    }

    return (
        <Fragment>
            <ReactBootStrap.Row>
                <ReactBootStrap.Col>
                <FirstText>Social Media< br/> Campaigns</FirstText>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col style={{marginTop: '5%'}}>
                <div className='edit'>
                <ReactBootStrap.Row sm={6} >
                     <ReactBootStrap.Col sm={3}>
                    <img src={PhotoShop} alt='' />
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col sm={3}>
                     <img src={Illustrator} alt='' />
                         </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
         <Container>
         <RightText>
              PayMyBills
          </RightText>
         <ReactBootStrap.Row>
             <ReactBootStrap.Col>
             <PayMyBillsText>
        <StyledAnimation>
        PayMyBills is a WhatsApp Chat bot that allows users pay<br />
            bills or make transactions all on WhatsApp.
            <br />
            <br />
            My department was charged with creating the social<br /> media designs for the campaign. In collaboration with the<br />
             Marketing team.
             <br />
             <br />
            We were able to increase the brand’s awareness <br />and audiences on all social media platforms by up to <br />significantly
            <br />
            <br />
            which also led to us meeting sales target of up to
            <br /><strong>N1 million in Sales on the 2nd Quarter of 2021.</strong>
            <br />
            <br /><strong>IG</strong>:<strong>@</strong>paymybills
            <br />
        </StyledAnimation>
          </PayMyBillsText>
             </ReactBootStrap.Col>
             <ReactBootStrap.Col>
             <img src={PayMyBills} alt='' />
             </ReactBootStrap.Col>
         </ReactBootStrap.Row>
         </Container>
         <img src={Waec} alt="" />
         <Container>
         <RightText>
        <div style={{marginTop: '2%'}}>
        @theartisanbutchery</div> 
          </RightText>
         <ReactBootStrap.Row>
             <ReactBootStrap.Col>
             <PayMyBillsText>
            <StyledAnimation2>
            The Artisan Butchery is your premier local butcher and<br /> wine shop. 
             It was founded from the genuine need for<br /> locally produced flavour some meat options for lovers<br /> of good food.
            <br />
            <br />
            I am charged with creating the social media designs <br />for the campaign and management of the brand<br /> online visibility.
             <br />
             <br />
            <br />
            Website: <a href="https://www.theartisanbutchery.ng/">'https://www.theartisanbutchery.ng/' </a>IG:@THEARTISANBUTCHERY`
            </StyledAnimation2>
          </PayMyBillsText>
             </ReactBootStrap.Col>
             <ReactBootStrap.Col>
             <img src={ProductCategory} alt='' style={{marginTop: '-10%'}}/>
             </ReactBootStrap.Col>
         </ReactBootStrap.Row>
         </Container>
         <img src={Ramadan} alt="" />
         <StyledAnimation>
         <Heading>
             Design for Prints
         </Heading>
         </StyledAnimation>
         <img src={Prints} alt="" />
         <ReactBootStrap.Row style={{marginTop: '10%'}}>
                <ReactBootStrap.Col>
                <FirstText>Brand Design</FirstText>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col style={{marginTop: '5%'}}>
                <div className='edit'>
                <ReactBootStrap.Row sm={6} >
                     <ReactBootStrap.Col sm={3}>
                    <img src={PhotoShop} alt='' />
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col sm={3}>
                     <img src={Illustrator} alt='' width={'100%'} height={'100%'}/>
                         </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <div >
            <SubHeading> <strong>.</strong> Queen of the smooth</SubHeading>
            </div>
          <StyledAnimation>
          <div style={{color: '#D3D3D3', marginLeft: '5%', marginTop: '2%'}}>
           Queen of the Smooth delivers delicious, nutritionally balanced homemade supermeals<br /> to people worldwide. Smoothie, 
             as a food constitution, just happens to be the best <br />way we've discovered as yet to deliver such superfood nutrients.
           </div>
          </StyledAnimation>
           <div >
           <ReactBootStrap.Row style={{marginTop: '10%'}}>
                <ReactBootStrap.Col >
              <SemiHeading style={{marginTop: '-4%'}}>  <strong>.</strong> Deliverables</SemiHeading>
             <StyledAnimation>
             <Text>
                    1 . Investigate current logo - space, placement,<br /> typography, crispiness, etc - and document if to<br /> be left
                    untouched before use on your new designs.
                    <br />
                    <br />
                    2 . Design a suitable pattern or motif that reflects the<br /> thrust of the brand namely delivering high-quality<br />
                    delicious nutrient through smoothies
                    3 . Items include business card, Letterhead, Nylon,T-shirt, Package page etc. 
                    </Text>
             </StyledAnimation>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col >
                 <ReactBootStrap.Row >
                     <ReactBootStrap.Col sm={4}>
                     <span style={{
                         color: 'white',
                        fontSize: '24px',
                        fontWeight: '600'}}
                     ><strong>.</strong> Duration</span>
                     <span style={{color: ' #D3D3D3'}}>
                         <br />
                         <br />Aug - Oct, 2021</span>
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col sm={4}>
                  
                     <span style={{
                         color: 'white',
                        fontSize: '24px',
                        fontWeight: '600'}}
                     >   <strong>.</strong> Client</span>
                      <br />
                      <br />
                      <span style={{color: ' #D3D3D3'}}>Sandra Chioma</span>
                     </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            </div>
           <StyledAnimation2>
           <img src={queen} alt='' width={'100%'} height={'100%'}/>
            <img src={queen2} alt=''width={'100%'} height={'100%'} />
            <img src={queen3} alt='' width={'100%'} height={'100%'}/>
            <img src={queen4} alt='' width={'100%'} height={'100%'}/>
            <img src={queen5} alt='' width={'100%'} height={'100%'}/>
            <img src={queen6} alt='' width={'100%'} height={'100%'}/>
            <img src={queen8} alt='' width={'100%'} height={'100%'}/>
            <img src={queen9} alt='' width={'100%'} height={'100%'}/>
           </StyledAnimation2>
            <ReactBootStrap.Row style={{marginTop: '10%'}}>
                <ReactBootStrap.Col>
                <FirstText>Motion Graphics</FirstText>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col style={{marginTop: '5%'}}>
                <div className='edit'>
                <ReactBootStrap.Row sm={6} >
                     <ReactBootStrap.Col sm={3}>
                    <img src={PhotoShop} alt='' />
                     </ReactBootStrap.Col>
                     <ReactBootStrap.Col sm={3}>
                     <img src={AfterEffect} alt='' />
                         </ReactBootStrap.Col>
                 </ReactBootStrap.Row>
                </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
           <LinkText>
           <a href="https://bit.ly/3GAVlxO" style={{color: 'white', textDecoration: 'none'}}>'https://bit.ly/3GAVlxO' </a>
            <br />
            <a href="https://bit.ly/3K9Q6XY" style={{color: 'white', textDecoration: 'none'}}>'https://bit.ly/3K9Q6XY' </a>
            <br />
            <a href="https://bit.ly/3FmIVYM" style={{color: 'white', textDecoration: 'none'}}>'https://bit.ly/3FmIVYM' </a>
            <br />
            <a href="https://bit.ly/3K858gO" style={{color: 'white', textDecoration: 'none'}}>'https://bit.ly/3K858gO' </a>
            </LinkText>
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

export default GraphicsDesign;