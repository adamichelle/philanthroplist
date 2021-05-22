import React from 'react';
import { Link } from 'react-router-dom';
import { LandingNav, Nav } from '../components';

function Header(props) {
    const renderNavigation = () => {
        if(props.navType === "landing") {
            return (
                <React.Fragment>
                    <LandingNav />
                    
                    <div className="banner-content-area text-white text-center pt-2 mt-sm-5 pt-sm-5">
                        <h1>A Catalog for Local Nigerian Charities.</h1>
                        <h3>Find and support a local charity with cause dear to your heart.</h3>
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