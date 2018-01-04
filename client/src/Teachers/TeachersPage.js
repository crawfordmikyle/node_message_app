import React, {Component} from 'react'
import {connect} from 'react-redux'
import {asyncGetTeacherData} from '../ReduxActions/teacherActions'

class TeachersPage extends Component{
  componentDidMount(){
    this.props.asyncGetTeacherData()
  }
  
  render(){
    return(
      <div className='TeacherPage'>
        <h1>Soon To Be Teacher Home Page </h1>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{

}

export default connect(null,{asyncGetTeacherData})(TeachersPage)