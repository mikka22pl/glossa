import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    //(event) => { this.setState({ [field]: event.target.value });
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <input type="text" class="form-control" name={this.props.name} value={this.state.value} onChange={this.handleChange} />
    );
  }
};
