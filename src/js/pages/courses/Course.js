import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/course';

class Course extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { id } = this.props.params;
    const i = this.props.language.courses.findIndex((item) => item.id == id);
    this.course = this.props.language.courses[i];
  }

  render() {
    return (
      <div class="course">
        {this.course.name}
        {this.props.name}
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
function mapDispatchToProps(dispatch) {
	return bindActionCreators(courseActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Course);
