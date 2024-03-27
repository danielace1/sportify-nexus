import express from "express";

import {
  getPlayerDatas,
  getPlayerDetails,
  postPlayerDetails,
  putPlayerDetails,
  putPlayerSport,
  deletePlayerDetails,
} from "../controller/playersData.controller.js";

const router = express.Router();

router.get("/", getPlayerDatas);
router.get("/:id", getPlayerDetails);
router.post("/", postPlayerDetails);
router.put("/:id", putPlayerDetails);
router.put("/sports/:id", putPlayerSport);
router.delete("/:id", deletePlayerDetails);

export default router;
