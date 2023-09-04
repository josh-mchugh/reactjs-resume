import  { useEffect, useRef, useState } from 'react';
import SectionFactory from './SectionFactory';

const SheetList = (props) => {

    const [pageBreakIndexes, setPageBreakIndexes] = useState(() => new Set());

    const pageBreakNotifier = row => column => section => {
        console.log("Page break notifier called: " + [row, column, section].join(","));
        setPageBreakIndexes((prev) => {
            const next = new Set(prev);
            next.add([row, column, section].join(","));
            return next;
        });
    };

    // Create initial sheets array
    let sheets = [];

    // Create initial rows array
    let rows = [];

    // Iterate over rows
    for(let i = 0; i < props.displayData.rows.length; i++) {
        const row = props.displayData.rows[i];

        // Iterate over columns
        let columns = [];
        for(let j = 0; j < row.columns.length; j++) {
            const column = row.columns[j];

            // Iterate over sections
            let sections = [];
            for(let k = 0; k < column.sections.length; k++) {
                const section = column.sections[k];
                
                if(Array.from(pageBreakIndexes).includes([i,j,k].join(","))) {
                    // Add current rendering process to sheets
                    const renderColumn = (<RenderColumn key={j} classes={column.class} children={sections} pageBreakNotifier={pageBreakNotifier(i)(j)}/>);
                    columns = columns.concat(renderColumn);

                    const renderRow = ( <RenderRow key={i} children={columns}/> );
                    rows = rows.concat(renderRow);

                    const sheet = (<Sheet children={rows}/>);
                    sheets = sheets.concat(sheet);

                    // Reset sections
                    sections = [];
                    columns = [];

                    // Reset columns
                    row.columns.forEach((column, index) => {
                        if(index < j) {
                            const renderColumn = (<RenderColumn key={index} classes={column.class} pageBreakNotifier={pageBreakNotifier(i)(index)}/>);
                            columns = columns.concat(renderColumn);
                        }
                    });

                    // Reest Rows
                    rows = [...Array(i).keys()].map(index => {
                        return (<RenderRow key={index} children={columns}/>);
                    });
                }

                const renderSection = (<SectionFactory key={k} section={section} />);
                sections = sections.concat(renderSection);
            }

            const renderColumn = (<RenderColumn key={j} classes={column.class} children={sections} pageBreakNotifier={pageBreakNotifier(i)(j)}/>);
            columns = columns.concat(renderColumn);
        }

        const renderRow = ( <RenderRow key={i} children={columns} />);
        rows = rows.concat(renderRow);
    }

    sheets = sheets.concat( (<Sheet children={rows} />) );

    return sheets;
};

const Sheet = (props) => {

    return (
        <section className="sheet">
          <div className="flex h-full font-['Roboto'] text-gray-700">
            { props.children }
          </div>
        </section>
    );
};

const RenderRow = (props) => {
    return (
        <>
          { props.children }
        </>
    );
};

const RenderColumn = (props) => {
    const contentRef = useRef(0);
    let contentHeight = 0;

    useEffect(() => {
        if(contentRef && contentRef.current) {
            contentHeight = contentRef.current.clientHeight;

            if(contentHeight > 920) {
                console.log("content exceeds 920");
                props.pageBreakNotifier(props.children.length - 1);
            }
        }
    }, [props]);

    return (
        <div className={`${props.classes}`}>
          <div style={{height: "auto"}} ref={contentRef}>
            { props.children }
          </div>
        </div>
    );
};

export default SheetList;
