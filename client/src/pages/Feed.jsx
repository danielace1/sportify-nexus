import { useParams } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import { useEffect, useState } from "react";

const Feed = () => {
  const [people, setPeople] = useState([]);

  const { _id } = useParams();

  const getPlayerDetails = async () => {
    const playerData = await fetch(
      `https://sportify-nexus.vercel.app/api/players/${_id}`
    );
    const data = await playerData.json();
    console.log(data);
  };
  getPlayerDetails();

  useEffect(() => {
    async function getAllPlayerDetails() {
      const playerData = await fetch(
        "https://sportify-nexus.vercel.app/api/players"
      );
      const data = await playerData.json();
      console.log(data);
      setPeople(data);
    }
    getAllPlayerDetails();
  }, []);

  return (
    <section className="bg-green-600 bg-opacity-5 p-4 md:px-7 md:py-10 lg:px-16 mx-2 md:mx-3 lg:mx-5 rounded-3xl min-h-screen">
      <h1 className="text-primary-col1 text-2xl font-semibold">
        Find People with similar interests
      </h1>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {people.map((data, id) => (
          <PeopleCard
            key={id}
            name={data.name}
            age={data.age}
            gender={data.gender}
            location={data.location}
            sports={data.sports.map((sport) => sport)}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;
