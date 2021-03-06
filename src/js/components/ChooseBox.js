import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class ChooseBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, active: false };
    this.handleClick = this.handleClick.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  onMouseEnterHandler() {
    this.setState({...this.state, hover:true});
  }
  onMouseLeaveHandler() {
    this.setState({...this.state, hover:false});
  }
  handleClick() {
    this.setState({...this.state, active: !this.state.active});
    this.props.onClick();
  }

  render() {
    const inner = this.props.active ? ' active' : this.state.hover ? ' on' : '';
    return (
      <Link class={"choose-box" + inner}
        onClick={this.handleClick}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}><span>{this.props.name} {this.props.active}</span></Link>
    );
  }
}
ChooseBox.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  category: PropTypes.object,
  descr: PropTypes.string,
  id: PropTypes.number
}
export default ChooseBox;
