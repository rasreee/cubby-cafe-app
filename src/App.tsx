import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { getLinkPreview } from 'link-preview-js';

async function getJSON(url: string) {
    const json = await getLinkPreview(url, {
        imagesPropertyType: 'og', // fetches only open-graph images
        headers: {
            'user-agent': 'googlebot', // fetches with googlebot crawler user agent
            'Accept-Language': 'fr-CA', // fetches site for French language
            // ...other optional HTTP request headers
        },
    }).then((data: any) => {
        console.log('ASDFIJAS;DLFIJK');
        console.log(data);
        return data;
    });
}

function App() {
    return <div className="App"></div>;
}

export default App;
