import React from "react";

export default function Home(props) {
  return (
    <>
      <div className="col-md-12" id="a3">
        <nav className="navbar navbar-expand-sm  navbar-dark bg-light">
          <div className="container-fluid px-5">
            <a className="navbar-brand" href="#Home">
              <img src="img/logo-regular-free-img.png" alt="site logo" />
            </a>
            <button
              className="navbar-toggler"
              style={{ background: "#00adbb" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link fs ms-md-4 ms-0"
                    href="#Home"
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  fs ms-md-4 ms-0"
                    href="#About"
                    style={{ color: "black" }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs ms-md-4 ms-0"
                    href="#Schedule"
                    style={{ color: "black" }}
                  >
                    Schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs ms-md-4 ms-0"
                    href="#Speakers"
                    style={{ color: "black" }}
                  >
                    Speakers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs ms-md-4 ms-0"
                    href="#Organizers"
                    style={{ color: "black" }}
                  >
                    Organizer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs ms-md-4 ms-0"
                    href="#Venue"
                    style={{ color: "black" }}
                  >
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs ms-md-4 ms-0"
                    href="#Sponsors"
                    style={{ color: "black" }}
                  >
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link fs bt ms-4" id="Home">
                    Buy Tickets
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="h150 w-100"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <p className="fs1 fw2">{props.h1}</p>
              <div className="h70 w-100"></div>
              <p className="fs4 fw3">{props.h2}</p>
            </div>
            <div className="col-md-5"></div>
          </div>
          <div className="h50 w-100"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-md-12">
          <img src="img/hero-bg-free-img.jpg" alt="" className="h700 w-100" />
        </div>
      </div>
      {/* header close=============== */}
    </>
  );
}
