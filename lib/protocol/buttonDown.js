var http = require("http");

exports.command = function(callback) 
{
	var commandOptions =  {
		path: "/session/:sessionId/buttondown",
		method: "POST"
	}
	
	var data = {};
		
	this.executeProtocolCommand(
		commandOptions, 
		this.proxyResponseNoReturn(callback), 
		data
	);
};