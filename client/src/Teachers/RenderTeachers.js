import React from 'react';
import {connect} from 'react-redux';

const RenderTeachers = () => (
  <div>
    <h4>Render Teachers Here</h4>
  </div>
)

const mapStateToProps = (state) => ({
  teachers: state.teachersReducer
})

export default connect(mapStateToProps)(RenderTeachers)