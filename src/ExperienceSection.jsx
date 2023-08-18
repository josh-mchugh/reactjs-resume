import SkillList from './SkillList';

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
          <SkillList skills={props.skills} />
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

export default ExperienceSection;
