import express from "express";
import request from "supertest";

const app = express();

test("Test ExpressJS", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World");
});