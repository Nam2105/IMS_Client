import React, { Component } from "react";
import { createNotice } from "../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const value = [
  {
    email: "fpt@gmail.com",
    contact: "+84 325 532 421",
    link: "https://fptsoftware.com"
  },
  {
    email: "facebook@gmail.com",
    contact: "+84 328 422 111",
    link: "https://www.facebook.com"
  },
  {
    email: "google@gmail.com",
    contact: "+84 999 882 444",
    link: "https://www.google.com.vn"
  },
  {
    email: "microsoft@gmail.com",
    contact: "+84 123 636 222",
    link: "https://www.microsoft.com"
  },
  {
    email: "amazon@gmail.com",
    contact: "+84 866 776 333",
    link: "https://www.amazon.com"
  }
];

const information = [
  {
    name: "Email",
    placeholder: "example@gmail.com",
    type: "email",
    value: "email"
  },
  {
    name: "Contact",
    placeholder: "+84 xxx xxx xxx",
    type: "tel",
    value: "contact"
  },
  {
    name: "Link",
    placeholder: "https://form.example.com/exampleForm",
    type: "url",
    value: "link"
  }
];

class NoticeForm extends Component {
  state = {
    selectedInfo: {
      email: "",
      contact: "",
      link: ""
    }
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWorkplaceChange = this.handleWorkplaceChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    let data = {};
    for (var [key, value] of formData.entries()) {
      data[key] = value;
    }
    const { createNotice } = this.props;
    createNotice(data).then(() => {
      this.props.history.push("/facultyNotices");
    });
  }

  handleWorkplaceChange(event) {
    const selectedWorkplace = event.target.value;
    const selectedInfo = value.find(
      (item) => item.email.split('@')[0] === selectedWorkplace.toLowerCase()
    );
    this.setState({ selectedInfo });
  }

  render() {
    const { selectedInfo } = this.state;

    return (
      <>
        <h4 className="mt-2">New Internship Opportunity: </h4>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row my-2">
            <div className="col-sm-12">
              Subject:
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Title..."
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-sm-12">
              Description:
              <textarea
                name="description"
                id="description"
                rows="3"
                placeholder="Enter the description for the internship...."
                className="form-control"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-sm-4">
              Workplace:
              <select
                id="workplace"
                name="workplace"
                className="form-control"
                onChange={this.handleWorkplaceChange}
              >
                <option value="FPT">FPT</option>
                <option value="Facebook">Facebook</option>
                <option value="Google">Google</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Amazon">Amazon</option>
              </select>
            </div>
            <div className="col-sm-4">
              Location:
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Company"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              Designation:
              <input
                type="text"
                name="designation"
                id="designation"
                placeholder="Software Developer"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-sm-4">
              Requirements:
              <input
                type="text"
                name="requirements"
                id="requirements"
                placeholder="Python, Tensorflow, ..."
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              Start Date:
              <input
                type="date"
                name="startDate"
                id="startDate"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              Type of Internship:
              <select
                type="text"
                name="internshipType"
                id="internshipType"
                placeholder="Full-time/Part-time"
                className="form-control"
                value={this.state.internshipType}
                onChange={(e) =>
                  this.setState({ internshipType: e.target.value })
                }
                required
              >
                <option value="">Select Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
              </select>

              {/* <input
                type="text"
                name="internshipType"
                id="internshipType"
                placeholder="Full-time/Part-time"
                className="form-control"
              /> */}
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-sm-4">
              Domain:
              <input
                type="text"
                name="domain"
                id="domain"
                placeholder="Machine Learning"
                className="form-control"
              />
            </div>
            <div className="col-sm-3">
              Duration:
              <div className="input-group">
                <input
                  type="number"
                  name="duration"
                  id="duration"
                  placeholder="1"
                  className="form-control"
                />
                <div className="input-group-append">
                  <span className="input-group-text">month(s)</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              Stipend:
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrependRs">
                    $.{" "}
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="stipend"
                  name="stipend"
                  placeholder="1000"
                  aria-describedby="inputGroupPrependRs"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">/month</span>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              Number of Positions:
              <input
                type="number"
                name="positions"
                id="positions"
                placeholder="1"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-sm-6">
              Contact:
              <input
                type="tel"
                name="contact"
                id="contact"
                placeholder="+84 xxx xxx xxx"
                className="form-control"
                value={selectedInfo.contact}
                readOnly
              />
            </div>
            <div className="col-sm-6">
              Email:
              <input
                type="email"
                name="emailId"
                id="emailId"
                placeholder="example@gmail.com"
                className="form-control"
                value={selectedInfo.email}
                readOnly
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-sm-12">
              Link:
              <input
                type="url"
                name="link"
                id="link"
                placeholder="https://form.example.com/exampleForm"
                className="form-control"
                value={selectedInfo.link}
                readOnly
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createNotice: (notice) => dispatch(createNotice(notice)),
});

export default connect(null, mapDispatchToProps)(withRouter(NoticeForm));
