import React from "react";
import { Link } from "react-router";

export default class CourseItem extends React.Component {

  render() {
    return (
      <div class="course-item">
        <Link to={'course/' + this.props.id}>{this.props.name}</Link>
      </div>
    );
  }
}
