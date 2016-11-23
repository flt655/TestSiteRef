import React from 'react';

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {selected: false};
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({selected: !this.state.selected})
    }

    render() {
        var aboutImageStyle = {
            backgroundImage: 'url(http://imgur.com/Vg4jqXb.png)',
            backgroundSize: 'cover',
            borderRadius: '50%',
            height: 200,
            width: 200,
            float: 'left',
            marginRight: 20,
            border: '8px solid rgba(28, 88, 138, .5)',
            transition: '0s ease-in'
        }

        if (this.state.selected == true) {
            aboutImageStyle['transition'] = 'border-radius .5s ease-in-out'
            aboutImageStyle['borderRadius'] = '0%';
        } else {
            aboutImageStyle['transition'] = 'border-radius .5s ease-in-out'
            aboutImageStyle['borderRadius'] = '50%';
        }

        return(
            <div className="about">
                <div className="aboutPageTitle">
                    <p style={{fontSize: 30, color: '#C94E3E', textAlign: 'center'}}>About</p>
                </div>
                <div style={{height: 1, width: '30%', margin: 'auto', background: 'lightgrey'}}></div>
                <div className="aboutPageBody">
                    <p style={{padding: 10, fontSize: 20, color: 'rgba(28, 88, 138, 1)'}}>Personal Life</p>
                    <div className="aboutImage" style={aboutImageStyle}
                        onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}></div>
                    <p style={{textAlign: 'left', padding: 10}}>
                        I was born in Eureka Springs, Arkansas and later moved with my
                        family to Pocatello, Idaho, where I currently reside.  I grew up
                        with a strong curioustity towards computers, which started during
                        my first interaction with them in grade school.  I convinced my
                        family to purchase one, which solidified my love for technology.
                        My childhood and adolescence was consumed by my passion, and
                        transformed me into the PC hobbyiest and programmer I am today.
                    </p>
                    <p style={{textAlign: 'left'}}>
                        Beside my interests in technology, I spend my time as a cook for
                        a local restaurant and playing a small variety of instruments --
                        including the guitar, ukulele and piano.
                    </p>
                    <p style={{padding: 10, fontSize: 20, color: 'rgba(28, 88, 138, 1)'}}>Professional Life</p>
                    <p style={{textAlign: 'left'}}>
                        Over the last year or two, I put myself into a position to do
                        a bit of "soul searching", in terms of what I wanted to pursue
                        in life.  In that time, I stumbled upon the amazing, and admittedly
                        frustrating, world of computer programming.
                    </p>
                    <p style={{textAlign: 'left'}}>
                        At first, I tried my hand at Java software
                        development.  However, my interests shifted towards Python programming
                        fairly quickly, as the language was easier to understand for a
                        beginner.  After about a year of coding basic software, I started
                        to dabble in Javascript and web engineering.  I have now been
                        coding in Javascript for close to 6 months.
                    </p>
                    <p style={{textAlign: 'left', paddingBottom: 20}}>
                        To date, I have completed
                        close to half of Codecademy's courses, and have plans to take
                        the SQL courses soon, as well.  I have also taught myself Javascript's
                        React library, Python's Django web framework, and NodeJS.
                    </p>
                </div>
            </div>
        );
    }
}
