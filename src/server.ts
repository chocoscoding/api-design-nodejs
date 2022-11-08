import express from "express";
import router from "./route";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";
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

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
