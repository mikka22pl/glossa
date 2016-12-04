import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import WordFunctionsList from './WordFunctionsList';

class WordGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosen: false,
      hover: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.removeLexer = this.removeLexer.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      ...this.state,
      hover: true
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      ...this.state,
      hover: false
    });
  }

  handleClick() {
    this.setState({
      ...this.state,
      choosen: !this.state.choosen
    });
    this.props.onClickHandler();
  }

  removeLexer(id) {
    console.log('removeLexer', this.props);
    this.props.removeLexer(id, this.props.id);
  }

  render() {
    const item = this.props;
    const inner = this.state.choosen && item.on ? ' on' : this.state.hover ? ' hover' : '';
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
    return (
      <li key={item.id}>
        <Link class={'brick' + inner} onClick={this.handleClick}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>{item.name}</Link>
        <WordFunctionsList wordCategories={item.categories} onRemove={this.removeLexer} />
      </li>
    );
  }
}

/*WordGroups.propTypes = {
  onClick: PropTypes.func
}*/
export default WordGroups;
