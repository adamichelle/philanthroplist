import React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from "@progress/kendo-react-layout";

function Nav(props) {
    return (
        <React.Fragment>
            <AppBar>
                <AppBarSection>
                    <img src="/images/logo.png" alt="" width={50} height={50} className="logo" />
                </AppBarSection>

                <AppBarSection>
                    <h1 className="p-title">Philanthroplist</h1>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <ul>
                        <li>
                        <a href="/">About</a>
                        </li>
                        <li>
                        <a href="/charities">Explore</a>
                        </li>
                    </ul>
                </AppBarSection>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;