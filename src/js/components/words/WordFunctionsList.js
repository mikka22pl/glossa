import React, { PropTypes } from 'react';

class WordFunctionsList extends React.Component {
  render() {
    const func = this.props.wordFunc;
    const funcNodes = func.map((fn) => <li key={fn.id} class="asg-func">{fn.name}</li>);
    const cats = this.props.wordCategories || [];
    const catNodes = cats.map((cat) => <li key={cat.id} class="asg-cat">{cat.name}</li>);
    return (
      <ul class="list-group">
        {funcNodes}
        {catNodes}
      </ul>
    )
  }


}

WordFunctionsList.propTypes = {
  wordFunc: PropTypes.array,
  wordCategories: PropTypes.array
};

export default WordFunctionsList;
