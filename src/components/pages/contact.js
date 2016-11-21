import React from 'react';

var linkStyle = {
    fontSize: 20,
    textDecoration: 'none',
    color: '#4397B9',
    padding: 10
}

const Contact = () =>
    <div className="contact">
        <div className="contactPageTitle">
            <p style={{fontSize: 30, color: '#C94E3E'}}>Contact</p>
        </div>
        <div style={{height: 1, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
        <div className="contactPageBody">
            <p style={{fontSize: 20}}>
                <span style={{color: '#4397B9'}}>Email: </span>
                staticcoffee@programmer.net
            </p>
        <div style={{textAlign: 'center'}}>
            <p style={{fontSize: 25, color: '#C94E3E'}}>Social media contacts:</p>
        </div>
        <div className="contactSocialLinks">
            <a className="contactLink" href="https://medium.com/@staticcoffee"
            style={Object.assign({}, {}, linkStyle)}>
                Medium Blog
            </a>
            <a className="contactLink" href="https://github.com/staticCoffee"
            style={Object.assign({}, {}, linkStyle)}>
                GitHub
            </a>
            <a className="contactLink" href="http://stackoverflow.com/users/7120276/staticcoffee"
            style={Object.assign({}, {}, linkStyle)}>
                Stack Overflow
            </a>
            <a className="contactLink" href="https://www.facebook.com/brycerobertcrist"
            style={Object.assign({}, {}, linkStyle)}>
                Facebook
            </a>
            <a className="contactLink" href="https://www.instagram.com/brycecrisppy/?hl=en"
            style={Object.assign({}, {}, linkStyle)}>
                Instagram
            </a>
        </div>
        </div>
    </div>;

export default Contact;
