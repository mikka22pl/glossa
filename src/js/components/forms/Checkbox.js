import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    let checked = ('checked' in props) ? props.checked : false;
    this.state = {checked: checked};
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  handleChange = (e) => {
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked
      });
    }
    this.props.onChange({
      target: {
        checked: e.target.checked
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      }
    });
  }
  render() {
    return (
      <label>
        <input type="checkbox" name={this.props.name} defaultChecked={false} onChange={this.handleChange} />
        <span>{this.props.label}</span>
      </label>
    )
  }
}

export default Checkbox;
