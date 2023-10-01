import  { useEffect, useRef, useState } from 'react';
import Row from './Row';
import { calculateBoundry } from './BoundryService';

const SheetList = (props) => {
    return <Sheet displayData={props.displayData} />;
};

const Sheet = (props) => {

    const ref = useRef({});
    const [boundry, setBoundry] = useState({});

    useEffect(() => {
        if(ref && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBoundry(calculateBoundry(rect));
        }
    }, [props]);


    const rows = props.displayData.rows.map((row, index) => {
        return <Row key={index} row={row} />;
    });

    return (
        <section className="sheet" ref={ref}>
          <div className={props.displayData.class}>
            { rows }
          </div>
        </section>
    );
};

export default SheetList;
