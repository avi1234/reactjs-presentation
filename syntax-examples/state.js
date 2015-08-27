var HelloWorld = React.createClass({
	getInitialState:function(){
		return {name:"Dan"}
	},
	updateName:function(){
		if(this.state.name === "Dan") {
			this.setState({name:"Jane"});
		} else {
			this.setState({name:"Dan"});
		}
	},
	render: function(){
		return React.createElement("h2",null,"Hello ", this.state.name, 
			React.createElement("button",{type:"button", onClick:this.updateName},"Change")
		);
	}
});

React.render(<HelloWorld />,document.body);