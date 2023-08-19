import React, { useEffect, useState } from 'react';
import SheetList from './SheetList';
import data from '../resume-demo-data.json';
import layoutData from '../layout.json';

function App(props) {

    const [resume, setResume] = useState(data);
    const [layout, setLayout] = useState(layoutData);

    useEffect(() => {
        setResume(updateName(props, resume));
    }, [props]);

    return (
        <SheetList layout={layout} resume={resume}/>
    );
}

function updateName(props, resume) {
    if(props.resume) {
        return {
            ...resume,
            personal: {
                ...resume.personal,
                name: props.resume
            }
        };
    }
    return resume;
}

export default App;
