import React from "react";
import { Form, FormControl, FormGroup, Button, Col, PageHeader } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

class LexerEdit extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Lexer add/edit</PageHeader>
        <Form horizontal>
          <Field name="name" component={LexerEdit.renderName}/>
          <Field name="descr" component={LexerEdit.renderDescr}/>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Button type="submit">Save Lexer</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

  static renderName(props) {
    return (
      <FormGroup>
        <Col sm={2}>Name:</Col>
        <Col sm={8}>
          <FormControl {...props.input} id="name" type="text" placeholder="Name" />
        </Col>
      </FormGroup>
    );
  }

  static renderDescr(props) {
    return (
      <FormGroup>
        <Col sm={2}>Descr:</Col>
        <Col sm={8}>
          <FormControl {...props.input} id="descr" type="text" placeholder="Descripton" />
        </Col>
      </FormGroup>
    );
  }
}

// decorate the form component
export default LexerEdit = reduxForm({
  form: 'lexer_edit'
})(LexerEdit);
