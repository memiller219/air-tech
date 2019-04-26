const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
});

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);


app.listen(process.env.PORT, process.env.IP, function() {
    console.log('our app is running');
});

