import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as languageActions from '../../actions/language';
import Language from "./language";

class Languages extends React.Component {

	componentDidMount() {
	  console.log('Languages :: mounted.');
	}

	render() {
		console.log('Languages');
		var nodes = this.props.languages.map(function(item) {
			return (
				<Language {...item} key={item.id}></Language>
			);
		});
		return (
			<div class="content">
        <h3>Języki</h3>
				<div class="row languages">
					<h3>Languages</h3>
	        {nodes}
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return ({
		language: state.language,
		languages: state.languages
	})
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(languageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Languages);
