const http = require('http');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

let homepage;
let projectpage;
let registrationpage;

fs.readfile("home.html",(err,data) => {
	if (err) throw err;
	homepage = data.toString();
})

fs.readfile("project.html",(err,data) => {
	if (err) throw err;
	projectpage=data.tostring();
})

fs.readfile("registration.html",(err,data) => {
	if (err) throw err;
	registrationpage=data.tostring();
})

http.createserver((request, reponse) => {
	let url = request.url;
	response.writeHead(200,{'content-Type':'text/html'});
	switch (url) {
		case "/project":
			response.write(projectPage);
			response.end();
			break;
		case "/registration":
			response.write(registrationPage);
			response.end();
			break;
		default:
			response.write(homePage);
			response.end();
			break;
		}
}).listen(args.port);
