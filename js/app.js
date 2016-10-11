
var Package = React.createClass({
	render: function() {
		return (
			<div className="package">
				<h3>Package</h3>
			</div>
		);
	}
});

const content = document.getElementById('content');

ReactDOM.render(<Package />, content);
