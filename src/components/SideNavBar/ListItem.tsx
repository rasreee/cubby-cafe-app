import { findAllByTitle } from '@testing-library/react';
import React from 'react';

export class ListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
        };
    }
    render() {
        const { title: string } = this.state;

        return <div className="ListItem">{title}</div>;
    }
}

export default ListItem;
