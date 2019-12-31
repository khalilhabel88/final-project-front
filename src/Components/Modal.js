import React, { Component } from "react";
import { editCourses, saveEdit } from "../js/actions/actionCreator";
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

class Modal1 extends Component {
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
          className="editbtn"
          onClick={this.toggle}
        >
          EDIT
        </Button>{" "}
        <Modal isOpen={this.state.modal}>
          <ModalHeader>New Movie</ModalHeader>
          <ModalBody>
            <Label for="Movie Name">Adding Movie</Label>
            <Input
              type="text"
              name="image"
              defaultValue={
                this.props.id && this.props.course[this.props.id].image
              }
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="title"
              id="movie"
              defaultValue={
                this.props.id && this.props.course[this.props.id].title
              }
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="year"
              id="movie"
              defaultValue={
                this.props.id && this.props.course[this.props.id].year
              }
              onChange={this.changeHandler}
            />
            <Input
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
              }}

            
            >
              Submit
            </Button>{" "}
            <Button
              className="cancel-btn"
              color="danger"
              onClick={() => this.toggle()}
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

    saveEdit: courseupdated => dispatch(saveEdit(courseupdated))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal1);