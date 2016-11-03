import React from "react";
import { connect } from "react-redux";
import { PageHeader, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Lexer from "./lexer";
import LexerDelete from "./LexerDelete";

class Lexers extends React.Component {

	constructor(props) {
		super(props);
		console.log('--> Lexers:constructor');
	}
	componentDidMount() {
	  console.log('Lexers :: mounted.');
	}

	render() {
		console.log('Lexers' + JSON.stringify(this.props));
		var nodes = this.props.lexers.map(function(item) {
			return (
				<Lexer lexer={item} key={item.id}></Lexer>
			);
		});
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
				<div class="row">
	        {nodes}
				</div>
				<LexerDelete />
			</div>
		);
	}
};

function mapStateToProps(state) {
	return ({
		lexers: state.lexers
	})
}

export default connect(mapStateToProps)(Lexers);
