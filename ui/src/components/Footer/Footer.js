import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid p-0">
          <div className="row text-left">
            <div className="col-md-5 col-sm-5">
              <h4 className="text-light">About us</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                maxime ea similique illum corrupti
              </p>
            </div>
            <div className="col-md-5 col-sm-12">
              <h4 className="text-light">Newsletter</h4>
              <p className="text-muted">Stay Updated</p>
              <form className="form-inline">
                <div className="col pl-0">
                  <div className="input-group pr-5">
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Email"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4 className="text-light">Follow Us</h4>
              <p className="text-muted">Let us be social</p>
              <div className="column text-light">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-twitter" />
                <i className="fab fa-youtube" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
