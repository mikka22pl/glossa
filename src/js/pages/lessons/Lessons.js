import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as lessonActions from '../../actions/lesson';
import LessonItem from './LessonItem';

class Lessons extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchLessons(this.props.params.id);
  }

  render() {
    console.log('language id:' + this.props.language.id);
    const language = this.props.language;
    const lessons = this.props.lessons || [];
    const items = lessons.list.map(function(item) {
      return (
        <LessonItem {...item} key={item.id} language={language}/>
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

function mapStateToProps(state) {
	return ({
    language: state.language,
		lessons: state.lessons
	});
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(lessonActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
