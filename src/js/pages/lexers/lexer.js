import React from "react";

export default class Lexer extends React.Component {
	render() {
		return (
			<div class="lexer">
				<span>{this.props.name} {this.props.code}</span>
			</div>
		);
	}
};
