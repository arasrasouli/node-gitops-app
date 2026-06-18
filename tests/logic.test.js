// CATEGORY 1: Logic tests (unit) — pure functions, no server.
const { buildGreeting, isHealthy, APP_VERSION } = require("../src/logic");

describe("buildGreeting (logic)", () => {
  test("uses the provided name", () => {
    expect(buildGreeting("Aras").message).toBe("Hello, Aras!");
  });
  test("falls back to 'World' when empty", () => {
    expect(buildGreeting("").message).toBe("Hello, World!");
  });
  test("trims whitespace", () => {
    expect(buildGreeting("  Aras  ").message).toBe("Hello, Aras!");
  });
  test("includes the version", () => {
    expect(buildGreeting("Aras").version).toBe(APP_VERSION);
  });
});

describe("isHealthy (logic)", () => {
  test("reports ok", () => {
    expect(isHealthy()).toEqual({ status: "ok" });
  });
});
