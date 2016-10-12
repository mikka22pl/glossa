import React from "react";

import Header from "./header";
import Mainpage from "./mainpage";
import Footer from "./footer";

export default class Layout extends React.Component {
	render() {
		return (
			<div class="layout">
				<Header />
				<Mainpage />
				<Footer />
			</div>
		);
	}
};
