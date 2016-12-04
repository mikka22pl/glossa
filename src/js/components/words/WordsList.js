import React from 'react';

import WordGroups from './WordGroups';

class WordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.removeLexer = this.removeLexer.bind(this);
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
  removeLexer(id, wordId) {
    this.props.removeLexer(id, wordId);
  }
  render() {
    //console.log('this.props', this.props);
    const nodes = this.props.list || [];
    const nodesComp = nodes.map(function(item) {
      const clickHandler = this.onClickHandler;
      const removeLexer = this.removeLexer;
			return (
        <WordGroups key={item.id} {...item}
          onClickHandler={clickHandler.bind(this, item.id)}
          removeLexer={removeLexer} />
			);
		}.bind(this));
    return (
      <div class="words-list">
        <ul>
          {nodesComp}
        </ul>
      </div>
    );
  }
}

export default WordsList;
