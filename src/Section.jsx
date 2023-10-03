import { useLayoutEffect, useRef, useState } from 'react';
import TemplateComponent from 'react-mustache-template-component';
import { defaultDimension, calculateDimension } from './DimensionService';

const Section = (props) => {

    const ref = useRef(0);
    const [dimension, setDimension] = useState(defaultDimension);

    useLayoutEffect(() => {
        if(ref && ref.current) {
            setDimension(calculateDimension(ref.current));
        }
    }, [props]);

    const processData = () => {
        if(props.name == 'skills') {
            var skills = props.data.skills.map(skill => {
                var gauge = [1, 2, 3, 4, 5].map(value => {
                    return value <= skill.proficiency ? 'block--active' : '';
                });
                return {...skill, gauge};
            });
            return {...props.data, skills};
        }
        return props.data;
    };

    console.log(`name: ${props.name}\ndimension bottom: ${dimension.bottom}`);

    return <TemplateComponent template={props.template} data={processData()} ref={ref} />;
};

export default Section;
