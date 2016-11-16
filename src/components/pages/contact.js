import React from 'react';

const Contact = () =>
    <div className="contact">
        <div className="contactPageTitle">
            <p style={{fontSize: 30, color: '#C94E3E'}}>Contact</p>
        </div>
        <div style={{height: 2, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
        <div className="contactPageBody">
            <p style={{fontSize: 20}}>
                <span style={{color: '#4397B9'}}>Email: </span>
                staticcoffee@programmer.net
            </p>
        <div style={{textAlign: 'center'}}>
            <p style={{fontSize: 25, color: '#C94E3E'}}>Social media contacts:</p>
        </div>
        <div className="contactSocialLinks">
            <a href="https://medium.com/@staticcoffee"
            style={{fontSize: 20, textDecoration: 'none', color: '#4397B9', padding: 10}}>
                Medium Blog
            </a>
            <a href="https://github.com/staticCoffee"
            style={{fontSize: 20, textDecoration: 'none', color: '#4397B9', padding: 10}}>
                GitHub
            </a>
            <a href="http://stackoverflow.com/users/7120276/staticcoffee"
            style={{fontSize: 20, textDecoration: 'none', color: '#4397B9', padding: 10}}>
                Stack Overflow
            </a>
            <a href="https://www.facebook.com/brycerobertcrist"
            style={{fontSize: 20, textDecoration: 'none', color: '#4397B9', padding: 10}}>
                Facebook
            </a>
            <a href="https://www.instagram.com/brycecrisppy/?hl=en"
            style={{fontSize: 20, textDecoration: 'none', color: '#4397B9', padding: 10}}>
                Instagram
            </a>
        </div>
        </div>
    </div>;

export default Contact;
