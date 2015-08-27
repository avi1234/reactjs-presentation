var LoggerMixin = {
	componentWillMount:function(){
		console.log("will mount");
	},
	componentDidMount:function(){
		console.log("did mount");
	}
};

var HelloWorld = React.createClass({
	mixins:[LoggerMixin],
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
		console.log("render");
		return <h2>
			Hello {this.state.name}
			<button type="button" onClick={this.updateName}>Change</button>
		</h2>;
	}
});

React.render(<HelloWorld name="Avi"/>,document.body);


