
class Resume extends React.Component {

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

class SheetList extends React.Component {
    render() {
        return this.props.sheets.map(
            sheet => <Sheet key={sheet.page} {...sheet} />
        );
    }
}

class Sheet extends React.Component {
    render() {
        return (
            <section className="sheet h-297mm">
              <div className="flex h-full font-['Roboto'] text-gray-700">
                <div className="flex-auto w-4 bg-primary-dark text-white">
                  <div className="mt-14 ml-8">
                    <SideContentList sideContent={this.props.sideContent} />
                  </div>
                </div>
                <div className="flex-auto w-64 my-16 px-7">
                  <MainContentList content={this.props.content} />
                </div>
              </div>
            </section>
        );
    }
}

class SideContentList extends React.Component {
    render() {
        return this.props.sideContent.map((content, index) => {
            if(content.templateId === 'nameTemplate') {
                return <NameSection key={index} {...content.data} />
            }
            if(content.templateId === 'headerTemplate') {
                return <HeaderSection key={index} {...content.data} />
            }
            if(content.templateId === 'objectiveTemplate') {
                return <ObjectiveSection key={index} {...content.data} />
            }
            if(content.templateId === 'contactTemplate') {
                return <ContactSection key={index} {...content.data} />
            }
            if(content.templateId === 'socialTemplate') {
                return <SocialSection key={index} data={content.data} />
            }
            return <div key={index}></div>
        });
    }
}

class MainContentList extends React.Component {
    render() {
        return this.props.content.map((content, index) => {
            if(content.templateId === 'headerTemplate') {
                return <HeaderSection key={index} {...content.data} />
            }
            if(content.templateId === 'experienceTemplate') {
                return <ExperienceSection key={index} {...content.data} />
            }
            if(content.templateId === 'skillsTemplate') {
                return <SkillSection key={index} {...content.data} />
            }
            if(content.templateId === 'educationTemplate') {
                return <CertificationSection key={index} {...content.data} />
            }
            if(content.templateId === 'interestsTemplate') {
                return <InterestSection key={index} {...content.data} />
            }
            if(content.templateId === 'projectsTemplate') {
                return <ProjectSection key={index} {...content.data} />
            }
            return <div key={index}></div>
        });
    }
}

class HeaderSection extends React.Component {
    render() {
        return (
            <div>
              <div className={this.props.margins}>
                <div className="flex">
                  <div className="flex-auto font-bold whitespace-nowrap">{this.props.title}</div>
                  <div className="flex-auto w-full ml-2">
                    <div className="flex flex-col">
                      <div className={`h-0 mt-3 border-b border-${this.props.color}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class NameSection extends React.Component {
    render() {
        return (
            <div>
              <div className="font-bold text-3xl">{this.props.name}</div>
              <div className="text-sm tracking-wider">{this.props.title}</div>
            </div>
        );
    }
}

class ObjectiveSection extends React.Component {
    render() {
        return (
            <div>
              <div className="flex">
                <div className="mt-6 ml-4 pr-4 text-xs">{this.props.objective}</div>
              </div>
            </div>
        );
    }
}

class ContactSection extends React.Component {
    render() {
        return (
            <div>
              <div className="flex mt-4 ml-4">
                <ul className="list-none text-sm">
                  <li>
                    <i className="fa-solid fa-phone text-accent"></i>
                    <span className="ml-2">{this.props.phone}</span>
                  </li>
                  <li className="mt-2">
                    <i className="fa-solid fa-envelope text-accent"></i>
                    <a className="ml-2" href={`mailto:${this.props.email}`}>{this.props.email}</a>
                  </li>
                  <li className="mt-2">
                    <i className="fa-solid fa-location-dot text-accent"></i>
                    <span className="ml-2">{this.props.location}</span>
                  </li>
                </ul>
              </div>
            </div>
        );
    }
}

class SocialSection extends React.Component {
    render() {
        const socialItems = this.props.data.map((item, index) => <Social key={index} {...item} />);
        return (
            <div>
              <div className="flex mt-1 ml-4">
                <ul className="list-none text-sm">
                  {socialItems}
                </ul>
              </div>
            </div>
        );
    }
}

class Social extends React.Component {
    render() {
        return (
            <li className="mt-3">
              <div>
                <i className={`${this.props.icon} text-accent`}></i>
                <span className="ml-2">{this.props.name}:</span>
              </div>
              <div>
                <a className="text-xs" href={this.props.url}>{this.props.url}</a>
              </div>
            </li>
        );
    }
}

class ExperienceSection extends React.Component {
    render() {
        const experiences = this.props.experiences.map((content, index) => <Experience key={index} {...content} />);
        return (
            <div>
              <div className="[&>*:first-child]:mt-4">
                {experiences}
              </div>
            </div>
        );
    }
}

class Experience extends React.Component {
    render() {
        const descriptions = this.props.descriptions.map((description, index) => <ExperienceDescription key={index} description={description} />);
        return (
            <div className="flex flex-col w-full mt-5 text-xs">
              <div className="flex justify-between">
                <div className="font-bold text-accent">{this.props.title}</div>
                <div>{this.props.duration}</div>
              </div>
              <div className="flex justify-between">
                <div>{this.props.name}</div>
                <div>{this.props.location}</div>
              </div>
              <ul className="fa-ul mt-3 ml-5">
                {descriptions}
              </ul>
              <TechnologyList technologies={this.props.technologies} />
            </div>
        );
    }
}

class ExperienceDescription extends React.Component {
    render() {
        return (
            <li className="mb-1">
              <span className="fa-li text-3xs text-primary-dark">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="text-xs">{this.props.description}</span>
            </li>
        );
    }
}

class TechnologyList extends React.Component {
    render() {
        const technologyItems = this.props.technologies.map((technology, index) => <TechnologyListItem key={index} technology={technology} />);
        return (
            <div className="flex flex-wrap mt-1 ml-4">
              {technologyItems}
            </div>
        );
    }
}

class TechnologyListItem extends React.Component {
    render() {
        return (
            <div className="mt-1 mr-1">
              <div className="rounded-md py-0.5 px-1.5 bg-primary-dark text-white">{this.props.technology}</div>
            </div>
        );
    }
}

class SkillSection extends React.Component {
    render() {
        const skillListItems = this.props.skills.map((skill, index) => <SkillListItem key={index} {...skill} />);
        return (
            <div>
              <div className="grid grid-cols-1 gap-y-3 mt-6 mx-4 text-xs">
                {skillListItems}
              </div>
            </div>
        );
    }
}


class SkillListItem extends React.Component {
    render() {
        const skillValueItems = this.props.items.map((item, index) => <SkillValueItem key={index} showGauge={this.props.showGauge} {...item} />);
        return (
            <div>
              <div className="mb-2 font-semibold underline">{this.props.name}</div>
              <div className="grid grid-cols-2 gap-x-16 place-content-between">
                {skillValueItems}
              </div>
            </div>
        );
    }
}

class SkillValueItem extends React.Component {
    render() {
        return (
            <div className={`grid ${this.props.showGauge ? 'grid-cols-2' : ''} place-content-between`}>
              <div>{this.props.name}</div>
              {this.props.showGauge && <SkillValueGaugeList value={this.props.value} />}
            </div>
        );
    }
}

class SkillValueGaugeList extends React.Component {
    render() {;
        const gaugeListItems = [1,2,3,4,5].map((value, index) => <SkillValueGaugeListItem key={index} highlighted={this.props.value >= value} />);
        return (
            <div className="grid grid-cols-5 w-24 content-center">
              {gaugeListItems}
            </div>
        );
    }
}

class SkillValueGaugeListItem extends React.Component {
    render() {
        return (
            <div className={`w-2 h-2 ${this.props.highlighted ? 'bg-accent' : 'bg-gray-300'}`}></div>
        );
    }
}

class CertificationSection extends React.Component {
    render() {
        const certificationItems = this.props.certifications.map((certification, index) => <Certification key={index} {...certification} />);
        return (
            <div>
              {certificationItems}
            </div>
        );
    }
}

class Certification extends React.Component {
    render() {
        return (
            <div className="flex flex-col mt-6">
              <div className="flex">
                <div className="flex-auto w-full">
                  <div className="text-xs">
                    <div className="flex justify-between">
                      <div className="font-bold text-accent">{this.props.title}</div>
                      <div>{this.props.year}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>{this.props.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class InterestSection extends React.Component {
    render() {
        const interests = this.props.interests.map((description, index) => <Interest key={index} description={description} />);
        return (
            <div>
              <ul className="fa-ul mt-3 ml-5 text-sm">
                {interests}
              </ul>
            </div>
        );
    }
}

class Interest extends React.Component {
    render() {
        return (
            <li className="mb-1">
              <span className="fa-li text-3xs text-primary-dark">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="text-xs">{this.props.description}</span>
            </li>
        );
    }
}

class ProjectSection extends React.Component {
    render() {
        const projects = this.props.projects.map((project, index) => <Project key={index} {...project} />);
        return (
            <div>
              <div className="[&>*:first-child]:mt-4">
                {projects}
              </div>
            </div>
        );
    }
}

class Project extends React.Component {
    render() {
        return (
            <div className="flex flex-col w-full mt-5 text-xs">
              <div className="font-bold text-accent mr-2">{this.props.name}</div>
              <div className="mt-2 ml-1">{this.props.description}</div>
              <TechnologyList technologies={this.props.technologies} />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(<Resume />);
