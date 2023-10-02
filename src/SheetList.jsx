import  { useLayoutEffect, useRef, useState } from 'react';
import Row from './Row';
import { defaultBoundry, calculateBoundry } from './BoundryService';

const SheetList = (props) => {
    return <Sheet displayData={props.displayData} />;
};

const Sheet = (props) => {

    const ref = useRef(0);
    const [boundry, setBoundry] = useState(defaultBoundry);

    useLayoutEffect(() => {
        if(ref && ref.current) {
            setBoundry(calculateBoundry(ref.current));
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
