import React from "react";

export default class Language extends React.Component {
	render() {
		return (
			<div class="language">
				<img src={'images/flag_' + this.props.code + '.gif'} title={this.props.name} />
				<span>{this.props.name}</span>
			</div>
		);
	}
};
