import React, { Component, Fragment } from "react";
import Modal1 from "./Modal";
import { Link } from "react-router-dom";
import SearchRating from "./SearchRating";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import {
  deleteCourses,
  editCourses,
  pathHandler,
  pathBack
} from "../js/actions/actionCreator";

class CoursesCard extends Component {
  render() {
    const { image, title, year, rating } = this.props.course;
    return (
      <Fragment>
        <Card className="card-container">
          <div className="saf">{}</div>

          <CardImg top src={image} alt="Card image cap" />
          <CardBody>
            <div className="film-info">
              <CardTitle className="card-title">{title}</CardTitle>
              <CardSubtitle className="card-year">{year}</CardSubtitle>
              <SearchRating rate={rating} />
            </div>
            <Button
              className="discover"
              outline
              color="secondary"
              onClick={() => this.props.pathHandler(this.props.id)}
            >
              <Link to={{ pathname: "/" + title.replace(/ /g, "_") }}>
                Courses Video
              </Link>
            </Button>{" "}
            <div className="btns">
              <Modal1 id={this.props.id} />
              <Button
                outline
                color="danger"
                className="remove"
                onClick={() => this.props.deleteCourses(title)}
              >
                DELETE
              </Button>
            </div>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  deleteCourses: payload => {
    dispatch(deleteCourses(payload));
  },
  editCourses: payload => {
    dispatch(editCourses(payload));
  },
  pathHandler: index => {
    dispatch(pathHandler(index));
  },
  pathBack: () => {
    dispatch(pathBack());
  }
});
export default connect(null, mapDispatchToProps)(CoursesCard);