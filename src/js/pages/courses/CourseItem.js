import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class CourseItem extends React.Component {

  constructor(props) {
    super(props);
    this.onCourseChange = this.onCourseChange.bind(this);
  }

  onCourseChange(event) {
    console.log(this.props.id);
  	//this.props.dispatch(chooseCourse(this.props.id));
  }

  render() {
    return (
      <div class="course-item">
        <Link to={'/course/' + this.props.id} onClick={this.onCourseChange}>{this.props.language.id} - {this.props.name}</Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
	return ({
    language: state.language
	})
}
export default connect(mapStateToProps)(CourseItem);
