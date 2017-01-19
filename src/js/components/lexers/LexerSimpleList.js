import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash';

import ChooseBox from '../ChooseBox';
import { chooseLexer } from '../../actions/lexer';

class LexerSimpleList extends React.Component {
  constructor(props) {
    super(props);
    // this.clickHandler = this.clickHandler.bind(this);
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
    // const indx = _.findIndex(this.props.list, ['id', id]);
    // console.log('found', indx);
    let { dispatch } = this.props;
    dispatch(chooseLexer(id));
    this.props.onClick(id);
  }

  clear() {
    console.log('clear()');
    //this.props.list.map((item) => { item.on = false });
  }
  render() {
    const lexers = this.props.list || [];
    //console.log('length ', lexers);
    const nodes = lexers.map(function(lex) {
      const clickHandler = this.clickHandler;
      const idx = _.findIndex(this.props.selected, (o) => o.id == lex.id);
      return (
        <li key={lex.id}><ChooseBox {...lex} active={idx !== -1} onClick={clickHandler.bind(this, lex.id)}/></li>
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
  exclude: PropTypes.bool,
  selected: PropTypes.array
}

export default connect(
  state => ({categories: state.lexers.categories})
)(LexerSimpleList);
