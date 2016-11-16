import React from 'react';
import {Link} from 'react-router';

class NavLink extends React.Component {
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
            backgroundColor: '#21252B',
            transition: '.0s ease-in'
        }

        var linkColor = {
            color: 'white'
        }

        if (this.state.selected == true) {
            linkStyle['backgroundColor'] = '#2c323a';
            linkStyle['transition'] = 'background-color .3s ease-in-out'
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
    paddingRight: 15
}

const NavFoot = () =>
    <div className="navfoot">
        <p style={Object.assign({}, {fontSize: 22}, navFootStyle)}>
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
            <NavLink linkDir="/" linkText="Home" />
            <NavLink linkDir="/about" linkText="About" />
            <NavLink linkDir="/contact" linkText="Contact" />
        </div>
        <div><NavFoot /></div>
    </div>;


export default NavigationBar;
