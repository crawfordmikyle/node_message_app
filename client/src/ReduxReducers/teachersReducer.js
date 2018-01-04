export default function teachersReducer(state=[],action){
  switch(action.type){
    case 'GET_ALL_TEACHERS':
      console.log(action.teachers)
      return action.teachers
    default:
      return state
  }
};