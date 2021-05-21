import React from 'react';
import { Link } from 'react-router-dom';
import { LandingNav, Nav } from '../components';

function Header(props) {
    const renderNavigation = () => {
        if(props.navType === "landing") {
            return (
                <React.Fragment>
                    <LandingNav />
                    
                    <div className="banner-content-area text-white text-center mt-5 pt-5">
                        <h1>A Catalog for Local Nigerian Charities.</h1>
                        <h3>Find a local charity with cause dear to your heart and learn how to pay it forward.</h3>
                        <Link to="/charities" className="btn font-weight-bold p-btn-gold">Get Started</Link>
                    </div>

                    <div className="hero">
                        <div className="banner text-center">
                            <div className="color-overlay"></div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        else {
            return <Nav />
        }
    }

    return(
      <header>
        { renderNavigation() }
      </header>
    );
}
  
export default Header;