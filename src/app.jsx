import React from 'react';

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

const ExperienceSection = (props) => {
    const experiences = props.experiences.map((content, index) => <Experience key={index} {...content} />);
    return (
        <div>
          <div className="[&>*:first-child]:mt-4">
            {experiences}
          </div>
        </div>
    );
};

const Experience = (props) => {
    const descriptions = props.descriptions.map((description, index) => <ExperienceDescription key={index} description={description} />);
    return (
        <div className="flex flex-col w-full mt-5 text-xs">
          <div className="flex justify-between">
            <div className="font-bold text-accent">{props.title}</div>
            <div>{props.duration}</div>
          </div>
          <div className="flex justify-between">
            <div>{props.name}</div>
            <div>{props.location}</div>
          </div>
          <ul className="fa-ul mt-3 ml-5">
            {descriptions}
          </ul>
          <TechnologyList technologies={props.technologies} />
        </div>
    );
};

const ExperienceDescription = (props) => {
    return (
        <li className="mb-1">
          <span className="fa-li text-3xs text-primary-dark">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="text-xs">{props.description}</span>
        </li>
    );
};

const TechnologyList = (props) => {
    const technologyItems = props.technologies.map((technology, index) => <TechnologyListItem key={index} technology={technology} />);
    return (
        <div className="flex flex-wrap mt-1 ml-4">
          {technologyItems}
        </div>
    );
};

const TechnologyListItem = (props) => {
    return (
        <div className="mt-1 mr-1">
          <div className="rounded-md py-0.5 px-1.5 bg-primary-dark text-white">{props.technology}</div>
        </div>
    );
};

const SkillSection = (props) => {
    const skillListItems = props.skills.map((skill, index) => <SkillListItem key={index} {...skill} />);
    return (
        <div>
          <div className="grid grid-cols-1 gap-y-3 mt-6 mx-4 text-xs">
            {skillListItems}
          </div>
        </div>
    );
};


const SkillListItem = (props) => {
    const skillValueItems = props.items.map((item, index) => <SkillValueItem key={index} showGauge={props.showGauge} {...item} />);
    return (
        <div>
          <div className="mb-2 font-semibold underline">{props.name}</div>
          <div className="grid grid-cols-2 gap-x-16 place-content-between">
            {skillValueItems}
          </div>
        </div>
    );
};

const SkillValueItem = (props) => {
    return (
        <div className={`grid ${props.showGauge ? 'grid-cols-2' : ''} place-content-between`}>
          <div>{props.name}</div>
          {props.showGauge && <SkillValueGaugeList value={props.value} />}
        </div>
    );
};

const SkillValueGaugeList = (props) => {
    const gaugeListItems = [1,2,3,4,5].map((value, index) => <SkillValueGaugeListItem key={index} highlighted={props.value >= value} />);
    return (
        <div className="grid grid-cols-5 w-24 content-center">
          {gaugeListItems}
        </div>
    );
};

const SkillValueGaugeListItem = (props) => {
    return (
        <div className={`w-2 h-2 ${props.highlighted ? 'bg-accent' : 'bg-gray-300'}`}></div>
    );
};

const CertificationSection = (props) => {
    const certificationItems = props.certifications.map((certification, index) => <Certification key={index} {...certification} />);
    return (
        <div>
          {certificationItems}
        </div>
    );
};

const Certification = (props) => {
    return (
        <div className="flex flex-col mt-6">
          <div className="flex">
            <div className="flex-auto w-full">
              <div className="text-xs">
                <div className="flex justify-between">
                  <div className="font-bold text-accent">{props.title}</div>
                  <div>{props.year}</div>
                </div>
                <div className="flex justify-between">
                  <div>{props.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

const InterestSection = (props) => {
    const interests = props.interests.map((description, index) => <Interest key={index} description={description} />);
    return (
        <div>
          <ul className="fa-ul mt-3 ml-5 text-sm">
            {interests}
          </ul>
        </div>
    );
};

const Interest = (props) => {
    return (
        <li className="mb-1">
          <span className="fa-li text-3xs text-primary-dark">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="text-xs">{props.description}</span>
        </li>
    );
};

const ProjectSection = (props) => {
    const projects = props.projects.map((project, index) => <Project key={index} {...project} />);
    return (
        <div>
          <div className="[&>*:first-child]:mt-4">
            {projects}
          </div>
        </div>
    );
};

const Project = (props) => {
    return (
        <div className="flex flex-col w-full mt-5 text-xs">
          <div className="font-bold text-accent mr-2">{props.name}</div>
          <div className="mt-2 ml-1">{props.description}</div>
          <TechnologyList technologies={props.technologies} />
        </div>
    );
};

export default App;
