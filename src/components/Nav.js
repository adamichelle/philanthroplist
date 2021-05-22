import React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from "@progress/kendo-react-layout";
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <React.Fragment>
            <AppBar className="p-main-nav">
                <AppBarSection>
                    <Link to="/"><img src="/images/logo.png" alt="" width={50} height={50} className="logo" /></Link>
                </AppBarSection>

                <AppBarSection>
                    <Link to="/" className="p-title p-text-gold">Philanthroplist</Link>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <ul>
                        <li>
                            <Link to="/" className="p-text-gold">About</Link>
                        </li>
                        <li>
                            <Link to="/charities" className="p-text-gold">Explore</Link>
                        </li>
                        <li>
                        <Link to="/suggest-a-charity" className="p-text-golden-yellow font-weight-bold">Suggest a Charity</Link>
                        </li>
                    </ul>
                </AppBarSection>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;