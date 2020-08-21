var fs = require("fs");
module.exports = {
  create: function (template, response) {
    fs.readdir("./data", function (err, fileList) {
      var list = template.list(fileList);
      var title = "WEB - create";
      var html = template.HTML(
        title,
        list,
        `<form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
            <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
            <input type="submit">
        </p>
    </form>`,
        ""
      );
      response.writeHead(200);
      response.end(html);
    });
  },
  create_process: function (request, response, qs) {
    var body = "";
    request.on("data", function (data) {
      body += data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  },
};
