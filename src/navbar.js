import './navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-links">
        <ul>
          <a class="content-link spaced-width" href="../public/index.html">Download</a>
          <a class="content-link spaced-width" href="../public/index.html">Services</a>
          <a class="content-link spaced-width" href="../public/index.html">About</a>
          <a class="content-link spaced-width" href="../public/index.html">Contact</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
