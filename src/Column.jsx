import  { useEffect, useRef } from 'react';
import Section from './Section';

const Column = (props) => {
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
                return <Section key={index} {...section} />;
            })
            }
          </div>
        </div>
    );
};

export default Column;
