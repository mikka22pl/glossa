import React from 'react';
import { Field, reduxForm } from 'redux-form';

class WordAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form class="form-horizontal" onSubmit={handleSubmit}>
        <h3>Word Add/Edit</h3>
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Label:</label>
          <div class="col-sm-10">
            <Field name="word" component="input" type="text" className="form-control" />
          </div>
        </div>
        <div class="form-group">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

WordAdd = reduxForm({
  form: 'wordadd'
})(WordAdd);

export default WordAdd;
