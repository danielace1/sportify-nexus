import React from "react";
import { useParams } from "react-router-dom";

const Feed = () => {
  const { _id } = useParams();

  const getPlayerDetails = async () => {
    const playerData = await fetch(
      `https://sportify-nexus.vercel.app/api/players/${_id}`
    );
    const data = await playerData.json();
    console.log(data);
  };
  // console.log(getAllPlayerDetails());

  const getAllPlayerDetails = async () => {
    const playerData = await fetch(
      "https://sportify-nexus.vercel.app/api/players"
    );
    const data = await playerData.json();
    console.log(data);
  };
  // console.log(getAllPlayerDetails());

  return <div>Feed {_id}</div>;
};

export default Feed;
