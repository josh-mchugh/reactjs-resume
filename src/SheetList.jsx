import  { useEffect, useRef } from 'react';
import SectionFactory from './SectionFactory';

const SheetList = (props) => {
    return <Sheet displayData={props.displayData}/>;
};

const Sheet = (props) => {
    const rows = props.displayData.rows.map((row, index) => {
        return <RenderRow key={index} row={row} />;
    });

    return (
        <section className="sheet">
          <div className={props.displayData.class}>
            { rows }
          </div>
        </section>
    );
};

const RenderRow = (props) => {
    const columns = props.row.columns.map((column, index) =>
          <RenderColumn key={index} column={column} />
    );
    return (
        <div className="row">
          {columns}
        </div>
    );
};

const RenderColumn = (props) => {
    const contentRef = useRef(0);
    let contentHeight = 0;
    let currentIndex = 0;

    useEffect(() => {
        if(contentRef && contentRef.current) {
            contentHeight = contentRef.current.clientHeight;

            if(contentHeight > 920) {
                console.log("content exceeds 920");
            }
        }
    }, [props]);

    return (
        <div className={`${props.column.class}`}>
          <div style={{height: "auto"}} ref={contentRef}>
            { props.column.sections.map((section, index) => {
                currentIndex = index;
                return <SectionFactory key={index} section={section} />;
            })
            }
          </div>
        </div>
    );
};

export default SheetList;
