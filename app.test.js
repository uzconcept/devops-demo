const request = require("supertest");
const app = require("./app");

// ✅ Test 1
test("POST /message should return the same message", async () => {
  const response = await request(app)
    .post("/message")
    .send({ text: "Hello DevOps" });

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ message: "Hello DevOps" });
});

// ✅ Test 2 (separate, NOT nested)
test("POST /message should fail if no text provided", async () => {
  const response = await request(app)
    .post("/message")
    .send({});

  expect(response.statusCode).toBe(400);
  expect(response.body).toEqual({ error: "Text is required" });
});