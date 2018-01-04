import React, {Component} from  'react'
import SmallStudentCard from './SmallStudentCard'
import ExtendedStudentCard from './ExtendedStudentCard'
class TeacherStudentCard extends Component{
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }


  render(){
    if(this.state.expanded === false){
      return(
        <SmallStudentCard/>
      )
    } else {
      return(
        <ExtendedStudentCard/>
      )
    }
  }
}

export default TeacherStudentCard