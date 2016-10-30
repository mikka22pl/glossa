import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router";
import { CHOOSE_LANGUAGE } from '../../constants';

import { chooseLanguage } from '../../actions/language';

@connect((store) => {
	return {
		language: store.language
	};
})

export default class Language extends React.Component {
	constructor(props) {
		super(props);
		this.onLanguageChange = this.onLanguageChange.bind(this);
	}

	onLanguageChange(event) {
	  const language_id = Number(event.target.dataset.id);
		this.props.dispatch(chooseLanguage(language_id));
	}

	render() {

		return (
			<div class="col-sm-2 language">
				<Link onClick={this.onLanguageChange} data-id={this.props.id}>
					<img src={'images/flag_' + this.props.code + '.gif'} title={this.props.name} data-id={this.props.id} />
					<span data-id={this.props.id}>{this.props.name}</span>
				</Link>
			</div>
		);
	}
};
