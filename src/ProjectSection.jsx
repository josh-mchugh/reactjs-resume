import TechnologyList from './TechnologyList';

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

export default ProjectSection;
