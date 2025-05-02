import express from "express";
import TaxRouter from "./tax/TaxRouter";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

app.use("/tax", TaxRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
