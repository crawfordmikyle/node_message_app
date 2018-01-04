// Action Creators
const getTeacherData = (teacherData) =>{
  return({
    type: 'GET_TEACHER_DATA',
    teacherData: teacherData,
  });
};
// Asynchronous Actions

export const asyncGetTeacherData = (teacher) => {
  const config = {
    method: 'GET',
    headers:{'Content-Type':'application/json'},
  };

  return dispatch => {
    return fetch(`http://localhost/teachers/${teacher.id}`,config)
    .then((responce)=>responce.json)
    .then((teacherData)=>dispatch(getTeacherData(teacherData)))
    .catch((error)=>console.log(error))
  };
};