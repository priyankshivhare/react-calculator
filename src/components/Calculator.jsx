var React = require('react');
var InputField = require('./InputField.jsx');
var marginFix = {
	marginTop: 12
};
var marginRight = {
	marginRight: 4	
};
var Calculator = React.createClass({
	addition: function(){
		var result = parseInt(this.refs.iF1.state.value) + parseInt(this.refs.iF2.state.value);
		document.getElementById("opResult").innerHTML = result;
	},
	substraction: function(){
		var result = parseInt(this.refs.iF1.state.value) - parseInt(this.refs.iF2.state.value);
		document.getElementById("opResult").innerHTML = result;
	},
	multiplication: function(){
		var result = parseInt(this.refs.iF1.state.value) * parseInt(this.refs.iF2.state.value);
		document.getElementById("opResult").innerHTML = result;
	},
	division: function(){
		var result = parseInt(this.refs.iF1.state.value) / parseInt(this.refs.iF2.state.value);
		document.getElementById("opResult").innerHTML = result;
	},
	clearFields: function(){
		this.refs.iF1.clear();
		this.refs.iF2.clear();
		document.getElementById("opResult").innerHTML = "";
	},
	render: function(){
		return (
			<div className="panel panel-default col-sm-6">
				<div className="panel-body">
					<h1 className="text-center">Simple Calculator</h1>
					<InputField ref="iF1" />
					<InputField ref="iF2" />
					<button style={marginRight} className="btn btn-primary" onClick={this.addition}>Add</button>
					<button style={marginRight} className="btn btn-primary" onClick={this.substraction}>Substract</button>
					<button style={marginRight} className="btn btn-primary" onClick={this.multiplication}>Multiply</button>
					<button style={marginRight} className="btn btn-primary" onClick={this.division}>Divide</button>
					<div style={marginFix} className="row form-group">
						<p className="form-control col-sm-9" id="opResult"></p>
						<button className="btn btn-danger col-sm-3" onClick={this.clearFields}>Clear</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Calculator;