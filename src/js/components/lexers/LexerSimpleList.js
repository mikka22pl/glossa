import React, { PropTypes } from 'react';

import ChooseBox from '../ChooseBox';

class LexerSimpleList extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(id) {
    if (this.props.exclude) {
      this.props.list.map((item) => {
        item.on = (item.id == id) ? true : false
      });
    }
    this.props.onClick(id);
  }
  render() {
    const lexers = this.props.list || [];
    const nodes = lexers.map((lex) => <li key={lex.id}><ChooseBox {...lex} onClick={this.clickHandler.bind(this, lex.id)}/></li>);
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
