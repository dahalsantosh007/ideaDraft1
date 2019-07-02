import React,{Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Popup from "reactjs-popup";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ServicePage from './ServicePage';
import {logInUserName,logInPassword} from '../actions/logInAction';
import {fullNameAction,contactNumberAction,emailAction,emailBodyAction} from '../actions/emailAction';
import {scrollAction} from '../actions/scrollAction';
import "animate.css/animate.min.css";

const marginBottom = {
    marginBottom: '40px',
    marginLeft : '7px',
    height: '35px',
}

const marginLeft = {
    marginLeft : '23px'
}

class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            active: false,
            activeSignIn:false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openSignInBox = this.openSignInBox.bind(this);
        this.closeSignInBox = this.closeSignInBox.bind(this);
    }

    componentDidMount() {
        scrollToComponent(this.Top, { offset: 0, align: 'top', duration: 1500});
        this.props.scrollAction('test');
        window.onscroll = () => this._handleScroll(); // can't call setState within in window.onscroll so call a function. dont forget to bind it though
    }

    _handleScroll(){
        if (window.pageYOffset < 150) {  //checks the offset in y axis
          this.props.scrollAction('test');
        } else if(window.pageYOffset >150) {
          this.props.scrollAction('testActive');
        }
      }
    
    openModal(){
        this.setState({ 
            active: true,
        });
    };

    closeModal(){
        this.setState({ 
            active: false,
        });
    };

    openSignInBox(){
        this.setState({ 
            activeSignIn: true,
        });
    }

    closeSignInBox(){
        this.setState({ 
            activeSignIn: false,
        });
    }

    render(){
        return(
            <div id="container">
                <main>
                    <section className="pageSection">
                        <nav ref={(div) => { this.Top = div;}}>
                            <div className = 'landing-grid-container'>
                                <div className = {this.props.className}>
                                    <div className = 'thinkDiffText'>
                                        <a href = '#' onClick={() =>scrollToComponent(this.Top, { offset: 0, align: 'top', duration: 1000})}><h3>MY JOB SEARCH.COM</h3></a>
                                    </div>
                                    <div className = 'aboutText'>
                                        <a href = '#' onClick={() =>scrollToComponent(this.aboutPage, { offset: 0, align: 'top', duration: 1000})}><h3>About</h3></a>
                                    </div>

                                    <div>
                                        <a href = '#'onClick={() =>scrollToComponent(this.contactPage, { offset: 0, align: 'top', duration: 1000})}><h3>Contact</h3></a>
                                    </div>

                                    <div>
                                        <a href = '#'onClick={() =>scrollToComponent(this.servicePage, { offset: 0, align: 'top', duration: 1000})}><h3>Services</h3></a>
                                    </div>

                                    <div>
                                        <a href = '#'onClick={() =>scrollToComponent(this.galleryPage, { offset: 0, align: 'top', duration: 1000})}><h3>Gallery</h3></a>
                                    </div>
                                    
                                    <div>
                                        <a href = '#' onClick = {this.openSignInBox}><h3>Sign In</h3></a>
                                        <Popup
                                            open={this.state.activeSignIn}
                                            closeOnDocumentClick
                                            onClose={this.closeSignInBox}
                                            className = 'santosh'
                                            >
                                            <div className="secondPopBox">
                                                <input className = 'box2' placeholder = 'User name' type = 'text' onChange = {(event)=>this.props.logInUserName(event.target.value)} value = {this.props.userName} style = {marginBottom}/>
                                                <br/>
                                                <input className = 'box2' placeholder = 'Password' type = 'password' onChange = {(event)=>this.props.logInPassword(event.target.value)} value = {this.props.password} style = {marginBottom}/>
                                                <br/>
                                                <button onClick ={this.closeSignInBox} className = 'signUpButtonInside' style = {marginLeft}>Sign In</button>
                                            </div>
                                        </Popup>  
                                    </div>
                                </div>
                            </div>
                            
                            <div className = 'landing-grid-container2'>
                                <div className = 'thinkDiffHomePage'>
                                    MY JOB SEARCH.COM
                                </div>

                                <div className = 'secondText'>
                                    Changing the way of Job Search
                                </div>

                                <div>
                                    <button className = 'signUpButtonInside' onClick={this.openModal}> 
                                        Sign Up
                                    </button>
                                    <Popup
                                        open={this.state.active}
                                        closeOnDocumentClick
                                        onClose={this.closeModal}
                                        >
                                        <div className="modal">
                                            <input className = 'box' placeholder = 'Enter your name' type = 'text' onChange = {(event)=>this.props.fullNameAction(event.target.value)} value = {this.props.fullName}/>
                                            <br/>
                                            <input className = 'box' placeholder = 'Enter your contact number' type = 'text' onChange = {(event)=>this.props.contactNumberAction(event.target.value)} value = {this.props.contactNumber}/>
                                            <br/>
                                            <input className = 'box' placeholder = 'Enter your email address' type = 'text' onChange = {(event)=>this.props.emailAction(event.target.value)} value = {this.props.email}/>
                                            <br/>
                                            <textarea className = 'messageBox' placeholder = 'Enter your text' type = 'text' onChange = {(event)=>this.props.emailBodyAction(event.target.value)} value = {this.props.emailBody}/>
                                            <br/>
                                            <button onClick ={this.closeModal} className = 'signUpButtonInside'>Send Email</button>
                                        </div>
                                    </Popup>                                
                                </div>
                            </div>
                        </nav>
                    </section>
                    
                    <section className="pageSection">
                        <article className='homeID' ref={(article) => { this.aboutPage = article; }}>
                            <AboutPage/>  
                        </article>
                    </section>

                    <section className="pageSection">
                        <article className='homeID' ref={(article) => { this.contactPage = article; }}>
                            <ContactPage/>  
                        </article>
                    </section>

                    <section className="pageSection">
                        <article className='homeID' ref={(article) => { this.servicePage = article; }}>
                            <ServicePage/>  
                        </article>
                    </section>
                </main>
            </div>
 
        )
    }
}

const mapsStateToProps = state =>({
    userName : state.logIn.logInUserName,
    password : state.logIn.logInPassword,
    fullName : state.email.fullName,
    contactNumber: state.email.contactNumber,
    email: state.email.email,
    emailBody: state.email.emailBody,
    className: state.scroll.className
})

const mapsDispatchToProps = dispatch =>({
    ...bindActionCreators({
        logInUserName,
        logInPassword,
        fullNameAction,
        contactNumberAction,
        emailAction,
        emailBodyAction,
        scrollAction,},dispatch)
})

export default connect (mapsStateToProps,mapsDispatchToProps)(LandingPage);