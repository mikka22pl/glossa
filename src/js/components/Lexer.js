import React, { PropTypes } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router";

import { LEXER_MODAL_DELETE_SHOW } from "../constants";
import { LEXER_ON_EDIT } from "../actions/lexer";
import { addToCategory, editLexer } from "../actions/lexer";

class Lexer extends React.Component {

	constructor(props) {
		super(props);

		this.modalDeleteShow = this.modalDeleteShow.bind(this);
		this.addChildren = this.addChildren.bind(this);
		//this.onEdit = this.onEdit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	modalDeleteShow(event) {
		const id = Number(event.target.dataset.id);
		const name = event.target.dataset.name;
		this.props.dispatch({
			type: LEXER_MODAL_DELETE_SHOW,
			id: id,
			name: name
		});
	}

	handleEdit() {
		this.props.onEdit(this.props.lexer)
	}

	addChildren() {
		console.log('clicked ' + this.props.lexer.id);
		this.props.dispatch(addToCategory(this.props.lexer));
		this.props.onShow(this.props.lexer.id);
	}

	render() {
		const lexer = this.props.lexer;
		return (
			<div>
				<span>{lexer.name} {lexer.code}</span>
				<Link to={'/lexers/' + lexer.id}>
					<Button bsSize="xsmall" onClick={this.addChildren}>
						Show <Glyphicon glyph="plus" />
					</Button>
				</Link>
				<Link to={'/lexer-edit/' + lexer.id}>
					<Button bsSize="xsmall" onClick={this.handleEdit}>
						Edit <Glyphicon glyph="edit" />
					</Button>
				</Link>
        <Button bsSize="xsmall" data-id={lexer.id} data-name={lexer.name}
          onClick={this.modalDeleteShow}>
          Delete <Glyphicon glyph="remove-circle" />
        </Button>
			</div>
		);
	}
};

Lexer.propTypes = {
	lexer: PropTypes.object.isRequired,
	onEdit: PropTypes.func
}

export default connect()(Lexer);
