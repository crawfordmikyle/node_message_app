// Action Creators
const getTeacherData = (teacherData) =>{
  return({
    type: 'GET_TEACHER_DATA',
    teacherData: teacherData,
  });
};
// Asynchronous Actions

export const asyncGetTeacherData = (teacherId) => {
  return dispatch => {
    return fetch(`http://localhost:3000/teachers/${teacherId}`)
    .then((responce)=>responce.json())
    .then((teacherData)=>dispatch(getTeacherData(teacherData)))
    .catch((error)=>console.log(error))
  };
};