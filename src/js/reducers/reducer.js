import {
    SEARCH_COURSES,
    SEARCH_RATING,
    ADD_COURSES,
    DELETE_COURSES,
    EDIT_COURSES,
    PATH_HANDLER,
    PATH_BACK
  } from "../actions/actionTypes";
  
  const initialState = {
    searchWords: "",
    star: 0,
    showmodal: true,
    pathindex: 0,
  
    CoursesList: [
      {
        image: "https://www.pierre-giraud.com/wp-content/uploads/2019/09/html-css-livre-couverture.jpg",
        title: "HTML-CSS",
        rating: "5",
        trailer: "https://www.youtube.com/embed/gGh6Vyo7eKk"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTU74BLAPXyEqVpR0AZNaZwfyvXcKm74nw3ZREBJQHHlxwtEvQQ&s",
        title: "Css",
        rating: "4",
        trailer: "https://www.youtube.com/embed/Dk2QZri5hCo"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UXuYfnsBtDz8vjVRKzhli-isy8FrQ6m6NLWueGTZpecxLhTY0Q&s",
        title: "React",
        rating: "4",
        trailer: "https://www.youtube.com/embed/ycstRj2i66k"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
        title: "Redux",
        rating: "3",
        trailer: "https://www.youtube.com/embed/mhqO-VL6U2I"
      },
      {
        image: "https://cdn.auth0.com/blog/illustrations/angular.png",
        title: "Angular",
        rating: "3",
        trailer: "https://www.youtube.com/embed/VAkio68d51A"
      },
      {
        image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/1790a008-96d6-11e6-8047-00163ed833e7/669733406/python-screenshot.png",
        title: "Python",
        rating: "3",
        trailer: "https://www.youtube.com/embed/Y8Tko2YC5hA"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        title: "Java-script",
        rating: "3",
        trailer: "https://www.youtube.com/embed/955L9-NoBoE"
      },
      {
        image: "https://miro.medium.com/max/3200/1*DiNIG4Bfpm65_wwXf_JwMA.png",
        title: "Mango-DB",
        rating: "3",
        trailer: "https://www.youtube.com/embed/bKjH8WhSu_E"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
        title: "C++",
        rating: "3",
        trailer: "https://www.youtube.com/embed/OTroAxvRNbw"
      },
      {
        image: "https://scr.sad.supinfo.com/articles/resources/298261/9132/0.jpg",
        title: "Java",
        rating: "3",
        trailer: "https://www.youtube.com/embed/_l4pJ7HCrl4"
      },
      {
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png",
        title: "Ruby",
        rating: "3",
        trailer: "https://www.youtube.com/embed/FyyIvAwwMPM"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
        title: "Php",
        rating: "3",
        trailer: "https://www.youtube.com/embed/C9Tg1h53Q8s"
      },
  
 
      
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_COURSES:
        return { ...state, searchWords: action.payload };
  
      case SEARCH_RATING:
        return { ...state, star: action.payload };
  
      case ADD_COURSES:
        
        return {
          ...state,
          CoursesList: state.CoursesList.concat(action.payload)
        };
  
      case DELETE_COURSES:
        return {
          ...state,
          CoursesList: state.CoursesList.filter(el => el.title !== action.payload)
        };
  
      case EDIT_COURSES:
        
        return {
          ...state,
          CoursesList: state.CoursesList.map((el, i) =>
            i === action.payload.id ? { ...el, ...action.payload.newCourse } : el
          )
        };
      case PATH_HANDLER:
        return {
          ...state,
          pathindex: action.index
        };
  
      case PATH_BACK:
        return {
          ...state,
          pathindex: 0
        };
      default:
        return state;
    }
  };
  
  export default reducer;