import SectionFactory from './SectionFactory';

const SheetList = (props) => {
    return <Sheet layout={props.layout} resume={props.resume} />;
};

const Sheet = (props) => {
    return (
        <section className="sheet">
          <div className="flex h-full font-['Roboto'] text-gray-700">
            <div className="flex-auto w-4 bg-primary-dark text-white">
              <div className="mt-14 ml-8">
                { props.layout.rows[0].columns[0].sections.map((section, index) => <SectionFactory key={index} section={section} resume={props.resume} /> )  }
              </div>
            </div>
            <div className="flex-auto w-64 my-16 px-7">
              { props.layout.rows[0].columns[1].sections.map((section, index) => <SectionFactory key={index} section={section} resume={props.resume} /> )  }
            </div>
          </div>
        </section>
    );
};

export default SheetList;
