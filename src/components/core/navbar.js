import React from 'react';
import {Link} from 'react-router';

class NavbarLink extends React.Component {
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
            backgroundColor: 'white',
            transition: '.0s ease-in'
        }

        var linkColor = {
            color: 'black'
        }

        if (this.state.selected == true) {
            linkStyle['backgroundColor'] = 'rgba(80, 161, 89, .75)';
            linkStyle['transition'] = 'background-color .5s ease-in-out'
            linkColor['color'] = 'white';
        } else {
            linkStyle['backgroundColor'] = 'white';
            linkStyle['transition'] = 'background-color .5s ease-in-out'
            linkColor['color'] = 'black';
        }

        return(
            <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
                    style={Object.assign({}, {}, linkStyle)}>
                <Link style={
                        Object.assign({}, {fontSize: 20, textDecoration: 'none'}, linkColor)}
                        to={this.props.linkDir}>
                    <div className="navLink">
                        <div>{this.props.linkText}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

var navFootStyle = {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 22
}

const NavFoot = () =>
    <div className="navfoot">
        <p style={Object.assign({}, {}, navFootStyle)}>
            static<span style={{color: '#C94E3E'}}>Coffee</span>
        </p>
        <a className="footLink"
            href="https://medium.com/@staticcoffee">Medium Blog</a>
        <a className="footLink"
            href="https://github.com/staticCoffee">Github</a>
        <a className="footLink"
            href="http://stackoverflow.com/users/7120276/staticcoffee">Stack Overflow</a>
        <a className="footLink"
            href="https://www.facebook.com/brycerobertcrist">Facebook</a>
        <a className="footLink"
            href="https://www.instagram.com/brycecrisppy/?hl=en">Instagram</a>
    </div>;

const NavigationBar = () =>
    <div>
        <div className="navbar">
            <NavbarLink linkDir="/" linkText="Home" />
            <NavbarLink linkDir="/projects" linkText="Projects" />
            <NavbarLink linkDir="/about" linkText="About" />
            <NavbarLink linkDir="/contact" linkText="Contact" />
        </div>
        <div><NavFoot /></div>
    </div>;


export default NavigationBar;
