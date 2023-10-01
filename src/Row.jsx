import { useEffect, useRef, useState } from 'react';
import Column from './Column';
import { calculateBoundry } from './BoundryService';

const Row = (props) => {

    const ref = useRef(0);
    const [boundry, setBoundry] = useState({});

    useEffect(() => {
        if(ref && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBoundry(calculateBoundry(ref));
        }
    }, [props]);


    const columns = props.row.columns.map((column, index) =>
        <Column key={index} column={column} />
    );

    return (
        <div className={props.row.class} ref={ref}>
          {columns}
        </div>
    );
};

export default Row;
