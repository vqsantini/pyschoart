import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Meu Portfólio</h1>
        <div className="navbar-links">
          <Link to="/" className={pathname === "/" ? "active" : ""}>Início</Link>
          <Link to="/sobre" className={pathname === "/sobre" ? "active" : ""}>Sobre</Link>
          <Link to="/projetos" className={pathname === "/projetos" ? "active" : ""}>Projetos</Link>
          <Link to="/contato" className={pathname === "/contato" ? "active" : ""}>Contato</Link>
        </div>
      </div>
    </nav>
  );
}