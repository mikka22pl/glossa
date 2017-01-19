import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router';
import { Glyphicon } from "react-bootstrap";

import { fetchTemplate } from '../../actions/template/fetchTemplate';
import { fetchSpecs } from '../../actions/slot/fetchSpecs';
import TemplateDetails from '../../components/template/TemplateDetails';
import TemplateEdit from '../../components/template/TemplateEdit';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { lessonId } = this.props.params;
    this.props.fetchTemplate(lessonId).then(() => {
      const { items } = this.props.template.details;

      items.map((item) => {
        const { templateId, ordering } = item;
        this.props.fetchSpecs(templateId, ordering+1);
      });
    });
  }

  render() {
    const { template, lexersTree } = this.props;
    const details = template ? template.details : {};
    return (
      <div>
        <h3>Template</h3>
        <TemplateDetails {...details} />
        <div>
          <Link to={`/template/form/${details.id}`}>
            Add/edit template <Glyphicon glyph="plus-sign"/>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return ({
		template: state.template,
    lexersTree: state.lexersTree,
    router: ownProps.router
	});
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTemplate: bindActionCreators(fetchTemplate, dispatch),
    fetchSpecs: bindActionCreators(fetchSpecs, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Template));
