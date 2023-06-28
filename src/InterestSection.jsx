
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

export default InterestSection;

