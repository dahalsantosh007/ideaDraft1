import React from 'react';
const image1 = require('../assets/carousel1.jpeg');
const image2 = require('../assets/carousel2.jpg');

class ContactPage extends React.Component{
    render(){
        return(
            <div className = 'contact-grid-container'>
                <div className = 'photo1'>
                    <img src={image1} className = 'carousel1'/>
                </div>

                <div className = 'article1'>
                    <div className = 'headerTag'>Address</div>
                    <br/>
                    <br/>
                        <h5>123 Jhon Doe ave</h5>
                        <h5>Boston, MA 12345</h5>
                </div>

                <div className = 'photo2'>
                    <img src = {image2} className = 'carousel1'/>
                </div>

                <div className = 'article2'>
                    <div className = "secondHeaderTag">
                        Contact:
                    </div>
                    <br/>
                    <br/>
                    <div className = 'phoneContact'>
                        Tel: 123456789 (Jhon Doe)<br/>
                        123456789 (Jane Doe)<br/>
                        Fax: 111.222.4444
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;