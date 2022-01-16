import React, { Fragment } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { NameStyle, 
    SubNameStyle,
    AboutMe,
    StyledLineSvg,
    StyledSamuelImage, 
    FeaturedTitle,
    StyledFaintLine,
    StyledFeature1,
    StyledFeature2,
    StyledFeature3,
    FeaturedName,
    FeaturedSubText,
    CopyRightText,
    StyledDot,
    FeaturedSemiTitle ,
    StyledDot2,
    StyledButton,
    StyledYellowDot,
    StyledThickLine,
    StyledGraphic,
    DesignTitle,
    FooterText,
    FooterSubText,
    StyledCaseButton,
    Icon,
    DesignTitle2, 
    Animation,
    StyledInstagram,
    StyledTwitter
} from './style';
import { ReactComponent as Line } from './assets/line.svg';
import { ReactComponent as Linkedln} from './assets/linkedln.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import  FeaturedFirst from './assets/featured1.png';
import  FeaturedSecond from './assets/feaured2.png';
import  FeaturedThird from './assets/featured3.png';
import  SamuelImage from './assets/samuel.png';
import  FaintLine from './assets/faint-line.png';
import  ThickLine from './assets/thick-line.png';
import  Dot from './assets/dot.png';
import  DotCopy from './assets/dot-copy.png';
import  YellowDot from './assets/yellow-dot.png';
import  GraphicDesign from './assets/graphic.png';
import   OtherDesign  from './assets/other.png';
import   BrandDesign  from './assets/brand.png';
import { IconWrapper } from '../about/style';




