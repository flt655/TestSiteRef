import React from 'react';
import {Link} from 'react-router';

export default class NavLink extends React.Component {
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
            height: this.props.height,
            width: this.props.width,
            transition: '0s ease-in',
            background: this.props.linkImage,
            backgroundSize: this.props.backgroundSize,
            backgroundRepeat: this.props.repeat
        }

        if (this.state.selected == true) {
            linkStyle['transition'] = 'width .3s ease-in';
            linkStyle['width'] = this.props.width + 50;


        }else {
            linkStyle['transition'] = 'width .3s ease-out';
            linkStyle['width'] = this.props.width;
        }

        if (this.props.internal == true) {
            return(
                <div style={{boxShadow: '0px 0.1px 3px 0px rgba(0,0,0,0.5)'}}>
                    <Link to={this.props.linkTo} style={{textDecoration: 'none', color: 'grey'}} target={this.props.target}>
                        <div className="navlink" style={Object.assign({},
                            {height: 300, width: 400, display: 'flex', alignItems: 'center',
                            justifyContent: 'center'},
                            linkStyle)}
                            onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                                <p className="navlinktext">{this.props.linkText}</p>
                        </div>
                    </Link>
                    <div style={{height: this.props.height / 1.5, width: 300, margin: 'auto', textAlign: 'center'}}>
                        {this.props.linkDesc}
                    </div>
                </div>
            );
        }else {
            return(
                <div style={{boxShadow: '0px 0.1px 3px 0px rgba(0,0,0,0.5)'}}>
                    <a href={this.props.linkTo} style={{textDecoration: 'none', color: 'grey'}}>
                        <div className="navlink" style={Object.assign({},
                            {height: 400, width: 400, display: 'flex', alignItems: 'center',
                            justifyContent: 'center'},
                            linkStyle)}
                            onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                                <p className="navlinktext">{this.props.linkText}</p>
                        </div>
                    </a>
                    <div style={{height: this.props.height / 2, width: 300, margin: 'auto', textAlign: 'center'}}>
                        {this.props.linkDesc}
                    </div>
                </div>
            );
        }

    }
}
