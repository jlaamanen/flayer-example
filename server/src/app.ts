import { createServer } from "flayer";

const server = createServer({
  products: require("./modules/products"),
  user: require("./modules/user"),
});

if (process.env.NODE_ENV === "development") {
  server.generatePackage({
    path: "../server-pkg",
    packageJson: {
      name: "server-pkg",
      version: "0.0.1",
    },
  });
}

server.start({
  port: 1234,
  session: {
    secret: "V3ryZ3kr3tW0rd",
  },
});
