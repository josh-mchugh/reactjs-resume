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

export default SocialSection;
