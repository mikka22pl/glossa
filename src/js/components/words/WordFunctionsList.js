import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class WordFunctionsList extends React.Component {
  removeHandler(id) {
    this.props.onRemove(id);
  }
  render() {
    /*const func = this.props.wordFunc;
    const funcNodes = func.map(function(fn) {
      const removeHandler = this.removeHandler;
      return (
        <li key={fn.id} class="asg-func">
          {fn.name}
          <Link onClick={removeHandler.bind(this, fn.id)}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </li>
      );
    }.bind(this));*/
    const cats = this.props.wordCategories || [];
    const catNodes = cats.map(function(cat) {
      const remove2Handler = this.removeHandler;
      const inner = cat.categoryType == 'SPEECH_PART' ? 'asg-func' : 'asg-cat';
      return (
        <li key={cat.id} class={inner}>
          {cat.name}
          <Link onClick={remove2Handler.bind(this, cat.id)}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </li>
      );
    }.bind(this));
    return (
      <ul class="list-group">
        {catNodes}
      </ul>
    )
  }


}

WordFunctionsList.propTypes = {
  wordCategories: PropTypes.array
};

export default WordFunctionsList;
