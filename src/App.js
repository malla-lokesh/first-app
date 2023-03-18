import React from 'react';
import Form from './components/Form';

function App() {
    return (
        <div className="container bgColor">
            <div className="row">
				<div className="col-sm-2 col-lg-3"></div>
                <div className="col-sm-8 col-lg-6 pt-4">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default App;
