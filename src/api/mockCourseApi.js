import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-creating-reusable-components",
    title: "Self Portrait",
    watchHref: "http://pluralsight.com/courses/react-creating-reusable-components",
    authorId: "me",
    length: "$20",
    category: "Photograph"
  },
  {
    id: "react-flux-building-applications",
    title: "Landscape",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "me",
    length: "$8",
    category: "Photograph"
  },
  {
    id: "clean-code",
    title: "Star Wars",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "me",
    length: "$10",
    category: "Video"
  },
  {
    id: "architecture",
    title: "Scarbourogh Fair",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "me",
    length: "$50",
    category: "Video"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Sunflowers",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "me",
    length: "$30",
    category: "Painting"
  },
  {
    id: "web-components-shadow-dom",
    title: "Wheat Field with Cypresses",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "me",
    length: "$10",
    category: "Painting"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          return course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
