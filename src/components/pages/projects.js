import React from 'react';

import NavLink from '../core/navLink';

const Projects = () =>
        <div className="projects">
            <div className="projectsPageTitle">
                <p style={{fontSize: 30, color: '#C94E3E'}}>Projects</p>
            </div>
            <div style={{height: 2, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
            <div style={{padding: 15}}></div>
            <div className="projectsLinks">
                <div style={{padding: 40}}><NavLink linkText="Space Travel Time Calculator" linkTo="https://github.com/staticCoffee/space-travel-time-calculator"
                    linkDesc="Calculates how long it would take to travel from the sun to any given planet in the solar
                            system using the speed of the New Horizons probe, and the speed of light."
                    linkImage="url(http://imgur.com/UxPMh1h.png)"
                    internal={false}
                    height={400} width={600}/>
                </div>
            </div>
        </div>;

export default Projects
