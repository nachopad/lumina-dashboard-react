import PropTypes from "prop-types";

const PaginationNav = ({ pages, currentPage, setCurrentPage }) => {

  function previusPage() {
    currentPage != 0 ? setCurrentPage(currentPage - 1) : null;
  }

  function nextPage() {
    currentPage + 1 < pages ? setCurrentPage(currentPage + 1) : null;
  }

  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={previusPage}>
            Anterior
          </a>
        </li>
        {Array.from(Array(pages), (_, index) => (
          <li
            className={`page-item ${currentPage === index ? 'active-page' : ''}`}
            key={index}
          >
            <a
              className="page-link"
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage}>
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

PaginationNav.propTypes = {
    pages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default PaginationNav;