import React from "react";
import { Link } from "react-router";

export default class LessonItem extends React.Component {

  render() {
    return (
      <div class="course-item">
        <Link to={'/lesson/' + this.props.language.id + '/' + this.props.id}>{this.props.name}</Link>
      </div>
    );
  }
}
