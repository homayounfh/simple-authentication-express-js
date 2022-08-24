const http = require("http");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
