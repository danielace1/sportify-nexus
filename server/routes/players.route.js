import express from "express";

import {
  getPlayerDatas,
  getPlayerDetails,
  postPlayerDetails,
  putPlayerDetails,
  deletePlayerDetails,
} from "../controller/playersData.controller.js";

const router = express.Router();

router.get("/", getPlayerDatas);
router.get("/:id", getPlayerDetails);
router.post("/", postPlayerDetails);
router.put("/:id", putPlayerDetails);
router.delete("/:id", deletePlayerDetails);

export default router;
