// Express server. Depends on the logic module, so logic stays testable
// and this app can be imported by the endpoint tests.

const express = require("express");
const { buildGreeting, isHealthy } = require("./logic");

const app = express();

app.get("/", (req, res) => {
  res.json(buildGreeting(req.query.name));
});

app.get("/health", (req, res) => {
  res.json(isHealthy());
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App listening on port ${port}`));
}
