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

  handleOnClick = (event) => {
    if(this.state.expanded === false){
      this.setState({expanded: true})
    } else {
      this.setState({expanded: false})
    };
  };


  render(){
    if(this.state.expanded === false){
      return(
        <div>
          <SmallStudentCard student={this.props.studentData}/>
          <button onClick={event=>this.handleOnClick(event)}>Show Student Data</button>
        </div>
      );
    } else {
      return(
        <div>
          <ExtendedStudentCard student={this.props.studentData}/>
          <button onClick={event=>this.handleOnClick(event)}>Hide Student Data</button>
        </div>
      );
    }
  };

};

export default TeacherStudentCard;