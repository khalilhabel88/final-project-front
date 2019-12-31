import React, { Component } from "react";
import SearchFilter from "./Components/SearchFilter";
import SearchRating from "./Components/SearchRating";
import CoursesList from "./Components/CoursesList";
import AddCourses from "./Components/AddCourses";
import { connect } from "react-redux";
import { searchRating } from "../src/js/actions/actionCreator";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Video from "./Components/video";


import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="first">
            <SearchFilter />
            <AddCourses />
          </div>
          <SearchRating
            className="filterstar"
            rate={this.props.stars}
            onClick={this.props.searchRating}
          />
          <Switch>
            <Route exact path="/" component={CoursesList} />
            <Route
              path={`/:${this.props.courses[this.props.pathindex].title}`}
              render={() => (
                <Video
                  trailer={this.props.courses[this.props.pathindex].trailer}
                />

                
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    stars: state.star,
    courses: state.CoursesList,
    pathindex: state.pathindex
  };
};
const mapDispatchToProps = dispatch => ({
  searchRating: rating => {
    dispatch(searchRating(rating));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);