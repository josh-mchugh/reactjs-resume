import TemplateComponent from 'react-mustache-template-component';

const Section = (props) => {

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

    return <TemplateComponent template={props.template} data={processData()} />;
};

export default Section;
