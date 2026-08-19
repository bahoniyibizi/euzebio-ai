const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "Euzebio AI Backend",
    message: "Euzebio AI backend is running successfully."
  });
});

app.post("/api/chat", (req, res) => {
  const message = req.body.message || "";

  res.json({
    reply: `Euzebio AI yakiriye ubutumwa bwawe: ${message}`
  });
});

app.listen(PORT, () => {
  console.log(`Euzebio AI Backend running on port ${PORT}`);
});
