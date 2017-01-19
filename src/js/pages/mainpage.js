import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { fetchLexersTree } from '../actions/lexersTree/fetchLexersTree';

// import Lexers from "./lexers/lexers";
// import Languages from "./languages/languages";

class Mainpage extends React.Component {

	componentWillMount() {
		if (!this.props.lexersTree.list.WORD_FUNCTION) {
			this.props.fetchLexersTree();
		}
	}

	render() {
		return (
			<div>
			Mainpage
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return ({
    lexersTree: state.lexersTree,
	});
};
const mapDispatchToProps = (dispatch) => {
	return {
    fetchLexersTree: bindActionCreators(fetchLexersTree, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);
