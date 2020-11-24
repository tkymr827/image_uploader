import React from 'react';
import { render } from 'react-dom';

const Test = () => {
    return <h1>test</h1>;
};

if (document.getElementById('test')) {
    render(<Test />, document.getElementById('test'));
}
