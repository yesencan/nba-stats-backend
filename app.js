const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const rosterRouter = require("./controllers/rosters_router");
const teamStatsRouter = require("./controllers/team_stats_router");
const oppStatsRouter = require("./controllers/opp_stats_router");
const rosterStatsRouter = require("./controllers/roster_stats_router");
const miscStatsRouter = require("./controllers/misc_stats_router");
const playerRouter = require("./controllers/players_router");
const nameToKeyRouter = require("./controllers/name_to_key_router");
const keyToNameRouter = require("./controllers/key_to_name_router");
const teamTableRowRouter = require("./controllers/team_table_row_router");
const mongoose = require("mongoose");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

// app.use(express.static("build"));
app.use(cors());
app.use("/api/rosters", rosterRouter);
app.use("/api/team-stats", teamStatsRouter);
app.use("/api/opp-stats", oppStatsRouter);
app.use("/api/roster-stats", rosterStatsRouter);
app.use("/api/misc-stats", miscStatsRouter);
app.use("/api/players", playerRouter);
app.use("/api/nametokey", nameToKeyRouter);
app.use("/api/keytoname", keyToNameRouter);
app.use("/api/teamtablerow", teamTableRowRouter);

module.exports = app;
