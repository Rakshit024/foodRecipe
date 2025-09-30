const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/userRoute"));
app.use("/recipe", require("./routes/recipeRoute"));
app.listen(PORT, (err) => {
  console.log(`app is listeningn on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
