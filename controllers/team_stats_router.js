const Team_Stats = require("../models/team_stats_schema");
const teamStatsRouter = require("express").Router();

teamStatsRouter.get("/", async (request, response) => {
  request.query.season
    ? response.json(
        await Team_Stats.findOne({
          name: request.query.team,
          year: request.query.season,
        })
      )
    : response.json(
        await Team_Stats.find({
          name: request.query.team,
        })
      );
});

module.exports = teamStatsRouter;
