// Action Creators
const getAllTeachers = (teachers) => {
  return({
    type: 'GET_ALL_TEACHERS',
    teachers: teachers,
  });
};

const getTeacherData = (teacher) => {
  return({
    type: 'GET_TEACHER_DATA',
    teacher: teacher,
  });
};


// Asynchronous Actions

export const asyncGetAllTeachers = () => {
  return dispatch => {
    return fetch('http://localhost:3000/teachers')
      .then((responce)=>responce.json())
      .then((teachers)=>dispatch(getAllTeachers(teachers)))
      .catch((error)=>console.log(error))
  };
};

export const asyncGetTeacherData = (teacherData) => {

}