import React, { PropTypes } from 'react';

class SlotSpecifiedOrdered extends React.Component {

  render() {
    const { item } = this.props;
    const items = (item || []).map((el) => <div key={el.id}>{el.name}</div>);
    return (
      <div class="col-sm-2">
        {items}
      </div>
    );
  }
}
SlotSpecifiedOrdered.propTypes = {
  item: PropTypes.array
}
export default SlotSpecifiedOrdered;
