export default function teacherReducer(state=[],action){
  switch(action.type){
    case 'GET_TEACHER_DATA':
      return action.teacherData
    default:
      return state
  }
};