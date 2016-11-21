import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { PageHeader, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//import Lexer from "../../components/Lexer";
import LexersList from "../../components/LexersList";
import LexerDelete from "./LexerDelete";
import * as lexerActions from '../../actions/lexer';

class LexersPage extends React.Component {

	constructor(props) {
		super(props);
		const { id } = props.params;
		console.log('lexers id ', id);
		this.fetchLexers(id);
		this.onEdit = this.onEdit.bind(this);
		this.fetchLexers = this.fetchLexers.bind(this);
	}
	componentWillMount() {
		// this.props.fetchLexers();
    // const { category } = this.props.lexer;
    // const id = this.props.categoryId;
	}

	fetchLexers(id) {
		this.props.fetchLexers(id);
	}

	onEdit(lexer) {
		console.log('on edit lexers ',lexer);
		this.props.onEditLexer(lexer);
	}

	render() {
		return (
			<div class="content">
        <PageHeader>Słowniki</PageHeader>
				<div class="row">
					<Nav bsStyle="pills">
						<LinkContainer to="/lexer-edit">
							<NavItem>
								Add lexer <Glyphicon glyph="plus-sign"/>
							</NavItem>
						</LinkContainer>
					</Nav>
				</div>
				<LexersList onEdit={this.onEdit} onShow={this.fetchLexers} />
				<LexerDelete />
			</div>
		);
	}
};
//export default Lexers;
function mapStateToProps(state) {
	return ({
		lexers: state.lexers
	})
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(lexerActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LexersPage);
