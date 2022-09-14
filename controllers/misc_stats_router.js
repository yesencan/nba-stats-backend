const Misc_Stats = require("../models/misc_stats_schema");
const miscStatsRouter = require("express").Router();

miscStatsRouter.get("/", async (request, response) => {
  request.query.season
    ? response.json(
        await Misc_Stats.findOne({
          name: request.query.team,
          year: request.query.season,
        })
      )
    : response.json(
        await Misc_Stats.find({
          name: request.query.team,
        })
      );
});

module.exports = miscStatsRouter;
