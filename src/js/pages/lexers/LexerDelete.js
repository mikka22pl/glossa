import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { LEXER_DELETE, LEXER_MODAL_DELETE_HIDE } from "../../constants";

class LexerDelete extends React.Component {
  constructor(props) {
    super(props);
    this.modalDeleteHide = this.modalDeleteHide.bind(this);
    this.lexerDelete = this.lexerDelete.bind(this);
  }

  modalDeleteHide(event) {
    this.props.dispatch({
      type: LEXER_MODAL_DELETE_HIDE
    });
  }

  lexerDelete(event) {
    this.props.dispatch({
      type: LEXER_DELETE,
      id: this.props.modal_delete.id
    });
    this.props.dispatch({
      type: LEXER_MODAL_DELETE_HIDE
    });
  }

  render() {
    return (
      <Modal show={this.props.modal_delete.show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete&nbsp;
            <strong>{this.props.modal_delete.name}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.modalDeleteHide}>No</Button>
          <Button bsStyle="primary" onClick={this.lexerDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  let modal_delete;
  if (state.lexers.modal && state.lexers.modal.list_delete) {
    modal_delete = state.lexers.modal.list_delete;
  } else {
    modal_delete = {
      show: false,
      id: 0,
      name: ''
    };
  }
  return {
    modal_delete: modal_delete
  }
}

export default connect(mapStateToProps)(LexerDelete);
