import React from "react";
import { connect } from "react-redux";

import LessonItem from './LessonItem';

class Lessons extends React.Component {

  render() {
    const language = this.props.language;
    const course = this.props.course;
    const lessons = course.lessons || [];
    const items = lessons.map(function(item) {
      return (
        <LessonItem {...item} key={item.id} />
      );
    });
    return (
      <div class="content">
        <h3>Lessons</h3>
        {items}
      </div>
    );
  }
}

/*function mapStateToProps(state) {
  const languages = $.map(state.languages, (value, index) => {
    return [value];
  });
  const language = languages.filter((item) => {
    return item.id === state.language.id;
  })[0];
	return ({
		language: language
	});
}*/
export default connect(Lessons);
