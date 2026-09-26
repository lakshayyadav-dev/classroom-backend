import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (_request, response) => {
  response.send("Hello World");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});