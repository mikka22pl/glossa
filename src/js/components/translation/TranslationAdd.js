import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { saveSentenceTranslation } from '../../actions/translation/saveSentenceTranslation';

class TranslationAdd extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.some = this.some.bind(this);
  }

  some(data) {
    console.log('data', data);
    const { template, words } = this.props;
    console.log('add translation', template);
    console.log('words', words);

    this.props.addTranslationCallback(template.id, words, data.translation);
    this.props.reset();
  }

  render() {
    const { handleSubmit, pristine, reset, submitting  } = this.props;
    return (
      <div>
        <form class="form-horizontal" onSubmit={handleSubmit(this.some)} method="post">
          <h4>Translation</h4>
          <div class="form-group">
            <div class="col-sm-10">
              <Field name="translation" component="textarea" type="text" className="form-control" />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" disabled={pristine || submitting}>Submit</button>
            <button type="button" class="btn btn-default" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
      </div>
    );
  }
}

TranslationAdd.defaultProps = {
  template: {},
  words: []
};
TranslationAdd.propTypes = {
  template: PropTypes.object.isRequired,
  words: PropTypes.array,
  addTranslationCallback: PropTypes.func
};
TranslationAdd = reduxForm({
  form: 'translation-add'
})(TranslationAdd);
export default TranslationAdd;
