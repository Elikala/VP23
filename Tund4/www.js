const http = require("http");
const path = require ("path");
const url= require("url");
const fs = require("fs");

const pageHead = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Elika, veebiprogrammeerimine 2023</title><script>console.log("See töötab!");</script></head><body>'
const pageBanner = '\n\t<img src="banner.png" alt="Lehe banner">\n'
const pageBody = '<h1>Elika</h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank"/> TLÜ </a> Digitehnolooiate instituudis Õppetöö raames</p><hr><p>Olen Elika Laur</p><p>Lorem ipsum dolor sit amet.</p><p>Ut enim ad minim veniam.</p>'
const pageFoot =' '

http.createServer(function(req, res){
	console.log(url.parse(req.url, true)); 
	let currentURL = (url.parse(req.url, true)); 
	if(currentURL.pathname === "/"){
		//määrame tagastavate andmete päise, et on veebileht 
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write(pageFoot);
		//et see kõik valmiks ja ära saadetaks
		res.write ("</body></html>");
		
		return res.end();
		
	} else if (currentURL.pathname === "/banner.png"){
		console.log("Tahan pilti!");
		let filePath = path.join(__dirname, "public", "banner/banner.png"); 
		fs.readFile(filePath, (err, data) =>{
			if(err){
				throw err;
			} 
			else {
				res.writeHead(200, {"Content-Type": "image/png"});
				res.end(data);
			}
			
		});
	}
		
}).listen(5215);



