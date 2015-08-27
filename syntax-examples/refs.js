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

var CompositeComponent = React.createClass({
	getInitialState:function(){
		return {val1: "",
			val2: ""};
	},
	componentDidMount:function(){
		this.refresh();
	},
	refresh:function(){
		this.setState({val1: this.refs.hello1.state.name,
			val2: this.refs.hello2.state.name});
	},
	render:function(){
		return <div>
			<HelloWorld ref="hello1" name="Avi"/>
			<HelloWorld ref="hello2" name="Ron"/>
			val1 {this.state.val1}
			<br />
			val2 {this.state.val2}
			<br />
			<button type="button" onClick={this.refresh}>Refresh!</button>
		</div>;
	}
});

React.render(<CompositeComponent/>,document.body);



