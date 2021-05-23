import React, { useEffect } from 'react';

function About(props) {
    const { getNavType } = props;

    useEffect(() => {
        getNavType("other");
    });

    return(
        <React.Fragment>
            <section>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>About Philanthroplist</h1>
                            <br />
                            <p>
                                Finding local charities to get involved in Nigeria can be a herculean task. 
                                Prior to finally settling on this idea for the <a className="p-text-gold" href="https://progress-worthyweb.devpost.com/" target="__blank">Worthy Web Hackathon</a>, I did a bit of research on local charities. 
                                It took hours of research to locate lists provided by local blogs and the lists are not as comprehensive as one would expect. 
                            </p>
                            <p>
                                They rarely provided direct access to the charities themselves in form of a link to their websites. Even when they did, you still needed to go further to determine the legitimacy of the charity by searching the corporate affairs commission CAC portal to establish their identity as a registered charity.
                            </p>
                            <p>
                                Philanthroplist is attempting to eliminate the mind-numbing work spent doing this research so that people can skip the mind-numbing work and skip to the good part - supporting and giving to causes dear to their heart locally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;