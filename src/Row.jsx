import Column from './Column';

const Row = (props) => {
    const columns = props.row.columns.map((column, index) =>
        <Column key={index} column={column} />
    );
    return (
        <div className="row">
          {columns}
        </div>
    );
};

export default Row;
