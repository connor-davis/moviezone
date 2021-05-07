let express = require("express");
let next = require("next");
let open = require("open");

let dev = process.env.NODE_ENV !== "production";
let app = next({ dev });
let handle = app.getRequestHandler();

let { routes } = require("./api");

app
  .prepare()
  .then(() => {
    let server = express();

    server.use("/api", routes);

    server.get("*", (request, response) => {
      return handle(request, response);
    });

    server.listen(3000, async () => {
      console.log("> Ready on http://localhost:3000");
      await open("http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
