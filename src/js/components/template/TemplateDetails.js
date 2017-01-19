import React, { PropTypes } from 'react';

import SlotSpecifiedOrdered from './SlotSpecifiedOrdered';

class TemplateDetails extends React.Component {
  constructor(props) {
    super(props);
    // this.displaySlotSpecifies = this.displaySlotSpecifies.bind(this);
  }

  /*displaySlotSpecifies(ordering) {
    const slotspecs = this.props.slotspecs || [];
    const specs = slotspecs.map((list, ordering) => {
      console.log('ordering', ordering);

    });
  }*/

  render() {
    console.log('TD rendering...');
    const items = this.props.items || [];
    const slotNames = items.map((item) => {
      return (
        <div key={item.id} class="col-sm-2">
          {item.functionWord.name}
        </div>
      );
    });
    const types = items.map((item) => {
      return (
        <div key={item.id} class="col-sm-2">
          {item.type.name}
        </div>
      );
    });

    const { slotspecs } = this.props;
    let specsRendered;
    if (slotspecs && slotspecs.list) {
      specsRendered = Object.keys(slotspecs.list).map((key) => {
        let item = slotspecs.list[key];
        return <SlotSpecifiedOrdered key={key} item={item} />
      });
    }
    return (
      <div>
        TemplateDetails
        <p>{this.props.id}. {this.props.name}</p>
        <div class="row">
          {slotNames}
        </div>
        <div class="row">
          {types}
        </div>
        <div class="row">
          {specsRendered}
        </div>
      </div>
    )
  }
}
TemplateDetails.propTypes = {
  name: PropTypes.string
};

export default TemplateDetails;
