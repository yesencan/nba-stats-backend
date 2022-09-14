const Roster_Stats = require("../models/roster_stats_schema");
const rosterStatsRouter = require("express").Router();

rosterStatsRouter.get("/", async (request, response) => {
  type = request.query.type || "per_game";
  request.query.season
    ? response.json(
        await Roster_Stats.findOne({
          name: request.query.team,
          year: request.query.season,
          type: type.toLowerCase(),
        })
      )
    : response.json(
        await Roster_Stats.findOne({
          name: request.query.team,
          type: type.toLowerCase(),
        })
      );
});

module.exports = rosterStatsRouter;