const Home = () => {
    
   const navigate = useNavigate();
    const handleAdashiClick = () => {
        navigate('/adashi');
    }

    const handlePayMyBillsClick = () => {
        navigate('/pay-my-bills');
    }

    const handleAtmSolutionClick = () => {
        navigate('/atm-solution');
    }

    const messageClick = () => {
        navigate('/contact');
    }

    return (

        <Fragment>
           <div className='padding'>
           <ReactBootStrap.Container>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col sm={8}>
                            <NameStyle>Hi, my name is</NameStyle>
                            <SubNameStyle>Samuel Akintunde</SubNameStyle>
                            <AboutMe>I am a <span style={{color: '#FDAE24'}}>Product Designer</span>, creating both web and mobile applications.
                                    I specialize in user interface design, have strong design aesthetics skills,
                                    and enjoy coming up with new ideas through design<br /> while staying within the boundaries of the product.
                                   <br />
                                   <br />
                                 Learn <span style={{color: '#FDAE24'}}>more about me</span> or jump straight to my <span style={{color: '#FDAE24'}}>work</span>. 
                            </AboutMe>
                            <StyledLineSvg>
                            <Line/>
                            </StyledLineSvg>
                    </ReactBootStrap.Col>
                        <ReactBootStrap.Col sm={4}>
                            <StyledSamuelImage src={SamuelImage} />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
            </ReactBootStrap.Container>
                    <Icon>
                    <a href='https://www.linkedin.com/in/samuelakintunde/' ><Linkedln /></a>
                                            <StyledInstagram>
                                            <Instagram src={Instagram} alt='' />
                                            </StyledInstagram>
                                            <StyledTwitter>
                                            <a href='https://twitter.com/sam_techardent' ><Twitter /></a>
                                            </StyledTwitter>
                    </Icon>
                    <FeaturedTitle>Featured Projects</FeaturedTitle>
                    <StyledFaintLine>
                        <img src={FaintLine} alt='' width={'90%'} />
                        </StyledFaintLine>
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col sm={6}>
                                <StyledFeature1>
                                    <img src={FeaturedFirst} alt='' width={'100%'} />
                                    </StyledFeature1>
                                </ReactBootStrap.Col>
                           <ReactBootStrap.Col sm={6}>
                             <FeaturedName>Adashi Esusu Akawo</FeaturedName>
                             <StyledDot src={Dot}/><span className='style'>adashiesusuakawo.com</span>
                             <br />
                             <div className='great'>About</div>
                             <FeaturedSubText>
                                      Adashi is a platform that enables users to save money 
                                      as a group or individually and receive payments at a 
                                      predetermined period.
                                </FeaturedSubText>
                                <StyledDot2 src={DotCopy}/><div className='mobile'>Available on Web and Mobile</div>
                                <StyledCaseButton>
                                    <ReactBootStrap.Button style={{color: 'white', border: 'none', fontSize: '18px' , fontWeight: '600', borderRadius: '8px', padding: '4%', backgroundColor: 'rgba(253, 174, 36, 1)' }} onClick={handleAdashiClick}>Read Case Study</ReactBootStrap.Button>
                                </StyledCaseButton>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        </ReactBootStrap.Container>
                        <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col sm={6}>
                                <StyledFeature2>
                                    <img src={FeaturedSecond} alt='' width={'100%'}/>
                                    </StyledFeature2>
                                </ReactBootStrap.Col>
                            <ReactBootStrap.Col sm={6}>
                             <FeaturedName>Pay My Bills</FeaturedName>
                             <StyledYellowDot src={YellowDot}/><span className='style'>Paymybills.com</span>
                             <br />
                             <div className='great'>About</div>
                             <FeaturedSubText>
                                PayMyBills is a platform that allows customers to conveniently
                                pay their essential bills while also keeping track of 
                                their expenditures.
                                </FeaturedSubText>
                                <StyledDot2 src={DotCopy}/><div className='mobile'>Available on Web</div>
                                <StyledCaseButton>
                                    <ReactBootStrap.Button style={{color: 'white', border: 'none', fontSize: '18px' , fontWeight: '600', borderRadius: '8px', padding: '4%', backgroundColor: 'rgba(253, 174, 36, 1)' }} onClick={handlePayMyBillsClick}>Read Case Study</ReactBootStrap.Button>
                                </StyledCaseButton>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        </ReactBootStrap.Container>
                        <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col sm={6}>
                                <StyledFeature3>
                                    <img src={FeaturedThird} alt='' width={'100%'}/>
                                    </StyledFeature3>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col sm={6}>
                             <FeaturedName>ATM SOLUTION</FeaturedName>
                             <StyledYellowDot src={Dot}/><span className='style'>Redesign</span>
                             <br />
                             <div className='great'>About</div>
                             <FeaturedSubText>
                                This Solution help to improve  ATM experienece in Nigeria, West Africa.
                                </FeaturedSubText>
                                <StyledDot2 src={YellowDot}/>
                                <div className='mobile'>Not Specified</div>
                                <StyledCaseButton>
                                    <ReactBootStrap.Button style={{color: 'white', border: 'none', fontSize: '18px' , fontWeight: '600', borderRadius: '8px', padding: '4%', backgroundColor: 'rgba(253, 174, 36, 1)' }} onClick={handleAtmSolutionClick}>Read Case Study</ReactBootStrap.Button>
                                </StyledCaseButton>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        </ReactBootStrap.Container>
                        <FeaturedSemiTitle>These are also something i do</FeaturedSemiTitle >
                        <StyledThickLine>
                            <img src={ThickLine}  alt='' width={'85%'} />
                            </StyledThickLine>
                        <ReactBootStrap.Container>
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col sm>
                                     <StyledGraphic>
                                         <img src={GraphicDesign} alt='' width={'100%'}/>
                                         </StyledGraphic>
                                     <DesignTitle>Graphic Design</DesignTitle>
                                </ReactBootStrap.Col>
                                    <ReactBootStrap.Col sm>
                                    <StyledGraphic>
                                        <img src={OtherDesign} alt = '' width={'100%'}/>
                                        </StyledGraphic>
                                    <DesignTitle>Other Design</DesignTitle>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col sm>
                                        <StyledGraphic>
                                            <img src={BrandDesign} alt='' width={'100%'} />
                                            </StyledGraphic>
                                        <DesignTitle2>Brand Design</DesignTitle2>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Container>
                            <ReactBootStrap.Container className='App-footer'>
                                <FooterText>Let's get to work</FooterText>
                                <FooterSubText><strong>
                                Thank you for taking the time to look through my work. <br /> Please feel free
                                                to contact me at any time if you have any queries or <br /> would want to  
                                                discuss new opportunities.
                                </strong>
                                </FooterSubText>
                                <StyledButton >
                                    <ReactBootStrap.Button style={{color: 'white', border: 'none', fontSize: '18px' , fontWeight: '600', borderRadius: '8px', padding: '2% 5%', backgroundColor: 'rgba(253, 174, 36, 1)' }} onClick={messageClick}>Send me an Email</ReactBootStrap.Button>
                                </StyledButton>
                                <CopyRightText><span style={{color: 'black', fontWeight: '700'}}>CopyRight @ 2020  || Samuel Akintunde</span></CopyRightText>
                            </ReactBootStrap.Container>      
           </div>
        </Fragment> 
    )
}

export default Home;