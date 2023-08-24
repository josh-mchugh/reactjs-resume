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
        return <ContactSection {...props.resume.personal.contact} />;
    case 'certifications':
        return <CertificationSection certifications={props.resume.certifications} />;
    case 'experiences':
        return <ExperienceSection experiences={props.resume.experiences} />;
    case 'header':
        return <HeaderSection {...props.section.data} />;
    case 'interests':
        return <InterestSection interests={props.resume.interests} />;
    case 'name':
        return <NameSection {...props.resume.personal} />;
    case 'projects':
        return <ProjectSection projects={props.resume.projects} />;
    case 'summary':
        return <SummarySection {...props.resume.personal} />;
    case 'skills':
        return <SkillSection skills={props.resume.skills} />;
    case 'social':
        return <SocialSection data={props.resume.personal.socials} />;
    default:
        return <div key={props.key}></div>;
    }
};

export default SectionFactory;
