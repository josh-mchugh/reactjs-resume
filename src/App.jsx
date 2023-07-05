import React from 'react';
import SheetList from './SheetList';
import data from '../demo-data.json';

class App extends React.Component {

    state = {
        resume: data
    };

    render() {
        return (
            <SheetList sheets={this.state.resume} />
        );
    }
}

export default App;
