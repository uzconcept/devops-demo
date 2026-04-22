const request = require("supertest");
const app = require("./app");

test("GET / should return hello message", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello from version 2 Super excited to do DEVOPS, Thank you Chatgpt 🚀");
});