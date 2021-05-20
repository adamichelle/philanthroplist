import React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from "@progress/kendo-react-layout";

function Nav(props) {
    return (
        <React.Fragment>
            <AppBar className="p-main-nav">
                <AppBarSection>
                    <img src="/images/logo.png" alt="" width={50} height={50} className="logo" />
                </AppBarSection>

                <AppBarSection>
                    <h1 className="p-title mt-1 p-text-gold">Philanthroplist</h1>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <ul>
                        <li>
                            <a href="/" className="p-text-gold">About</a>
                        </li>
                        <li>
                            <a href="/charities" className="p-text-gold">Explore</a>
                        </li>
                    </ul>
                </AppBarSection>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;