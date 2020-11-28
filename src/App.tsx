import React from 'react';
import { AppContext } from './AppContext';
import { SideNavBar } from './components/index';

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

function App(): React.ReactElement {
    return (
        <AppContext.Provider
            value={{
                lang: 'en',
                authenticated: true, // TODO: remove static value
                theme: 'light',
            }}
        >
            <SideNavBar />
        </AppContext.Provider>
    );
}

export default App;
