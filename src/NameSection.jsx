const NameSection = (props) => {
    return (
        <div>
          <div className="font-bold text-3xl">{props.name}</div>
          <div className="text-sm tracking-wider">{props.title}</div>
        </div>
    );
};

export default NameSection;
