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
            height: 165,
            width: 165,
            transition: '0s ease-in',
            background: this.props.linkImage,
            backgroundSize: 'cover'
        }

        if (this.state.selected == true) {
            linkStyle['transition'] = '.2s ease-in';
            linkStyle['height'] = 210;
            linkStyle['width'] = 210;
        }else {
            linkStyle['transition'] = '.2s ease-in';
            linkStyle['height'] = 165;
            linkStyle['width'] = 165;
        }

        return(
            <Link to={this.props.linkTo} style={{textDecoration: 'none', color: 'grey'}}>
                <div className="homenavlink" style={Object.assign({},
                    {borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)'},
                    linkStyle)}
                    onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        <p className="homenavlinktext">{this.props.linkText}</p>
                </div>
            </Link>
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
                {height: 275, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{padding: 40}}><HomeNavLink linkText="About" linkTo="/about"
                    linkImage="url(https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12331712_664353023707816_83732985_n.jpg?ig_cache_key=MTEzMjEyNjE0Mzg0MTgxNzg2Mg%3D%3D.2)"/>
                </div>
                <div style={{padding: 40}}><HomeNavLink linkText="Contact" linkTo="/contact"
                    linkImage="url(https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14583498_1355303191156017_1801729370398654464_n.jpg?ig_cache_key=MTM4Mjg0NTQwOTIzOTU4NzA1Mw%3D%3D.2)"/>
                </div>
            </div>
        </div>
    </div>;

export default Home;
