import Request from "supertest";
import app from "../index.js";

describe("Backend", () => {
  it("should return a message in JSON", async () => {
    const response = await Request(app).get("/message");
    expect(response.body.message).toBe("Hello World");
  });

  it("should return a message", async () => {
    const response = await Request(app).get("/");
    expect(response.text).toBe("Hello World");
  });
});
