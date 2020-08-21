var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
const { create } = require("domain");
var path = require("path");
var sanitizeHtml = require("sanitize-html");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;

  const template = require("./lib/template.js");
  const create = require("./lib/create.js");
  const update = require("./lib/update");
  const del = require("./lib/delete.js");
  const index = require("./lib/index.js");

  if (pathName === "/") {
    index(template, queryData, response);
  } else if (pathName === "/create") {
    create.create(template, response);
  } else if (pathName === "/create_process") {
    create.create_process(request, response, qs);
  } else if (pathName === "/update") {
    update.update(queryData, template, response, fs);
  } else if (pathName === "/update_process") {
    update.update_process(request, response, qs, fs);
  } else if (pathName === "/delete_process") {
    del(request, response, qs, fs);
  } else {
    response.writeHead(200);
    response.end("Not Found");
  }
});
app.listen(3000);
