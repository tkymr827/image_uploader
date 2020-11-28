import React from 'react';
import { render } from 'react-dom';
import { NavMenu } from './modules/nav';
import { ShowPictures } from './modules/show_pictures';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <NavMenu />
            <main>
                <ShowPictures />
            </main>
        </>
    );
};

if (document.getElementById('app')) {
    render(<App />, document.getElementById('app'));
}
