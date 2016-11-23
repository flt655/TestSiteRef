import React from 'react';

import NavLink from '../core/navLink';

const Projects = () =>
        <div className="projects">
            <div className="projectsPageTitle">
                <p style={{fontSize: 30, color: '#C94E3E'}}>Projects</p>
            </div>
            <div style={{height: 1, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
            <div style={{padding: 25}}></div>
            <div className="projectsLinks">
                <div style={{paddingLeft: 40, paddingRight: 40}}>
                <NavLink linkText="Space Travel Calculator" linkTo="https://github.com/staticCoffee/space-travel-time-calculator"
                    linkDesc="Calculates the time it would take to travel from the sun to any given planet in the solar
                            system using the speed of the New Horizons probe, and the speed of light."
                    linkImage="url(http://imgur.com/UxPMh1h.png)"
                    internal={true}
                    height={300} width={400}
                    backgroundSize="cover"
                    repeat="no-repeat"/>
                </div>
                <div style={{paddingLeft: 40, paddingRight: 40}}>
                <NavLink linkText="Portfolio" linkTo="https://github.com/staticCoffee/staticcoffee.github.io"
                    linkDesc="The website you are currently visiting. Check out the code behind it!"
                    linkImage="url(http://imgur.com/7jrBP4U.png)"
                    internal={true}
                    height={300} width={400}
                    backgroundSize="cover"
                    repeat="no-repeat"/>
                </div>
            </div>
        </div>;

export default Projects;
