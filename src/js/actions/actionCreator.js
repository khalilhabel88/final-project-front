import {
    ADD_COURSES,
    EDIT_COURSES,
    DELETE_COURSES,
    SEARCH_COURSES,
    SEARCH_RATING,
    EDIT_INPUT_HANDLER,
    EDIT_HANDLER,
    SAVE_EDIT,
    PATH_HANDLER,
    PATH_BACK
  } from "./actionTypes";
  
  export const addCourses = payload => {
    return { type: ADD_COURSES, payload };
  };
  
  export const editCourses = payload => {
    return { type: EDIT_COURSES, payload };
  };
  
  export const deleteCourses = payload => {
    return { type: DELETE_COURSES, payload };
  };
  
  export const searchCourses = payload => {
    return { type: SEARCH_COURSES, payload };
  };
  export const searchRating = payload => {
    return { type: SEARCH_RATING, payload };
  };
  export const editinputHandler = payload => {
    return { type: EDIT_INPUT_HANDLER, payload };
  };
  
  export const editHandler = index => {
    return { type: EDIT_HANDLER, index };
  };
  
  export const saveEdit = () => {
    return { type: SAVE_EDIT };
  };
  export const pathHandler = index => {
    return {
      type: PATH_HANDLER,
      index
    };
  };
  
  export const pathBack = () => {
    return {
      type: PATH_BACK
    };
  };