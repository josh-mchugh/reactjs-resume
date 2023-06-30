const ContactSection = (props) => {
    return (
        <div>
          <div className="flex mt-4 ml-4">
            <ul className="list-none text-sm">
              <li>
                <i className="fa-solid fa-phone text-accent"></i>
                <span className="ml-2">{props.phone}</span>
              </li>
              <li className="mt-2">
                <i className="fa-solid fa-envelope text-accent"></i>
                <a className="ml-2" href={`mailto:${props.email}`}>{props.email}</a>
              </li>
              <li className="mt-2">
                <i className="fa-solid fa-location-dot text-accent"></i>
                <span className="ml-2">{props.location}</span>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default ContactSection;
