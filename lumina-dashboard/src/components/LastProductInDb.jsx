import PropTypes from 'prop-types';

function LastProductInDb({ data }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-light text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={`assets/images/${ data.images[0].url_image }`} alt={`${ data.title }`} />
                    </div>
                    <p>{ data.overview }</p>
                    <div className="container-button">
                        <button type="submit" className="button-style"> VER DETALLE </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

LastProductInDb.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        overview: PropTypes.string.isRequired
    })
}

export default LastProductInDb;