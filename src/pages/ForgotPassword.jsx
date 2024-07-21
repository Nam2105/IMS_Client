import React, { Component } from "react";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import { Link } from "react-router-dom";
import { forgotPassword } from "../store/actions";
import { connect } from "react-redux";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      emailId: "",
      role: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { forgotPassword } = this.props;
    forgotPassword(this.state);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="text-center my-4">
          <ErrorMessage />
          <SuccessMessage />
        </div>
        <div className="card bg-dark text-white">
          <div className="card-title ml-4 mt-3">
            <h4>Forgot Password?</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                required
                type="text"
                name="username"
                id="username"
                className="form-control bg-dark text-white"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="emailId">Email ID:</label>
              <input
                required
                type="email"
                name="emailId"
                id="emailId"
                className="form-control bg-dark text-white"
                onChange={this.handleChange}
              />
              <br />
              <label>Role:</label>
              <div className="row">
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-dark">
                        <input
                          type="radio"
                          name="role"
                          value="student"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      placeholder="Student"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-dark">
                        <input
                          type="radio"
                          name="role"
                          value="faculty"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      placeholder="Faculty"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-dark">
                        <input
                          type="radio"
                          name="role"
                          value="admin"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      placeholder="Admin"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
              <Link to="/login" className="btn btn-secondary float-right mr-2">
                Back to login
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
  }),
  { forgotPassword }
)(ForgotPassword);
