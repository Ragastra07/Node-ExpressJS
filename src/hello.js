import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/tara', (req, res) => {
    res.send("Hello tara");
});

app.listen(3000, () => {
    console.info("listening on port 3000...");
});
