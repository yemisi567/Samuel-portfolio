import React, { Fragment } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { CopyRightText } from '../home/style';
import { FirstText } from '../projects/graphics-design/style';


const Contact = () => {

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
            <FirstText>Can't wait to hear 
                    <br />from you</FirstText>
            <div className='contact'>
            <ReactBootStrap.Row>
                <ReactBootStrap.Col>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col style={{marginTop: '5%'}} sm={6}>
                <form action="https://formsubmit.co/Samuelakintunde73@gmail.com.com" method="POST">
                <div class="form-group">
                    <label  style={{color: 'white'}}>Name*</label>
                    <input style={{background: 'none', color: 'white', width: '80%', height: '50px'}} class="form-control" name="Name" id="name" type="text" required />
                </div>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <div style={{marginTop: '7%'}}>
                    <label  style={{color: 'white'}}>Email*</label>
                    <input name="Email" id="email" type="email" style={{background: 'none', width: '80%', height: '50px'}} class="form-control" required/>
                </div>
                        <div style={{marginTop: '5%'}} >
                        <div class="form-group">
                <label style={{color: 'white'}}>Message*</label>
                <textarea class="form-control" style={{background: 'none', width: '80%'}} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
              <ReactBootStrap.Button type='submit' variant="warning" style={{color: 'white', fontSize: '18px' , marginTop: '2%', fontWeight: '600',padding: '2%', width:'60%'}} >Send a message</ReactBootStrap.Button>
              <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
              </div>
                </form>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            </div>
            <CopyRightText style={{color: 'white'}}> <span style={{color: 'white', fontWeight: '700'}}>CopyRight @ 2020  ||Samuel Akintunde</span></CopyRightText>
            </div>
            </Fragment>
                  
    );
}

export default Contact;
