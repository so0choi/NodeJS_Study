var fs = require("fs");
var path = require("path");
var sanitizeHtml = require("sanitize-html");
module.exports = function (template, queryData, response) {
  fs.readdir("./data", function (err, fileList) {
    var list = template.list(fileList);
    if (queryData.id === undefined) {
      var title = "WELCOMEeeee";
      var description = "Hello, Node.js!";
      var html = template.HTML(
        title,
        list,
        `<h2>${title}</h2>${description}`,
        `<a href="/create">create</a>`
      );
      response.writeHead(200);
      response.end(html);
    } else {
      var filteredId = path.parse(queryData.id).base;
      var title = filteredId;
      fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description, {
          allowedTags: ["h1"],
        });
        var html = template.HTML(
          sanitizedTitle,
          list,
          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
          `<a href="/create">create</a>
          
          <a href="/update?id=${sanitizedTitle}">update</a>
          <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>
          `
        );
        response.writeHead(200);
        response.end(html);
      });
    }
  });
};
