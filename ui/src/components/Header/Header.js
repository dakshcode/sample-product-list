import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <i className="fas fa-car fa-2x mx-3" />
              CarHub
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-right text-light" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mr-auto" />
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    HOME
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <div class="dropdown">
                    <a href="#" class="nav-link">
                      Car Dealers
                    </a>
                    <div class="dropdown-content">
                      <a href="/">True Motars</a>
                      <a href="/">Aone Motars</a>
                      <a href="/">Classic Motars</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className="container text-center"
          style={{
            backgroundImage: "../../../images/pexels-arnie-watkins-3156482.jpg",
          }}
        >
          <div className="row">
            <div className="col-md-7 col-sm-12  text-white">
              <h2>Get EXCITING Offers on your Dream Car</h2>
              <button className="btn btn-light px-5 mx-8 py-2 primary-btn">
                Go
              </button>
            </div>
            <div className="col-md-5 col-sm-12  h-25">
              <img
                src="../../../images/pexels-arnie-watkins-3156482.jpg"
                alt="Car"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;