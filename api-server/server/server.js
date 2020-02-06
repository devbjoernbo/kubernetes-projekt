const compression = require("compression");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

// initialize services
const { apolloServer } = require("./setup/setup_services");

// initialize app;
const app = express();

// cors config
app.use(cors({ credentials: true, origin: "http://localhost:4000" }));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using sessions
app.use(
  session({
    name: "session",
    resave: true,
    saveUninitialized: true,
    secret: "sdsewrjuksdfsdf"
  })
);

// use passport
app.use(passport.initialize());
app.use(passport.session());

// compress all responses
app.use(compression());

// use apollo server-middleware
apolloServer.applyMiddleware({
  app,
  path: "/graphql",
  cors: { credentials: true, origin: "http://localhost:4000" }
});

app.listen(3000, function() {
  console.log(`Running API-server at localhost:3000`);
});
