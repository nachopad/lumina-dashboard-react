import PropTypes from "prop-types";

function GenericRow({ item, columns }) {
  return (
    <tr>
      {columns.map((column, index) => (
        <td key={index}>{column.accessor(item)}</td>
      ))}
    </tr>
  );
}

GenericRow.propTypes = {
  item: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default GenericRow;
