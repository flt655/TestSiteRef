import React from 'react';
import {Link} from 'react-router';

const HomeCoverImage = () =>
    <div className="homeCoverImage">
        <div className="homeCoverText">
            <p>Bryce Robert Crist</p>
        </div>
    </div>;

class HomeNavLink extends React.Component {
    constructor() {
        super();
        this.state = {selected: false};
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({selected: !this.state.selected})
    }

    render() {
        var linkStyle = {
            height: 300,
            width: 400,
            transition: '0s ease-in',
            background: this.props.linkImage,
            backgroundSize: 'cover'
        }

        if (this.state.selected == true) {
            linkStyle['transition'] = '.2s ease-in';
            linkStyle['width'] = 450;

        }else {
            linkStyle['transition'] = '.2s ease-out';
            linkStyle['width'] = 400;
        }

        return(
            <div style={{boxShadow: '0px 0.1px 3px 0px rgba(0,0,0,0.5)'}}>
                <Link to={this.props.linkTo} style={{textDecoration: 'none', color: 'grey'}}>
                    <div className="homenavlink" style={Object.assign({},
                        {height: 400, width: 400, display: 'flex', alignItems: 'center',
                        justifyContent: 'center'},
                        linkStyle)}
                        onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                            <p className="homenavlinktext">{this.props.linkText}</p>
                    </div>
                </Link>
                <div style={{height: 150, width: 300, margin: 'auto', textAlign: 'center'}}>
                    {this.props.linkDesc}
                </div>
            </div>
        )
    }
}

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
                <div style={{padding: 40}}><HomeNavLink linkText="Projects" linkTo="/projects"
                    linkDesc="My collection of coding projects spanning multiple languages. Projects
                    are primarily stored through Github."
                    linkImage="url(http://imgur.com/xqbMAtp.png)"/>
                </div>
                <div style={{padding: 40}}><HomeNavLink linkText="About" linkTo="/about"
                    linkDesc="If you would like to take a moment to learn about my personal,
                    and professional life, navigate here."
                    linkImage="url(http://imgur.com/pszu3EL.png)"/>
                </div>
                <div style={{padding: 40}}><HomeNavLink linkText="Contact" linkTo="/contact"
                    linkDesc="Please contact me for any professional reason, e.g. hiring information,
                    design and developer notes, etc."
                    linkImage="url(http://imgur.com/W3xNM2L.png)"/>
                </div>
            </div>
        </div>
    </div>;

export default Home;
