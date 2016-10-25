import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router";

import { LEXER_MODAL_DELETE_SHOW } from "../../constants";

class Lexer extends React.Component {

	constructor(props) {
		super(props);

		this.modalDeleteShow = this.modalDeleteShow.bind(this);
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

	render() {
		const lexer = this.props.lexer;
		return (
			<div>
				<span>{lexer.name} {lexer.code}</span>
				<Link to={'/lexer-edit/' + lexer.id}>
					<Button bsSize="xsmall">
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
	lexer: React.PropTypes.object.isRequired
}

export default connect()(Lexer);
