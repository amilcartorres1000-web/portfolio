export default function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          ⚛️ My Portfolio
        </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="#projects">Projects</a>
        <a className="navbar-item" href="#contact">Contact</a>
      </div>
    </nav>
  );
}
