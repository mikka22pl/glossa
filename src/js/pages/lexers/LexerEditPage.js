import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as lexerActions from '../../actions/lexer';
import LexerEdit from "../../components/LexerEdit";
import LexersList from "../../components/LexersList";

class LexerEditPage extends React.Component {
  constructor(props) {
    super(props);
    const { category } = this.props.lexer;
    const { id } = this.props.params;

    /*console.log('id = ', id);
    if (!id) {
      this.props.onEditLexer({id: 0, name: '', descr: ''});
    }*/
      //const id = this.props.categoryId;
    this.saveLexer = this.saveLexer.bind(this);
    this.onEdit = this.onEdit.bind(this);
    //console.log('fetching lexers in LexerEditpage' + JSON.stringify(category));
    //this.props.fetchLexers(category ? category.id : undefined);
  }

  componentWillMount() {
      const id = this.props.params ? this.props.params.id : undefined; // categoryId
      console.log('params/' + id + '/' + this.props.params.id);
  }

	onEdit(lexer) {
		console.log('on edit lexereditpage ', lexer);
		this.props.onEditLexer(lexer);
  }

  saveLexer(data) {
    console.log('saveLexer()', data);
    this.props.saveLexerItem({
      type: 'LEXER_' + data.form_type,
      id: data.id,
      name: data.name,
      descr: data.descr,
      category: data.category
    });
  }

  render() {
    const { id } = this.props.params;
    return (
      <div>
        <LexerEdit lexer={this.props.lexer} onSave={this.saveLexer} />
      </div>
    );
  }
}

function mapStateToProps(state, own_props) {
  return {
    lexer: state.lexer,
    lexers: state.lexers
  }
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(lexerActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LexerEditPage);
