import mongoose from "mongoose";

const playerDataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "player name is requried"],
    },
    email: {
      type: String,
      unique: true,
      requried: [true, "player email is requried"],
    },
    password: {
      type: String,
      requried: [true, "password email is requried"],
    },
    role: {
      type: String,
      default: "user",
    },
    mobile: {
      type: String,
      requried: [true, "player mobile no is requried"],
    },
    location: {
      type: String,
      requried: [true, "location details is requried"],
    },
    age: {
      type: String,
      requried: [true, "Please enter your age"],
    },
    gender: {
      type: String,
      requried: [true, "Please enter your gender"],
    },
    sports: {
      type: [String], // Array of strings for skills
      required: [true, "At least one sport activity is requried"],
    },
  },
  {
    timeStamp: true,
  }
);

const PlayerData = mongoose.model("PlayerData", playerDataSchema);

export default PlayerData;
