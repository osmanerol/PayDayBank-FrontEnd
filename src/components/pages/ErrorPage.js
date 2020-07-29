import React from 'react';
import '../../styles/main.css';

const ErrorPage = props => {
    return (
        <div id='errorContainer'>
            <h1 className='text-center'>404</h1>
            <p id='errorText' className='text-muted'>The site configured at this address does not contain the requested file.</p>
        </div>
    );
};

export default ErrorPage;