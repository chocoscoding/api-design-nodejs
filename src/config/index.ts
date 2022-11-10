import merge from "lodash/merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "local";

let envConfig;

if (stage === "production") {
  envConfig = require("./prod").default;
} else if (stage === "testing") {
  envConfig = require("./test").default;
} else {
  envConfig = require("./local").default;
}
console.log(process.env.NODE_ENV);
export default merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
  },
  envConfig
);
