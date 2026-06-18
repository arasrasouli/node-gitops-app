// CATEGORY 2: Endpoint tests (API) — real HTTP requests via supertest.
const request = require("supertest");
const app = require("../src/server");

describe("GET / (endpoint)", () => {
  test("200 + greeting", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello, World!");
  });
  test("uses name from query", async () => {
    const res = await request(app).get("/?name=Aras");
    expect(res.body.message).toBe("Hello, Aras!");
  });
});

describe("GET /health (endpoint)", () => {
  test("reachable, returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("unknown route", () => {
  test("404", async () => {
    const res = await request(app).get("/nope");
    expect(res.statusCode).toBe(404);
  });
});
