import ContactSection from './ContactSection';
import HeaderSection from './HeaderSection';
import NameSection from './NameSection';
import ObjectiveSection from './ObjectiveSection';
import SocialSection from './SocialSection';

const SideContentList = (props) => {
    return props.sideContent.map((content, index) => {
        switch(content.templateId) {
        case 'nameTemplate':
            return <NameSection key={index} {...content.data} />;
        case 'headerTemplate':
            return <HeaderSection key={index} {...content.data} />;
        case 'objectiveTemplate':
            return <ObjectiveSection key={index} {...content.data} />;
        case 'contactTemplate':
            return <ContactSection key={index} {...content.data} />;
        case 'socialTemplate':
            return <SocialSection key={index} data={content.data} />;
        default:
            return <div key={index}></div>;
        }
    });
};

export default SideContentList;
