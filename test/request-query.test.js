import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Query Parameter", async () => {
    const response = await request(app)
        .get("/")
        .query({ firstName: "tara" , lastName: "arts"});
    expect(response.text).toBe("Hello tara arts");
});