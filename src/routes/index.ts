import { Router } from "express";
// import exampleRoute from "./example"
const router = Router();

router.get("/health", (req, res) => {
  res.json({ message: "API working..." });
});

// router.use("/example", exampleRoute);

export default router;
