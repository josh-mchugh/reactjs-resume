import  { useLayoutEffect, useRef, useState } from 'react';
import Section from './Section';
import { defaultBoundry, calculateBoundry } from './BoundryService';

const Column = (props) => {

    const containerRef = useRef(0);
    const [containerBoundry, setContainerBoundry] = useState(defaultBoundry);
    const contentRef = useRef(0);
    const [contentBoundry, setContentBoundry] = useState(defaultBoundry);

    useLayoutEffect(() => {
        if(containerRef && containerRef.current) {
            setContainerBoundry(calculateBoundry(containerRef.current));
        }
        if(contentRef && contentRef.current) {
            setContentBoundry(calculateBoundry(contentRef.current));
        }
    }, [props]);

    const sections = props.column.sections.map((section, index) => {
        return <Section key={index} {...section} />;
    });

    console.log(`name: ${props.column.class}`);
    console.log("Container boundry: ");
    console.log(containerBoundry);
    console.log("Content boundry: ");
    console.log(contentBoundry);

    return (
        <div className={`${props.column.class}`} ref={containerRef}>
          <div style={{height: "auto"}} ref={contentRef}>
            { sections }
          </div>
        </div>
    );
};

export default Column;
