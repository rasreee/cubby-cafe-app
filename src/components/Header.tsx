import React from 'react';
import { AppContext } from '../AppContext';

// TODO: delete after implementing Side Bar
function Header(): React.ReactElement {
    return (
        <AppContext.Consumer>
            {({ authenticated }) => {
                if (authenticated) {
                    return <h1>Logged in!</h1>;
                }
                return <h1>You need to sign in</h1>;
            }}
        </AppContext.Consumer>
    );
}

export default Header;
