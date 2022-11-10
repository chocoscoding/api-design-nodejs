import { body, param, validationResult } from "express-validator";
import { Router } from "express";
import { handleInputError } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put("/product/:id", body("name").isString(), handleInputError, updateProduct);
router.post("/product", body("name").isString(), handleInputError, createProduct);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", getUpdates);
router.get("/update/:id", param("id").isUUID(), getOneUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("name").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  handleInputError,
  updateUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  handleInputError,
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

/**
 * Update point
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", body("name").optional().isString(), body("description").optional().isString(), (req, res) => {
  return res.status(200).json({ message: "req.ssshhhh_secret" });
});
router.post(
  "/updatepoint",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

router.use((err, req, res, next) => {
  err.location = "api";
  next(err);
});
export default router;
