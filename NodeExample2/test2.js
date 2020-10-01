"use strict";

const express = require("express");
const parseurl = require("parseurl");
const session = require("express-session");

const app = express();

const schedule = require("node-schedule");

const date = new Date(2020, 8, 22, 17, 31, 0);
console.log(date);
const j = schedule.scheduleJob(date, () => {
  console.log("no pain no gain");
});
const rule = new schedule.RecurrenceRule();
rule.minute = 3;
const k = schedule.scheduleJob(rule, () => {
  console.log("Lazy");
});

app.listen(3000, () => {
  console.log("listening");
});
