const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products API</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Listening...");
    });
  } catch (err) {
    console.log(err);
  }
}

start();
