import  { useLayoutEffect, useRef, useState } from 'react';
import Section from './Section';
import { defaultDimension, calculateDimension } from './DimensionService';

const Column = (props) => {

    const containerRef = useRef(0);
    const [containerDimension, setContainerDimension] = useState(defaultDimension);
    const contentRef = useRef(0);
    const [contentDimension, setContentDimension] = useState(defaultDimension);

    useLayoutEffect(() => {
        if(containerRef && containerRef.current) {
            setContainerDimension(calculateDimension(containerRef.current));
        }
        if(contentRef && contentRef.current) {
            setContentDimension(calculateDimension(contentRef.current));
        }
    }, [props]);

    const sections = props.column.sections.map((section, index) => {
        return <Section key={index} {...section} />;
    });

    console.log(`name: ${props.column.class}`);
    console.log("Container dimension: ");
    console.log(containerDimension);
    console.log("Content dimesnion: ");
    console.log(contentDimension);

    return (
        <div className={`${props.column.class}`} ref={containerRef}>
          <div style={{height: "auto"}} ref={contentRef}>
            { sections }
          </div>
        </div>
    );
};

export default Column;
