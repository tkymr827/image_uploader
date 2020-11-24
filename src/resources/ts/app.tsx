import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return <h1>sample</h1>;
};

if (document.getElementById('app')) {
    render(<App />, document.getElementById('app'));
}
