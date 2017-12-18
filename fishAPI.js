/* eslint no-console: 0 */
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const buffer = fs.readFileSync("./data.json");
const fishesObj = JSON.parse(buffer);
const app = express();
app.use(cors());
const likedFishes = fishesObj.fishes.map(fish => ({
  ...fish,
  likes: `${Math.floor(Math.random() * 1000)}`
}));

app.get("/fish", (req, res) => {
  setTimeout(() => res.json(fishesObj), Math.floor(Math.random() * 5000));
});

app.get("/fish/:id", (req, res) => {
  const fish = likedFishes.find(item => item.id === req.params.id);
  if (fish) {
    console.log(fish.title);
    setTimeout(() => res.json(fish), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: "fish not found" });
  }
});

const port = 3001;
console.log(`Starting server on port ${port}`);
console.log(`Generating new random ratings`);
app.listen(port);
