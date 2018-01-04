// Action Creators
const getAllTeachers = (teachers) => {
  return({
    type: 'GET_ALL_TEACHERS',
    teachers: teachers,
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