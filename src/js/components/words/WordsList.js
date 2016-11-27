import React from 'react';

import WordGroups from './WordGroups';

class WordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(id) {
    const list = this.props.list;
    list.map((item) => {
      item.on = (item.id == id) ? true : false
    });
    this.setState({
      activeItem: id
    });
    this.props.onClick(id);
  }
  render() {
    var nodes = this.props.list.map(function(item) {
      const clickHandler = this.onClickHandler;
			return (
        <WordGroups key={item.id} {...item} onClickHandler={clickHandler.bind(this, item.id)} />
			);
		}.bind(this));
    return (
      <div class="words-list">
        <ul>
          {nodes}
        </ul>
      </div>
    );
  }
}

export default WordsList;
