const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);

    switch (req.url) {
      case "/":
        res.write("<h1>MY HOME PAGE</h1>");
        break;

      case "/hobbies":
        res.write("<h1>MY HOBBIES PAGE</h1>");
        break;

      default:
        res.write("page not found");
        break;
    }

    res.end();
  })
  .listen(8080);
