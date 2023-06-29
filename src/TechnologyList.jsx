
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

export default TechnologyList;
