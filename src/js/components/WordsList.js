import React from 'react';

class WordsList extends React.Component {
  render() {
    var nodes = this.props.list.map(function(item) {
			return (
				<li key={item.id}>{item.name}</li>
			);
		});
    return (
      <div>
        <ul>
          {nodes}
        </ul>
      </div>
    );
  }
}

export default WordsList;
