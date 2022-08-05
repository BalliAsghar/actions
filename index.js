import Express from "express";
import cors from "cors";
const app = Express();

app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;
