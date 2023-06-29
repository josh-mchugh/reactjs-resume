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

export default SkillSection;
