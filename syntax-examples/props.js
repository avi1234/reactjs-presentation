var HelloWorld = React.createClass({
	getInitialState:function(){
		return {name:this.props.name}
	},
	updateName:function(){
		if(this.state.name === "Dan") {
			this.setState({name:"Jane"});
		} else {
			this.setState({name:"Dan"});
		}
	},
	render: function(){
		return <h2>
			Hello {this.state.name}
			<button type="button" onClick={this.updateName}>Change</button>
		</h2>;
	}
});

React.render(<HelloWorld name="Avi"/>,document.body);