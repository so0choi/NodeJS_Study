var path = require("path");
module.exports = function (request, response, qs, fs) {
  var body = "";
  request.on("data", function (data) {
    body += data;
  });
  request.on("end", function () {
    var post = qs.parse(body);
    var id = post.id;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function (err) {
      response.writeHead(302, { Location: "/" });
      response.end();
    });
  });
};
