import logo from "../images/Miami_budz_v3.2.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="img-fuild" src={logo} id="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/* <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a> */}
            {/* <a className="nav-item nav-link" href="#">
              Contact us
            </a> */}
            {/* <a className="nav-item nav-link" href="#">
              Pricing
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
}
