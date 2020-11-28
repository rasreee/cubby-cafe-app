import React from 'react';
import { AppContext } from './AppContext';
import { SideNavbar } from './components/index';
import { EmptyObject } from './shared/custom-types';

// import { getLinkPreview } from 'link-preview-js';

// async function getJSON(url: string) {
//     return await getLinkPreview(url, {
//         imagesPropertyType: 'og', // fetches only open-graph images
//         headers: {
//             'user-agent': 'googlebot', // fetches with googlebot crawler user agent
//             'Accept-Language': 'fr-CA', // fetches site for French language
//             // ...other optional HTTP request headers
//         },
//     }).then((data: any) => {
//         console.log('ASDFIJAS;DLFIJK');
//         console.log(data);
//         return data;
//     });
// }

// interface appProps { }

// eslint-disable-next-line prettier/prettier
const App: React.FC<EmptyObject> = ({ }) => {
    return (
        <AppContext.Provider
            value={{
                lang: 'en',
                authenticated: true, // TODO: remove static value
                theme: 'light',
            }}
        >
            <SideNavbar />
        </AppContext.Provider>
    );
};

export default App;
