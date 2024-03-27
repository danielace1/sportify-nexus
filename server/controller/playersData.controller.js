// model
import { ObjectId } from "mongodb";
import playerData from "../models/playerData.model.js";

const getPlayerDatas = async (req, res) => {
  try {
    const playerDetails = await playerData.find({});
    if (playerDetails.length > 0) {
      res.status(200).json(playerDetails);
    } else {
      res.status(404).json({ status: 404, message: "Players BD is empty" });
    }
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
};

const getPlayerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDetails = await playerData.findById(id);
    if (playerDetails) {
      res.status(200).json(playerDetails);
    } else {
      res.status(404).json({ status: 404, message: "Players not found in DB" });
    }
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
};

const postPlayerDetails = async (req, res) => {
  try {
    const playerDetails = await playerData.create(req.body);
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

const putPlayerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDetails = await playerData.findByIdAndUpdate(id, req.body);

    if (!playerDetails) {
      return res
        .status(404)
        .json({ status: 404, message: "player details not found in DB" });
    }

    const updatedPlayerDetails = await playerData.findById(id);
    res.status(200).json(updatedPlayerDetails);
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
};

const putPlayerSport = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if ID is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ status: 400, message: "Invalid player ID" });
    }

    // Ensure req.body.sports is provided and not empty
    const sports = req.body.sports;
    // not null || is not a arr || not an empty arr
    if (!sports || !Array.isArray(sports) || sports.length === 0) {
      return res.status(400).json({
        status: 400,
        message: "At least one sport activity is required",
      });
    }

    // Update the player's sports array
    const playerDetails = await playerData.findByIdAndUpdate(
      id,
      { $push: { sports: { $each: sports } } },
      { new: true } // Return the updated document
    );

    if (!playerDetails) {
      return res
        .status(404)
        .json({ status: 404, message: "Player details not found in DB" });
    }

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

const deletePlayerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDetails = await playerData.findByIdAndDelete(id, req.body);

    if (!playerDetails) {
      return res
        .status(404)
        .json({ status: 404, message: "player details not found in DB" });
    }
    res
      .status(200)
      .json({ status: 200, message: "player details deleted from server" });
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
};

export {
  getPlayerDatas,
  getPlayerDetails,
  postPlayerDetails,
  putPlayerDetails,
  deletePlayerDetails,
  putPlayerSport,
};
