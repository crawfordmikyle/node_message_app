export default function teachersReducer(state=[],action){
  switch(action.type){
    case 'GET_ALL_TEACHERS':
      return action.teachers
    default:
      return state
  }
} 