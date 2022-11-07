import express from "express";
import router from "./route";
import morgan from "morgan";
import cors from "cors" ;
const app = express();

const customLogger = (message) => (req, res, next) => {
  console.log(`Hello from ${message}`);
  next();
};
app.use(cors());
app.use(customLogger("custom logger"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.ssshhhh_secret = "doggy";
  next();
});
app.use("/api", router);

export default app;
