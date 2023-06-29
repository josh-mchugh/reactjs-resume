const CertificationSection = (props) => {
    const certificationItems = props.certifications.map((certification, index) => <Certification key={index} {...certification} />);
    return (
        <div>
          {certificationItems}
        </div>
    );
};

const Certification = (props) => {
    return (
        <div className="flex flex-col mt-6">
          <div className="flex">
            <div className="flex-auto w-full">
              <div className="text-xs">
                <div className="flex justify-between">
                  <div className="font-bold text-accent">{props.title}</div>
                  <div>{props.year}</div>
                </div>
                <div className="flex justify-between">
                  <div>{props.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CertificationSection;
