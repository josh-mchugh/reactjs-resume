const SummarySection = (props) => {
    return (
        <div>
          <div className="flex">
            <div className="mt-6 ml-4 pr-4 text-xs">{props.summary}</div>
          </div>
        </div>
    );
};

export default SummarySection;
