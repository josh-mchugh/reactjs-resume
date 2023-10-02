import { useLayoutEffect, useRef, useState } from 'react';
import Column from './Column';
import { defaultBoundry, calculateBoundry } from './BoundryService';

const Row = (props) => {

    const ref = useRef(0);
    const [boundry, setBoundry] = useState(defaultBoundry);

    useLayoutEffect(() => {
        if(ref && ref.current) {
            setBoundry(calculateBoundry(ref.current));
        }
    }, [props]);


    const columns = props.row.columns.map((column, index) =>
        <Column key={index} column={column} />
    );

    console.log(`name: ${props.row.class}\nboundry: ${boundry.bottom}`);

    return (
        <div className={props.row.class} ref={ref}>
          {columns}
        </div>
    );
};

export default Row;
