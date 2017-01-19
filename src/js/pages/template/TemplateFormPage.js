import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTemplate } from '../../actions/template/fetchTemplate';
import { fetchSpecs } from '../../actions/slot/fetchSpecs';
import { saveSentenceTranslation } from '../../actions/slot/saveSpecs';
import TemplateEdit from '../../components/template/TemplateEdit';

class TemplateFormPage extends React.Component {

  constructor(props) {
    super(props);
    this.onAddEditTemplate = this.onAddEditTemplate.bind(this);
  }

  onAddEditTemplate(values) {
    console.log('on add edit template', values);
    this.props.saveSpecs(values);
    /*for (var key in values) {
       if (values.hasOwnProperty(key)) {
          alert(key);
       }
    }*/
    //alert('values ' + JSON.stringify(values));
  //  alert('values ' + values.id + '; name='+values.name+'; slots:'+values.slots[0].group);
    //return;
  }

  render() {
    const { lexersTree } = this.props;
    const wordFunction = lexersTree.list.WORD_FUNCTION || {};
    const groups = wordFunction.children || [];
    const slotSpecify = lexersTree.list.SLOT_SPECIFY_TYPE || {};
    const types = slotSpecify.children || [];
    const formTypesRoot = lexersTree.list.FORM_TYPES || {};
    const formTypes = formTypesRoot.children || [];
    return (
      <div>
        <h3>TemplateForm</h3>
        <TemplateEdit onSubmit={this.onAddEditTemplate}
          groups={groups}
          types={types}
          formTypes={formTypes}
          data={this.props.template.details} />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return ({
		template: state.template,
    lexersTree: state.lexersTree
	});
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTemplate: bindActionCreators(fetchTemplate, dispatch),
    fetchSpecs: bindActionCreators(fetchSpecs, dispatch),
    saveSpecs: bindActionCreators(saveSentenceTranslation, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TemplateFormPage);
