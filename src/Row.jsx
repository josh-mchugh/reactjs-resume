import { useLayoutEffect, useRef, useState } from 'react';
import Column from './Column';
import { defaultDimension, calculateDimension } from './DimensionService';

const Row = (props) => {

    const ref = useRef(0);
    const [dimension, setDimension] = useState(defaultDimension);

    useLayoutEffect(() => {
        if(ref && ref.current) {
            setDimension(calculateDimension(ref.current));
        }
    }, [props]);


    const columns = props.row.columns.map((column, index) =>
        <Column key={index} column={column} />
    );

    console.log(`name: ${props.row.class}\ndimension bottom: ${dimension.bottom}`);

    return (
        <div className={props.row.class} ref={ref}>
          {columns}
        </div>
    );
};

export default Row;
