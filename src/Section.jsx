import { useLayoutEffect, useRef, useState } from 'react';
import TemplateComponent from 'react-mustache-template-component';
import { defaultBoundry, calculateBoundry } from './BoundryService';

const Section = (props) => {

    const ref = useRef(0);
    const [boundry, setBoundry] = useState(defaultBoundry);

    useLayoutEffect(() => {
        if(ref && ref.current) {
            setBoundry(calculateBoundry(ref.current));
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

    console.log(`name: ${props.name}\nboundry: ${boundry.bottom}`);

    return <TemplateComponent template={props.template} data={processData()} ref={ref} />;
};

export default Section;
