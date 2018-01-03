import React, {Component} from 'react'
import {connect} from 'react-redux'

class TeachersPage extends Component{
  

  render(){
    return(
      <div className='TeacherPage'>
        <h1>Soon To Be Teacher Home Page </h1>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  // Set Requested Teacher
  const teacher = state.teachersReducer.find((teacher)=>{
    teacher.id.toString() === ownProps.match.params.id
  })
  
  if(teacher){
    return({teacher})
  } else {
    return({teacher: {message: 'Teacher Not Found'}})
  }
}

export default connect(mapStateToProps)(TeachersPage)