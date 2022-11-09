import { body, validationResult } from "express-validator";
import { Router } from "express";
import { handleInputError } from "./modules/middleware";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  return res.status(200).json({ message: req.ssshhhh_secret });
});
router.get("/product/:id", () => {});
router.put("/product", body("name").isString(), handleInputError, () => {});

router.post("/product", body("name").isString(), handleInputError, (req, res) => {
  return res.status(200).json({ message: req.ssshhhh_secret });
});
router.delete("/product/:id", () => {});

/**
 * Update
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("name").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  handleInputError,
  (req, res) => {
    return res.status(200).json({ message: 'req.ssshhhh_secret' });
  }
);
router.post("/update", body("title").optional(), body("name").optional(), handleInputError, () => {});
router.delete("/update/:id", () => {});

/**
 * Update point
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/id", body("name").optional().isString(), body("description").optional().isString(), () => {});
router.post(
  "/updatepoint",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
