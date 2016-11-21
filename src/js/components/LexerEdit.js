import React from "react";
import { bindActionCreators } from 'redux';
import { Form, FormControl, FormGroup, Button, Col, PageHeader, HelpBlock } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import ToggleDisplay from "react-toggle-display";

// import * as lexerActions from '../actions/lexer';

class LexerEdit extends React.Component {

  form_type; // add or edit

  constructor(props) {
    super(props);
    // this.form_type = this.props.initialValues.id ? 'EDIT' : 'ADD'; // (props.initialValues.id > 0) ? 'EDIT' : 'ADD';
    // this.props.initialize(this.props.initialValues);
    this.form_type = props.initialValues.id ? 'EDIT' : 'ADD';
    this.formSubmit = this.formSubmit.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount()', this.props.initialValues);

  }
  componentWillUpdate() {
    console.log('componentWillUpdate()');
    //this.form_type = this.props.initialValues.id ? 'EDIT' : 'ADD'; // (props.initialValues.id > 0) ? 'EDIT' : 'ADD';
    //this.props.initialize(this.props.initialValues);
    //this.props.initialize(this.props.lexer);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.lexer);
    // this.form_type = nextProps.lexer.id ? 'EDIT' : 'ADD'; // (props.initialValues.id > 0) ? 'EDIT' : 'ADD';
    // this.props.initialize(nextProps.lexer);
  }

  formSubmit(values) {
    console.log('formSubmit()', values);
    this.props.onSave({
      form_type: this.form_type,
      id: values.id,
      name: values.name,
      descr: values.descr,
      category: this.props.lexer.category
    });
    /*this.props.dispatch({
      type: 'LEXER_' + this.form_type,
      id: values.id,
      name: values.name,
      descr: values.descr
    });*/
    this.props.dispatch(goBack());
  }

  render() {
    console.log('...rendering');
    return (
      <div>
        <PageHeader>Lexer {'EDIT' === this.form_type ? 'edit' : 'add'}</PageHeader>
        <ToggleDisplay show={this.props.lexer.inprogress}>
          <p>saving...</p>
        </ToggleDisplay>
        <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
          <Field name="name" component={LexerEdit.renderName} />
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

function mapStateToProps(state) {
  let form_data = {
    id: 0,
    name: '',
    descr: ''
  };
  if (state.lexer != 'undefined') {
    form_data = state.lexer
  }
  return {
    initialValues: form_data
  }
}
/*LexerEdit = connect(
  state => ({
    initialValues: state.lexer
  })
)(LexerEdit);*/

// export default LexerEdit;
export default connect(mapStateToProps)(LexerEdit);
