import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import Lexer from "./Lexer";
import * as lexerActions from '../actions/lexer';

class LexersList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.onEdit);
    // this.onEdit = this.onEdit.bind(this);
  }
  componentWillMount() {
    // const { category } = this.props.lexer;
    // const id = this.props.categoryId;
    // this.props.fetchLexers(category && id ? category.id : undefined);
  }

  onEdit(lexer) {
    console.log('on edit lexersList ', lexer);
		this.props.onEdit(lexer);
  }

  render() {
    const lexers = this.props.lexers.list || [];
		const nodes = lexers.map(function(item) {
      const ed = this.onEdit;
			return (
				<Lexer lexer={item} key={item.id} onEdit={this.onEdit.bind(this, item)} onShow={this.props.onShow}></Lexer>
			);
		}.bind(this));
    return (
      <div class="row">
        {nodes}
      </div>
    );
  }
}

//LexersList.propTypes = {
  //lexers: PropTypes.object,
  //onEdit: PropTypes.func
//};

//export default LexersList;



function mapStateToProps(state) {
	return ({
		lexers: state.lexers,
    lexer: state.lexer
	})
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(lexerActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LexersList);
