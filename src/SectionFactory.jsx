
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

const SectionFactory = (props) => {
    switch(props.section.template) {
    case 'contact':
        return <ContactSection {...props.section.data} />;
    case 'certifications':
        return <CertificationSection {...props.section.data} />;
    case 'experiences':
        return <ExperienceSection {...props.section.data} />;
    case 'header':
        return <HeaderSection {...props.section.data} />;
    case 'interests':
        return <InterestSection {...props.section.data} />;
    case 'name':
        return <NameSection {...props.section.data} />;
    case 'projects':
        return <ProjectSection {...props.section.data} />;
    case 'summary':
        return <SummarySection {...props.section.data} />;
    case 'skills':
        return <SkillSection {...props.section.data} />;
    case 'social':
        return <SocialSection {...props.section.data} />;
    default:
        return <div></div>;
    }
};

export default SectionFactory;
