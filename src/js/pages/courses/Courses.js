import React from "react";
import { connect } from "react-redux";

import CourseItem from './CourseItem';

class Courses extends React.Component {

  render() {
    const language = this.props.language;
    const courses = language.courses || [];
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
		language: language
	});
}
export default connect(mapStateToProps)(Courses);
