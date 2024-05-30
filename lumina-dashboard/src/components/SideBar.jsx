import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav sidebar sidebar-dark accordion bg-darker"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <h3>LUMINA</h3>
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Acciones</div>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-shopping-cart"></i>
          <span className="text-white">Productos</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories">
          <i className="fas fa-stream"></i>
          <span className="text-white">Categorías</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/users">
          <i className="fas fa-user-friends"></i>
          <span className="text-white">Usuarios</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sales">
          <i className="fas fa-tag"></i>
          <span className="text-white">Ventas</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
