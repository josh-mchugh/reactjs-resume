import React, { useState } from 'react';
import SheetList from './SheetList';
import data from '../resume-demo-data.json';
import layoutData from '../layout.json';

function App() {

    const [resume, setResume] = useState(data);
    const [layout, setLayout] = useState(layoutData);

    return (
        <SheetList layout={layout} resume={resume}/>
    );
}

export default App;
