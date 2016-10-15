import React from "react";

export default class Fields extends React.Component {

  componentDidMount() {
    console.log('Fields::mounted');
  }

  render() {
    return (
      <div class="form-row">
        <label for={this.props.id} class="control-label">{this.props.label}:</label>
        <input type="text" name={this.props.name} id={this.props.id} value="" class="form-control" />
      </div>
    );
  }
};
