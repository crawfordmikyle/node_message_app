import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetTeacherData} from '../ReduxActions/teacherActions';

class TeachersPage extends Component{
  componentDidMount(){
    this.props.asyncGetTeacherData(this.props.match.params.id)
  };
  
  render(){
    return(
      <div className='TeacherPage'>
        <h1>{this.props.teacher.name}</h1>
      </div>
    )
  };
};

const mapStateToProps = (state,ownProps) =>{
  return({
    teacher: state.teacherReducer
  })
};

export default connect(mapStateToProps,{asyncGetTeacherData})(TeachersPage);