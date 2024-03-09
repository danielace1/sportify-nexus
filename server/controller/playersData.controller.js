// model
import playerData from "../models/playerData.model.js";

const getPlayerDatas = async (req, res) => {
  try {
    const playerDetails = await playerData.find({});
    res.status(200).json(playerDetails);
  } catch (error) {
    res.json({ status: 200, message: error.message });
  }
};

const getPlayerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDetails = await playerData.findById(id);
    res.status(200).json(playerDetails);
  } catch (error) {
    res.json({ status: 200, message: error.message });
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
        .json({ message: "player details not found in DB" });
    }

    const updatedPlayerDetails = await playerData.findById(id);
    res.status(200).json(updatedPlayerDetails);
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
};

const deletePlayerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDetails = await playerData.findByIdAndDelete(id, req.body);

    if (!playerDetails) {
      return res
        .status(404)
        .json({ message: "player details not found in DB" });
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
};
