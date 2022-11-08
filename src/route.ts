import { Router } from "express";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  return res.status(200).json({ message: req.ssshhhh_secret });
});
router.get("/product/:id", () => {});
router.put("/product", () => {});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

/**
 * Update
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

/**
 * Update point
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
