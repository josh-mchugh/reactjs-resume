const HeaderSection = (props) => {
    return (
        <div>
          <div className={props.margins}>
            <div className="flex">
              <div className="flex-auto font-bold whitespace-nowrap">{props.title}</div>
              <div className="flex-auto w-full ml-2">
                <div className="flex flex-col">
                  <div className={`h-0 mt-3 border-b border-${props.color}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default HeaderSection;
