import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Home from './components/pages/home';
import NavigationBar from './components/core/navbar';
import NotFound from './components/core/notFound';

const Root = (props) =>
    <div className="root">
        <div style={{position: 'sticky', top: 0}}><NavigationBar /></div>
        <div className="currentPage">{props.children}</div>
    </div>;

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
