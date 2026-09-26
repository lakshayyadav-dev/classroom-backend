import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello WOrld ");
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})