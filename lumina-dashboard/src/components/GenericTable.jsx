import PropTypes from "prop-types";

import GenericRow from "./GenericRow";

function GenericTable({ title, columns, data }) {
  return (
    <div className="">
      <h1 className="mt-3 h5 font-weight-light text-gray-800">{title}</h1>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr className="bg-darker text-white">
                  {columns.map((column, index) => (
                    <th key={index}>{column.header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, rowIndex) => (
                  <GenericRow key={rowIndex} item={item} columns={columns} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

GenericTable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.func.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenericTable;
