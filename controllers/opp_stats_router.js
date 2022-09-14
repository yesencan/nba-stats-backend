const Opp_Stats = require("../models/opp_stats_schema");
const oppStatsRouter = require("express").Router();

oppStatsRouter.get("/", async (request, response) => {
  request.query.season
    ? response.json(
        await Opp_Stats.findOne({
          name: request.query.team,
          year: request.query.season,
        })
      )
    : response.json(
        await Opp_Stats.find({
          name: request.query.team,
        })
      );
});

module.exports = oppStatsRouter;
