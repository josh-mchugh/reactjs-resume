import React, { useState } from 'react';
import SheetList from './SheetList';
import data from '../demo-data.json';

function App() {

    const [resume, setResume] = useState(data);

    return (
        <SheetList sheets={resume} />
    );
}

export default App;
