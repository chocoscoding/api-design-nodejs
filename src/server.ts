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
app.get('/', (req,res)=>{
  res.json({message: 'hello'})
})
app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);
app.use((err, req, res, next) => {
  console.log("location -", err.location);
  if (err.type === "input") {
    res.status(400);
    res.json({ message: "Wrong input" });
  } else if (err.type === "auth") {
    res.status(401);
    res.json({ message: "unauthenticated" });
  } else {
    res.status(500).json({ message: "oops, thats on us" });
  }
});
export default app;
