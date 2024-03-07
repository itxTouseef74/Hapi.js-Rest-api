"use strict";

const Hapi = require("@hapi/hapi");
const Mongoose = require("mongoose");
const routes = require("../Routes/routes.js");

const init = async () => {
  const server = Hapi.server({ port: 3000, host: "localhost" });

 
  await Mongoose.connect("mongodb://localhost/hapi-rest-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  
  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
