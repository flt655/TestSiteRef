import React from 'react';
import {Link} from 'react-router';

import NavLink from '../core/navLink';

const HomeCoverImage = () =>
    <div className="homeCoverImage">
        <div className="homeCoverText">
            <p>Bryce Robert Crist</p>
        </div>
    </div>;

var homeText = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const Home = () =>
    <div>
        <div><HomeCoverImage /></div>
        <div className="home">
            <div style={homeText}>
                <p style={{fontSize: 30}}>Junior Front-End Developer</p>
            </div>
            <div style={{height: 1, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
            <div style={Object.assign({}, {paddingBottom: 90}, homeText)}>
                <p style={{fontSize: 20}}>
                    Javascript<span style={{color: 'rgba(28, 88, 138, 1)', fontSize: 20}}>|</span>
                    Python<span style={{color: 'rgba(28, 88, 138, 1)',fontSize: 20}}>|</span>
                    HTML / CSS
                </p>
            </div>
            <div style={
                {height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{paddingLeft: 40, paddingRight: 40}}><NavLink linkText="Projects" linkTo="/projects"
                    linkDesc="A (small) collection of coding projects spanning multiple languages."
                    linkImage="url(https://images.pexels.com/photos/47425/pexels-photo-47425.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
                    internal={true}
                    height={250} width={350}
                    backgroundSize="cover"
                    repeat="no-repeat"/>
                </div>
                <div style={{paddingLeft: 40, paddingRight: 40}}><NavLink linkText="About" linkTo="/about"
                    linkDesc="Learn a little bit about my life."
                    linkImage="url(http://imgur.com/pszu3EL.png)"
                    internal={true}
                    height={250} width={350}
                    backgroundSize="cover"
                    repeat="no-repeat"/>
                </div>
                <div style={{paddingLeft: 40, paddingRight: 40}}><NavLink linkText="Contact" linkTo="/contact"
                    linkDesc="Contact me for hiring, collaberation opportunites, or if you just want to ask me a few questions."
                    linkImage="url(http://imgur.com/W3xNM2L.png)"
                    internal={true}
                    height={250} width={350}
                    backgroundSize="cover"
                    repeat="no-repeat"/>
                </div>
            </div>
        </div>
    </div>;

export default Home;
