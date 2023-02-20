import './css/navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-links">
        <ul>
          <a className="content-link spaced-width" href="../public/index.html">Download</a>
          <a className="content-link spaced-width" href="../public/index.html">Services</a>
          <a className="content-link spaced-width" href="../public/index.html">About</a>
          <a className="content-link spaced-width" href="../public/index.html">Contact</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
