import Request from "supertest";
import Server from "../index.js";

afterAll(() => Server.close());

describe("Backend", () => {
  it("should return a message in JSON", async () => {
    const response = await Request(Server.app).get("/message");
    expect(response.body.message).toBe("Hello World");
  });

  it("should return a message", async () => {
    const response = await Request(Server.app).get("/");
    expect(response.text).toBe("Hello World");
  });
});
