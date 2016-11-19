import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Home from './components/pages/home';
import NavigationBar from './components/core/navbar';
import NotFound from './components/core/notFound';


class Root extends React.Component {
    constructor() {
        super();
        this.state = {mobile: false}
        this.checkDevice = this.checkDevice.bind(this);
    }

    checkDevice() {
        if(navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)){
            this.setState({mobile: !this.state.mobile});
        }else {
            this.setState({mobile: false});
    }}

    componentWillMount() {
        this.checkDevice();
    }

    render() {
        if (this.state.mobile == false) {
            return(
                <div className="root">
                    <div style={{position: 'sticky', top: 0}}><NavigationBar /></div>
                    <div className="currentPage">{this.props.children}</div>
                </div>
            );
        }else {
            return(
                <div>Sorry, you're on mobile...</div>
            );
        }
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>,
    document.getElementById('react-root'));
