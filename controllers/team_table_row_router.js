const Team_Table_Row = require("../models/team_table_row_schema");
const teamTableRowRouter = require("express").Router();

teamTableRowRouter.get("/", async (request, response) => {
  request.query.team
    ? response.json(
        await Team_Table_Row.findOne({
          key: request.query.team,
        })
      )
    : response.json(await Team_Table_Row.find({}));
});

module.exports = teamTableRowRouter;
