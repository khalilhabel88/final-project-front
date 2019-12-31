import React, { Component } from "react";
import {
  editCourses,
  saveEdit,
  deleteCourses,
  pathHandler,
  pathBack,
  addCourses
} from "../js/actions/actionCreator";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddCourses extends Component {
  constructor() {
    super();
    this.state = {
      course: {},
      modal: false
    };
  }

  changeHandler = e => {
    this.setState({
      course: {
        ...this.state.course,
        [e.target.name]: e.target.value
      }
    });
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button
          outline
          color="primary"
          className="editbtnadd"
          onClick={this.toggle}
        >
          Add Courses
        </Button>{" "}
        <Modal isOpen={this.state.modal}>
          <ModalHeader>New Courses</ModalHeader>
          <ModalBody>
            <Label for=" Name">Add Movie</Label>
            <Input
              placeholder="enter url image"
              type="text"
              name="image"
              defaultValue={
                this.props.id && this.props.course[this.props.id].image
              }
              onChange={this.changeHandler}
            />
            <Input
              placeholder="enter title"
              type="text"
              name="title"
              id="movie"
              defaultValue={
                this.props.id && this.props.course[this.props.id].title
              }
              onChange={this.changeHandler}
            />
            <Input
              placeholder="enter movie year"
              type="text"
              name="year"
              id="movie"
              defaultValue={
                this.props.id && this.props.course[this.props.id].year
              }
              onChange={this.changeHandler}
            />
            <Input
              placeholder="enter rating"
              type="text"
              name="rating"
              id="movie"
              defaultValue={
                this.props.id && this.props.course[this.props.id].rating
              }
              onChange={this.changeHandler}
            />
          </ModalBody>
          <ModalFooter className="buttons">
            <Button
              className="submit-btn"
              color="success"
              onClick={() => {
                this.props.editCourses({
                  id: this.props.id,
                  newCourse: this.state.course
                });
                this.toggle();
                this.props.addCourses(this.state.course);
              }}

        
            >
              Submit
            </Button>{" "}
            <Button
              className="cancel-btn"
              color="danger"
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ course: state.CoursesList });

const mapDispatchToProps = dispatch => {
  return {
    editCourses: payload => {
      dispatch(editCourses(payload));
    },

    saveEdit: courseupdated => dispatch(saveEdit(courseupdated)),
    editCourses: payload => {
      dispatch(editCourses(payload));
    },
    pathHandler: index => {
      dispatch(pathHandler(index));
    },
    pathBack: () => {
      dispatch(pathBack());
    },
    deleteCourses: payload => {
      dispatch(deleteCourses(payload));
    },
    addCourses: payload => {
      dispatch(addCourses(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourses);