import  { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { calculateBoundry } from './BoundryService';

const Column = (props) => {

    const ref = useRef(0);
    const [boundry, setBoundry] = useState({});

    useEffect(() => {
        if(ref && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBoundry(calculateBoundry(ref));
        }
    }, [props]);

    const sections = props.column.sections.map((section, index) => {
        return <Section key={index} {...section} />;
    });

    return (
        <div className={`${props.column.class}`}>
          <div style={{height: "auto"}} ref={ref}>
            { sections }
          </div>
        </div>
    );
};

export default Column;
