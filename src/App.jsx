import React from 'react';
import CertificationSection from './CertificationSection';
import InterestSection from './InterestSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';

class App extends React.Component {

    state = {
        resume: []
    };

    componentDidMount() {
        this.loadResume();
    }

    loadResume = () => {
        fetch("/demo-data.json")
            .then(response => response.json())
            .then(json => this.setState({ resume: json }));
    }

    render() {
        return (
            <SheetList sheets={this.state.resume} />
        );
    }
}

const SheetList = (props) => {
    return props.sheets.map(
        sheet => <Sheet key={sheet.page} {...sheet} />
    );
};

const Sheet = (props) => {
    return (
        <section className="sheet h-296mm">
          <div className="flex h-full font-['Roboto'] text-gray-700">
            <div className="flex-auto w-4 bg-primary-dark text-white">
              <div className="mt-14 ml-8">
                <SideContentList sideContent={props.sideContent} />
              </div>
            </div>
            <div className="flex-auto w-64 my-16 px-7">
              <MainContentList content={props.content} />
            </div>
          </div>
        </section>
    );
};

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
}

const HeaderSection = (props) => {
    return (
        <div>
          <div className={props.margins}>
            <div className="flex">
              <div className="flex-auto font-bold whitespace-nowrap">{props.title}</div>
              <div className="flex-auto w-full ml-2">
                <div className="flex flex-col">
                  <div className={`h-0 mt-3 border-b border-${props.color}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

const NameSection = (props) => {
    return (
        <div>
          <div className="font-bold text-3xl">{props.name}</div>
          <div className="text-sm tracking-wider">{props.title}</div>
        </div>
    );
};

const ObjectiveSection = (props) => {
    return (
        <div>
          <div className="flex">
            <div className="mt-6 ml-4 pr-4 text-xs">{props.objective}</div>
          </div>
        </div>
    );
};

const ContactSection = (props) => {
    return (
        <div>
          <div className="flex mt-4 ml-4">
            <ul className="list-none text-sm">
              <li>
                <i className="fa-solid fa-phone text-accent"></i>
                <span className="ml-2">{props.phone}</span>
              </li>
              <li className="mt-2">
                <i className="fa-solid fa-envelope text-accent"></i>
                <a className="ml-2" href={`mailto:${props.email}`}>{props.email}</a>
              </li>
              <li className="mt-2">
                <i className="fa-solid fa-location-dot text-accent"></i>
                <span className="ml-2">{props.location}</span>
              </li>
            </ul>
          </div>
        </div>
    );
};

const SocialSection = (props) => {
    const socialItems = props.data.map((item, index) => <Social key={index} {...item} />);
    return (
        <div>
          <div className="flex mt-1 ml-4">
            <ul className="list-none text-sm">
              {socialItems}
            </ul>
          </div>
        </div>
    );
};

const Social = (props) => {
    return (
        <li className="mt-3">
          <div>
            <i className={`${props.icon} text-accent`}></i>
            <span className="ml-2">{props.name}:</span>
          </div>
          <div>
            <a className="text-xs" href={props.url}>{props.url}</a>
          </div>
        </li>
    );
};

export default App;
