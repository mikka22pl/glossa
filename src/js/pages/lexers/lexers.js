import React from "react";
import { connect } from "react-redux";
import { PageHeader, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Lexer from "./lexer";

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
				<Lexer {...item} key={item.key}></Lexer>
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
			</div>
		);
	}
};

/*Lexers.defaultProps = {
	data: [
		{key:"1", name: "Języki", code: "languages"},
		{key:"2", name: "Uzytkownicy", code: "users"}
	]
};*/

function mapStateToProps(state) {
	return ({
		lexers: state.lexers.list
	})
}

export default connect(mapStateToProps)(Lexers);
