var React = require('react');

var InputField = React.createClass({
	getInitialState: function(){
		return {value:""};
	},
	onChange: function(e){
		var val = e.target.value;
		this.setState({value: val});
	},
	clear: function(){
		this.setState({value: ""});
	},
	render: function(){
		return (
			<div className="form-group col-sm-6">
				<input type="text" className="form-control" placeholder="NUMBER" value={this.state.value} onChange={this.onChange}/>
			</div>
		);

	}
});

module.exports = InputField;