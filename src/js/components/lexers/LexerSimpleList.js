import React, { PropTypes } from 'react';

import ChooseBox from '../ChooseBox';

class LexerSimpleList extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  /*componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }*/
  clickHandler(id) {
    /*if (this.props.exclude) {
      this.state.list.map((item) => {
        item = (item.id == id) ? true : false
      });
    }*/
    this.props.onClick(id);
  }

  clear() {
    console.log('clear()');
    //this.props.list.map((item) => { item.on = false });
  }
  render() {
    const lexers = this.props.list || [];
    console.log('length ', lexers);
    const nodes = lexers.map(function(lex) {
      const clickHandler = this.clickHandler;
      return (
        <li key={lex.id}><ChooseBox {...lex} onClick={clickHandler.bind(this, lex.id)}/></li>
      );
    }.bind(this));
    return (
      <div>
        <ul class="choose-box-list">
        {nodes}
        </ul>
      </div>
    );
  }
}

LexerSimpleList.propTypes = {
  list: PropTypes.array,
  exclude: PropTypes.bool
}

export default LexerSimpleList;
