import React from "react";
import { connect } from 'react-redux';
import { chooseLanguage } from '../../actions/language';

@connect((store) => {
	return {
		language: store.language
	};
})

export default class Language extends React.Component {
	constructor(props) {
		super(props);
		this.chooseLanguage = this.chooseLanguage.bind(this);
	}
	chooseLanguage(event) {
		// this.props.chooseLanguage(this.props.dataset.id);
	}
	render() {

		return (
			<div class="col-sm-2 language">
				<a href="#" data-id={this.props.id} onClick={this.chooseLanguage}>
					<img src={'images/flag_' + this.props.code + '.gif'} title={this.props.name} />
					<span>{this.props.name}</span>
				</a>
			</div>
		);
	}
};
