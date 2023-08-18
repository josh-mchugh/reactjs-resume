
const SkillList = (props) => {
    const technologyItems = props.skills.map((skill, index) => <Skill key={index} skill={skill} />);
    return (
        <div className="flex flex-wrap mt-1 ml-4">
          {technologyItems}
        </div>
    );
};

const Skill = (props) => {
    return (
        <div className="mt-1 mr-1">
          <div className="rounded-md py-0.5 px-1.5 bg-primary-dark text-white">{props.skill}</div>
        </div>
    );
};

export default SkillList;
