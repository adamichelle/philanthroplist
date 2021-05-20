import React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer
} from "@progress/kendo-react-layout";

function Nav(props) {
    return (
        <React.Fragment>
            <AppBar themeColor="inherit">
                <AppBarSection>
                    <img src="/images/logo.png" alt="" width={50} height={50} className="logo" />
                </AppBarSection>
                
                <AppBarSection>
                    <a href="/" className="p-title">Philanthroplist</a>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <ul>
                        <li>
                        <a href="/about">About</a>
                        </li>
                    </ul>
                </AppBarSection>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;