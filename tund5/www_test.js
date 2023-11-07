const http = require("http");

http.createServer(function(req, res){
	//määrame tagastatavate andmete päise, et on veebileht
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Elika, veebiprogrammeerimine 2023</title>\n</head>\n<body>');
	res.write('\n\t<h1>Elika</h1>\n\t<p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudis õppetöö raames!</p>\n\t<p>Lorem ipsum dolor sit amet,</p>\n\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>\n\t<hr>\n\t<p>Kursus, mille raames leht tehti on: veebiprogrammeerimine.</p>');

	//et see kõik valmiks ja ära saadetaks
	return res.end();
}).listen(5215);