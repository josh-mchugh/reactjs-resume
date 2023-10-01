import { useEffect, useRef, useState } from 'react';
import TemplateComponent from 'react-mustache-template-component';
import { calculateBoundry } from './BoundryService';

const Section = (props) => {

    const ref = useRef({});
    const [boundry, setBoundry] = useState({});

    useEffect(() => {
        if(ref && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBoundry(calculateBoundry(rect));
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
