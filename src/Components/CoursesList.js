import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CoursesCard from "../Components/CoursesCard";
import { connect } from "react-redux";

class CoursesList extends Component {
  render() {
    return (
      <Row>
        {this.props.courses
          .filter(
            el =>
              el.title
                .toLowerCase()
                .includes(this.props.searchWords.toLowerCase().trim()) &&
              el.rating >= this.props.rate
          )
          .map((element, key) => (
            <Col key={key} sm={3}>
              <CoursesCard course={element} id={key} />
            </Col>
          ))}
      </Row>

    );
  }
}
const mapStateToProps = state => {
  return {
    courses: state.CoursesList,
    searchWords: state.searchWords,
    rate: state.star
  };
};
export default connect(mapStateToProps, null)(CoursesList);