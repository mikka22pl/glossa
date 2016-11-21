import React from 'react';

class WordsList extends React.Component {
  render() {
    var nodes = this.props.list.map(function(item) {
			return (
				<li key={item.id}>{item.name}
          <ul class="list-group">
            {item.groups.map((group) => <li>{group.name}</li>)}
          </ul>
        </li>
			);
		});
    return (
      <div class="words-list">
        <ul>
          {nodes}
        </ul>
      </div>
    );
  }
}

export default WordsList;
