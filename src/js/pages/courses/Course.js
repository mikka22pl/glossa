import React from "react";
import { connect } from "react-redux";

class Course extends React.Component {

  render() {
    return (
      <div class="course">
        {this.props.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
	return ({
		language: state.language
	});
}

export default connect(mapStateToProps)(Course);
