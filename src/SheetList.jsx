import Row from './Row';

const SheetList = (props) => {
    return <Sheet displayData={props.displayData} />;
};

const Sheet = (props) => {
    const rows = props.displayData.rows.map((row, index) => {
        return <Row key={index} row={row} />;
    });

    return (
        <section className="sheet">
          <div className={props.displayData.class}>
            { rows }
          </div>
        </section>
    );
};

export default SheetList;
