import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as courseActions from '../../actions/course';
import CourseItem from './CourseItem';

class Courses extends React.Component {

  constructor(props) {
    super(props);
    console.log('courses lang ' + this.props.params.id);
    this.props.fetchCourses(this.props.params.id);
  }

  componentWillMount() {
    console.log('will mount ' + this.props.params.id);
  }
  render() {
    const language = this.props.language;
    const courses = this.props.courses.list || [];
    const items = courses.map(function(item) {
      return (
        <CourseItem {...item} key={item.id} />
      );
    });
    return (
      <div class="content">
        <h3>Courses</h3>
        {items}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const languages = $.map(state.languages, (value, index) => {
    return [value];
  });
  const language = languages.filter((item) => {
    return item.id === state.language.id;
  })[0];
	return ({
		language: language,
    courses: state.courses
	});
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(courseActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
