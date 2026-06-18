// Pure business logic — no Express, no HTTP.
// Kept separate so the logic tests can exercise it in isolation.

const APP_VERSION = "v1";

function buildGreeting(name) {
  const who = name && name.trim() !== "" ? name.trim() : "World";
  return { message: `Hello, ${who}!`, version: APP_VERSION };
}

function isHealthy() {
  return { status: "ok" };
}

module.exports = { buildGreeting, isHealthy, APP_VERSION };
