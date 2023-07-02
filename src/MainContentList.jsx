import CertificationSection from './CertificationSection';
import ExperienceSection from './ExperienceSection';
import HeaderSection from './HeaderSection';
import InterestSection from './InterestSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';

const MainContentList = (props) => {
    return props.content.map((content, index) => {
        switch(content.templateId) {
        case 'headerTemplate':
            return <HeaderSection key={index} {...content.data} />;
        case 'experienceTemplate':
            return <ExperienceSection key={index} {...content.data} />;
        case 'skillsTemplate':
            return <SkillSection key={index} {...content.data} />;
        case 'educationTemplate':
            return <CertificationSection key={index} {...content.data} />;
        case 'interestsTemplate':
            return <InterestSection key={index} {...content.data} />;
        case 'projectsTemplate':
            return <ProjectSection key={index} {...content.data} />;
        default:
            return <div key={index}></div>;
        }
    });
};

export default MainContentList;
