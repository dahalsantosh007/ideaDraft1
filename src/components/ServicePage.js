import React from 'react';
import { Button } from 'react-bootstrap';

const service1 = require('../assets/service1.png');
const service2 = require('../assets/service2.png');
const service3 = require('../assets/service3.png');
const service4 = require('../assets/service4.png');
const update = require('../assets/paper-plane-xxl.png');

const style = {
    width: '20px',
    height: '20px',
    marginRight: '10px',
}
class ServicePage extends React.Component{
    render(){
        return(
            <div className='outercontainer'>
                <div className = 'servicePage-flex-container'> 
                    <div className = 'topHeader'>
                        <div>
                            <div className = 'topText'><img src = {service1} style = {style}/>Service 1 </div>
                            <hr/>
                            <div className = 'insideText'>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                            </div>
                            {/* <div>
                                <h6 className = 'textBoxImp'>*In office, home visits, and skype sessions offered</h6>
                            </div> */}
                        </div>
                    </div>

                    <div className = 'topHeader'>
                        <div>
                            <div className ='topText'><img src = {service2} style = {style}/>Service 2</div>
                            <hr/>
                            <div className = 'insideText'>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                            </div>
                            {/* <div>
                                <h6 className = 'textBoxImp'>*In office, home visits, and skype sessions offered </h6>
                            </div> */}
                        </div>
                    </div>

                    <div className = 'bottomHeader'>
                        <div className ='topText'>
                            <div className ='topText'><img src = {service3} style = {style}/>Service 3</div>
                            <hr/>
                            <div className = 'insideText'>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                            </div>
                        </div>
                    </div>

                    <div className = 'bottomHeader'>
                        <div className ='topText'>
                            <div className ='topText'><img src = {service4} style = {style}/>Service 4</div>
                            <hr/>
                            <div className = 'insideText'>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                                <h6 className = 'textBox'>Lorem ipsum dolor sit amet, consectetur </h6>
                            </div>
                        </div>
                    </div>
                    <div className = 'newsLetterTextBox'>
                        <h1 className = 'signUp'>Sign up for updates!!!</h1>
                        <input type = 'text' placeholder = 'Enter your E-mail here' className = 'textInsideInput'/>
                    </div>
                    <div className = 'newsLetterSubmitButton'>
                        <div className ='aeroplane'><img src = {update} style = {style}/></div>
                        <button type = 'submit'> Subscribe</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicePage;