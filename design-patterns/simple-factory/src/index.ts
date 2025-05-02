import express from "express";
import NotificationRouter from "./notification/NotificationRouter";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

app.use("/notifications", NotificationRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
