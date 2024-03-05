import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Soul Way Music</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="btn btn-primary m-1" aria-current="page" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary m-1" href="#">Alumnos</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary m-1" href="#">Cursos</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar