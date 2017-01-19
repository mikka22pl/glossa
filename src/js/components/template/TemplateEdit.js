import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

class TemplateEdit extends React.Component {

  constructor(props) {
    super(props);
    this.renderSlots = this.renderSlots.bind(this);
  }

  renderFixedWords({fields, meta: { error }}) {
    return (
      <div class="fixed-words">
        <div class="pull-right">
          <button type="button" onClick={() => fields.push({})}>Add FixedWords</button>
        </div>
        {fields.map((fw, index) =>
          <div key={index} class="form-group">
            <div class="col-sm-offset-3 col-sm-3">
              <Field name={`${fw}.id`} component="input" className="form-control" />
            </div>
            <div class="col-sm-2">
              <button type="button" onClick={() => fields.remove(index)}>Remove FixedWord</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  renderSpecifies({fields, meta: { error }, formTypeOptions}) {
    return (
      <div class="specifies">
        <div class="pull-right">
          <button type="button" onClick={() => fields.push({})}>Add Specify</button>
        </div>
        {fields.map((specify, index) =>
          <div key={index} class="form-group">
            <div class="col-sm-offset-2 col-sm-3">
              <Field name={`${specify}.id`} component="select" className="form-control">
                <option></option>
                {formTypeOptions}
              </Field>
            </div>
            <div class="col-sm-3">
              <Field name={`${specify}.fixedWordId`} component="input" type="text" className="form-control"></Field>
            </div>
            <div class="col-sm-2">
              <button type="button" onClick={() => fields.remove(index)}>Remove Spec</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  renderSlots({fields, meta: { touched, error }, groupOptions, typeOptions, formTypeOptions }) {
    return (
      <div class="clearfix">
        <div class="pull-right">
          <button type="button" onClick={() => fields.push({})}>Add Slot</button>
        </div>
        {fields.map((slot, index) =>
          <div key={index} class="form-group">
            <div class="row">
              <label class="col-sm-2 control-label">Slot {index}:</label>
              <div class="col-sm-3">
                <Field name={`${slot}.group`} component="select" className="form-control">
                  <option></option>
                  {groupOptions}
                </Field>
              </div>
              <div class="col-sm-3">
                <Field name={`${slot}.type`} component="select" className="form-control">
                  <option></option>
                  {typeOptions}
                </Field>
              </div>
              <div class="col-sm-2">
                <button type="button" onClick={() => fields.remove(index)}>Remove Slot</button>
              </div>
            </div>
            <div class="row">
              <FieldArray name={`${slot}.fixedWords`} component={this.renderFixedWords} />
            </div>
            <div class="row">
              <FieldArray name={`${slot}.specifies`} component={this.renderSpecifies} formTypeOptions={formTypeOptions} />
            </div>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { handleSubmit, groups, types, formTypes, onSubmit, pristine, submitting } = this.props;
    const groupOptions = groups.map((lexer) => <option key={lexer.id} value={lexer.id}>{lexer.name}</option>);
    const typeOptions = types.map((lexer) => <option key={lexer.id} value={lexer.id}>{lexer.name}</option>);
    const formTypeOptions = formTypes.map((lexer) => <option key={lexer.id} value={lexer.id}>{lexer.name}</option>);
    return (
      <div>
        <form class="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label for="fn-templ-struct" class="col-sm-2 control-label">Template structure:</label>
            <div class="col-sm-10">
              <Field id="fn-templ-struct" name="name" component="input" type="text" className="form-control" />
            </div>
          </div>

          <FieldArray name="slots" component={this.renderSlots}
            groupOptions={groupOptions}
            typeOptions={typeOptions}
            formTypeOptions={formTypeOptions} />

          <div class="form-group">
          </div>
          <div class="form-group">
            <button type="submit" disabled={pristine || submitting} class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

TemplateEdit = reduxForm({
  form: 'template-edit'
})(TemplateEdit);

TemplateEdit = connect(state => ({
  initialValues: {
    ...state.template.details,
    slots: state.template.details.items.map((item, idx) => {
      return {
        id: item.id,
        ordering: item.ordering,
        group: item.functionWord.id,
        type: item.type.id,
        connected: item.connected,
        specifies: (state.template.details.slotspecs.list[item.ordering+1] || []).map((spec, sidx) => {
          return {id: spec.id};
        }),
        fixedWords: item.fixedWords.map((fw, fidx) => {
          return { id: fw.id, slotId: item.id };
        })
      };
    })
  }
}))(TemplateEdit);

TemplateEdit.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.object,
  groups: PropTypes.array,
  types: PropTypes.array,
  formTypes: PropTypes.array
}
export default TemplateEdit;
