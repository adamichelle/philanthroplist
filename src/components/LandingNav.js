import React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer
} from "@progress/kendo-react-layout";
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <React.Fragment>
            <AppBar themeColor="inherit">
                <AppBarSection>
                    <Link to="/"><img src="/images/logo.png" alt="" width={50} height={50} className="logo" /></Link>
                </AppBarSection>
                
                <AppBarSection>
                    <Link to="/" className="p-title">Philanthroplist</Link>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <ul>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/suggest-a-charity">Suggest a Charity</Link>
                        </li>
                    </ul>
                </AppBarSection>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;