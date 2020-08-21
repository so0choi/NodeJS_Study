var path = require("path");
module.exports = {
  update: function (queryData, template, response, fs) {
    fs.readdir("./data", function (err, fileList) {
      var filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
        var list = template.list(fileList);
        var title = filteredId;
        var html = template.HTML(
          title,
          list,
          `
                <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                    <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
                </form>
                `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  },
  update_process: function (request, response, qs, fs) {
    var body = "";
    request.on("data", function (data) {
      body += data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var id = post.id;
      var description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, function (err) {});
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  },
};
