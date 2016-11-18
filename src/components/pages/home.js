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
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Home = () =>
    <div>
        <HomeCoverImage />
        <div className="home">
            <div style={homeText}>
                <p style={{fontSize: 30}}>Junior Front-End Engineer</p>
            </div>
            <div style={{height: 2, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
            <div style={homeText}>
                <p>Javascript, Python, CSS, and HTML</p>
            </div>
            <p style={{fontSize: 10, textAlign: 'center'}}>Site crafted through Javascript's React library.</p>
            <div style={
                {height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{padding: 40}}><NavLink linkText="Projects" linkTo="/projects"
                    linkDesc="My collection of coding projects spanning multiple languages. Projects
                    are primarily stored through Github."
                    linkImage="url(http://imgur.com/xqbMAtp.png)"
                    internal={true}
                    height={300} width={400}/>
                </div>
                <div style={{padding: 40}}><NavLink linkText="About" linkTo="/about"
                    linkDesc="If you would like to take a moment to learn about my personal,
                    and professional life, navigate here."
                    linkImage="url(http://imgur.com/pszu3EL.png)"
                    internal={true}
                    height={300} width={400}/>
                </div>
                <div style={{padding: 40}}><NavLink linkText="Contact" linkTo="/contact"
                    linkDesc="Please contact me for any professional reason, e.g. hiring information,
                    design and developer notes, etc."
                    linkImage="url(http://imgur.com/W3xNM2L.png)"
                    internal={true}
                    height={300} width={400}/>
                </div>
            </div>
        </div>
    </div>;

export default Home;
