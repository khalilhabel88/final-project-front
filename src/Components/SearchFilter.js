import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { searchCourses } from "../js/actions/actionCreator";

class SearchFilter extends Component {
  render() {
    return (
      <div className="input-container">
        <input
          placeholder="Searching for a course...."
          className="search"
          onChange={e => this.props.searchCourses(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchCourses: title => {
    dispatch(searchCourses(title));
  }
});

export default connect(null, mapDispatchToProps)(SearchFilter);