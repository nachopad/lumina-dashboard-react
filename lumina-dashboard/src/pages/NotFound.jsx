import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, pero la página que intentabas ver no existe.</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="container-button d-flex justify-content-center align-items-center">
            <button className="button-style"> REGRESAR </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
