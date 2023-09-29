
import { useEffect, useState } from 'react';
import SheetList from './SheetList';
import data from '../resume-demo-data.json';
import layout from '../layout.json';

function App(props) {
    const initPageInfo = createDisplayData(data, layout);
    const [displayData, setDisplayData] = useState(initPageInfo);

    useEffect(() => {
        if(props.resume) {
            setDisplayData(createDisplayData(props.resume, layout));
        }
    }, [props]);

    return (
        <SheetList displayData={displayData}/>
    );
};

function createDisplayData(resume, layout) {
    let pageInfo = {};

    // Iterate over rows
    layout.rows.forEach(row => {
        let rowInfo = {};

        // Iterate over columns
        row.columns.forEach(column => {
            let columnInfo = {};
            columnInfo.class = column.class;

            // Iterate over sections
            column.sections.forEach(section => {
                let sectionInfo = {};

                // set layout inforation
                sectionInfo.name = section.name;

                if(section.template) {
                    sectionInfo.template = section.template;
                }

                // if layout information already contains data
                if(section.data) {
                    sectionInfo.data = section.data;
                }

                // if layout has resume data selectors
                if(section.resumeSelectors) {
                    let data = {};

                    // Iterate over resume selectors and get resume data
                    section.resumeSelectors.forEach(selector => {
                        data[`${selector}`] = resume[`${selector}`];
                    });

                    // map resume data to data
                    sectionInfo.data = data;
                }

                // Add to sections array or start array
                if(columnInfo.sections) {
                    columnInfo.sections = columnInfo.sections.concat(sectionInfo);
                } else {
                    columnInfo.sections = [sectionInfo];
                }
            });

            // Add to column array or start array
            if(rowInfo.columns) {
                rowInfo.columns = rowInfo.columns.concat(columnInfo);
            } else {
                rowInfo.columns = [columnInfo];
            }
        });

        // Add to row array or start array
        if(pageInfo.rows) {
            pageInfo.rows = pageInfo.rows.concat(rowInfo);
        } else {
            pageInfo.rows = [rowInfo];
        }
    });

    return pageInfo;
}

export default App;
