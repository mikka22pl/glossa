import React from "react";

import Languages from "./languages/languages";

export default class Mainpage extends React.Component {
	
	render() {
		return (
			<div class="content">
        <h3>Page name</h3>
				<Languages />
			</div>
		);
	}
};
