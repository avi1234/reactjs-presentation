var App = React.createClass({
	getInitialState:function(){
		return { "items":[]};
	},
	componentDidMount:function(){
		$.ajax({
		      url: "feed.json",
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
  		        this.setState(data);
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
	},
	render:function(){
		var items = this.state.items.map(function(item,i){
			return <FeedItem key={i} item={item} />;
		})
		return <div className="container">
			<h1>My Wall</h1>
			{items}
		</div>;
	}
});

var FeedItem = React.createClass({
	render:function(){
		
		return <div className="col-md-8 col-md-offset-2">
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.item.title}</h3>
				</div>
				<div className="panel-body">
					<p>{this.props.item.body}</p>
					
					<FeedComments value={this.props.item.comments} />
		  		  	
				</div>
			</div>
		</div>;
	}
});

var FeedComments = React.createClass({
	getInitialState: function(){
		return {comments: this.props.value};
	},
	addComment: function(e){
		e.preventDefault();
		this.setState({comments: this.state.comments.concat({
			user_name:e.target[0].value,
			created_at:"Mon Aug 24 12:28:44 IDT 2015",
			user_image:"https://pbs.twimg.com/profile_images/378800000451012500/4628fbb9dc70514d389ed9491243866f_400x400.png",
			body: e.target[1].value
		})});
		
		e.target[0].value = "";
		e.target[1].value = "";
	},
	render: function() {
		var comments = this.state.comments.map(function(comment,i){
			return <CommentItem key={i} value={comment} />;
		});
		return <ul className="list-group">
						{comments}
						<li className="list-group-item">
							<form onSubmit={this.addComment} >
								<div className="form-inline">
									Add Your Comment: 
									<input type="text" className="form-control" placeholder="Name" />
							    
									<input type="text" className="form-control" placeholder="Comment" />
							  
									<button type="submit" className="btn btn-default">Submit</button>
								</div>
							</form>
						</li>
					</ul>;
	}
});

var CommentItem = React.createClass({
	render:function(){
		return <li className="list-group-item">
							<div className="media">
								<div className="media-left media-middle">
									<a href="#">
										<img className="media-object" src={this.props.value.user_image} />
									</a>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{this.props.value.user_name} (Mon Aug 24 12:28:44 IDT 2015)</h4>
									{this.props.value.body}
								</div>
							</div>
						</li>;
	}
});

React.render(<App />, document.getElementById("app"));