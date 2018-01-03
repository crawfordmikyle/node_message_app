import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetAllTeachers} from '../ReduxActions/teachersActions';
import RenderTeachers from './RenderTeachers';

class TeachersList extends Component {
  componentDidMount(){
    this.props.asyncGetAllTeachers();
  };

  render(){
    return(
      <div>
        <h1>Teachers List</h1>
        <RenderTeachers/>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  teachers: state.teachersReducer
})

export default connect(mapStateToProps,{asyncGetAllTeachers})(TeachersList)