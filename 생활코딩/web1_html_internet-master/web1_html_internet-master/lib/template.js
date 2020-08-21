module.exports = {
  HTML: function (title, list, body, control) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
     </html>
    `;
  },
  list: function (fileList) {
    var list = "<ul>";
    var i = 0;
    while (i < fileList.length) {
      list += `<li><a href="/?id=${fileList[i]}"> ${fileList[i]}</a></li>`;
      i += 1;
    }
    list += "</ul>";
    return list;
  },
};
