const request = require("supertest");
const app = require("./app");

// ✅ Valid input
//test("POST /message should return message when valid", async () => {
  //const response = await request(app)
   // .post("/message")
   // .send({ text: "Hello DevOps" });

  //expect(response.statusCode).toBe(200);
 // expect(response.body).toEqual({ message: "Hello DevOps" });
//});

test("GET /error should return 500", async () => {
  const response = await request(app).get("/error");

  expect(response.statusCode).toBe(500);
  expect(response.body).toEqual({
    error: "Internal Server Error",
  });
});
// ❌ Missing field
test("POST /message should fail if text is missing", async () => {
  const response = await request(app)
    .post("/message")
    .send({});

  expect(response.statusCode).toBe(400);
  expect(response.body).toEqual({ error: "Text is required" });
});

// ❌ Wrong type
test("POST /message should fail if text is not a string", async () => {
  const response = await request(app)
    .post("/message")
    .send({ text: 123 });

  expect(response.statusCode).toBe(400);
  expect(response.body).toEqual({ error: "Text must be a string" });
});

// ❌ Empty string
test("POST /message should fail if text is empty", async () => {
  const response = await request(app)
    .post("/message")
    .send({ text: "   " });

  expect(response.statusCode).toBe(400);
  expect(response.body).toEqual({ error: "Text cannot be empty" });
});