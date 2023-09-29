

import CertificationSection from './CertificationSection';
import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';
import HeaderSection from './HeaderSection';
import NameSection from './NameSection';
import InterestSection from './InterestSection';
import SummarySection from './SummarySection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import SocialSection from './SocialSection';
import TemplateComponent from 'react-mustache-template-component';

const SectionFactory = (props) => {
    switch(props.section.name) {
    case 'contact':
        return <TemplateComponent template={props.section.template} data={props.section.data} />;
    case 'certifications':
        return <CertificationSection {...props.section.data} />;
    case 'experiences':
        return <TemplateComponent template={props.section.template} data={props.section.data} />;
    case 'header':
        return <HeaderSection {...props.section.data} />;
    case 'interests':
        return <InterestSection {...props.section.data} />;
    case 'name':
        return <TemplateComponent template={props.section.template} data={props.section.data} />;
    case 'projects':
        return <ProjectSection {...props.section.data} />;
    case 'summary':
        return <TemplateComponent template={props.section.template} data={props.section.data} />;
    case 'skills':
        return <TemplateComponent template={props.section.template} data={props.section.data} />;
    case 'social':
        return <TemplateComponent template={props.section.template} data={props.section.data} />;
    default:
        return <div></div>;
    }
};

export default SectionFactory;
