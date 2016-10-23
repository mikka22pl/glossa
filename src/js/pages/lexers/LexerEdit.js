import React from "react";
import { Form, FormControl, FormGroup, Button, Col, PageHeader, HelpBlock } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";

class LexerEdit extends React.Component {

  form_type; // add or edit

  constructor(props) {
    super(props);
    this.form_type =  (props.initialValues.id > 0) ? 'edit' : 'add';
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(values) {
    this.props.dispatch({
      type: 'users.' + this.form_type,
      id: values.id,
      name: values.name,
      descr: values.descr
    });
    this.props.dispatch(goBack());
  }

  render() {
    return (
      <div>
        <PageHeader>Lexer {'edit' === this.form_type ? 'edit' : 'add'}</PageHeader>
        <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
          <Field name="name" component={LexerEdit.renderName}/>
          <Field name="descr" component={LexerEdit.renderDescr}/>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Button type="submit" disabled={this.props.invalid || this.props.submitting}>Save Lexer</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

  static renderName(props) {
    return (
      <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
        <Col sm={2}>Name:</Col>
        <Col sm={8}>
          <FormControl {...props.input} id="name" type="text" placeholder="Name" />
          <FormControl.Feedback />
          <HelpBlock>{props.meta.touched && props.meta.error ? props.meta.error : null}</HelpBlock>
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
LexerEdit = reduxForm({
  form: 'lexer_edit',
  validate: function(values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required.';
    }
    return errors;
  }
})(LexerEdit);

function mapStateToProps(state, own_props) {
  // set the form data
  let form_data = {
    id: 0,
    name: '',
    descr: ''
  };
  for (const lexer of state.lexers.list) {
    if (lexer.id === Number(own_props.params.id)) {
      form_data = lexer;
      break;
    }
  }
  return {
    initialValues: form_data
  }
}
export default connect(mapStateToProps)(LexerEdit);
