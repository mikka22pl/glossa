import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import ToggleDisplay from 'react-toggle-display';

import * as languageActions from '../../actions/language';
import Language from "./language";

class Languages extends React.Component {

	constructor(props) {
		super(props);
		this.props.fetchLanguages();
	}

	componentWillMount() {
		console.log('fetching data');
	}
	componentDidMount() {
	  console.log('Languages :: mounted.');
	}

	render() {
		var nodes = this.props.languages.list.map(function(item) {
			return (
				<Language {...item} key={item.id}></Language>
			);
		});
		return (
			<div class="content">
        <h3>Języki</h3>
				<div class="row languages">
					<h3>Languages</h3>
					<ToggleDisplay show={this.props.languages.fetching}>
						<p>loading... <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></p>
					</ToggleDisplay>
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
