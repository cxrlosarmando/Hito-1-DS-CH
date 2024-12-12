import request from "supertest"
import express  from "express"
import{ describe, expect, it, } from "vitest"

const app = express()

app.get("/", (req, res) => {
    res.json({ok: true})

})
describe ("test, express", async () => {
it("GET / should return code 200", async () =>{
    const response = await request(app).get("/")
    const statusCode = response.statusCode;

    expect(statusCode).toBe(200)
})
})

app.get("/api/delete", (req, res) => {
    res.json({ok: true})

})
describe ("test, express", async () => {
it("GET / should return code 200", async () =>{
    const response = await request(app).get("/")
    const statusCode = response.statusCode;

    expect(statusCode).toBe(200)
})
})

app.get("/api/update/:id", (req, res) => {
    res.json({ok: true})

})
describe ("test, express", async () => {
it("GET / should return code 200", async () =>{
    const response = await request(app).get("/")
    const statusCode = response.statusCode;

    expect(statusCode).toBe(200)
})
})


app.get("/:id", (req, res) => {
    res.json({ok: true})

})
describe ("test, express", async () => {
it("GET / should return code 200", async () =>{
    const response = await request(app).get("/")
    const statusCode = response.statusCode;

    expect(statusCode).toBe(200)
})
})

