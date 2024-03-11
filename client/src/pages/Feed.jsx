import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PeopleCard from "../components/PeopleCard";

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Change settings for larger screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Change settings for medium screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-green-600 bg-opacity-5 p-4 md:px-7 md:py-10 lg:px-16 mx-2 md:mx-3 lg:mx-5 rounded-3xl min-h-screen">
      <h1 className="text-primary-col1 text-xl sm:text-2xl font-semibold">
        Find People with similar interests
      </h1>

      <div className="mt-10 slider-container">
        <Slider {...settings}>
          {people.map((data, id) => (
            <PeopleCard
              key={id}
              name={data.name}
              age={data.age}
              gender={data.gender}
              location={data.location}
              sports={data.sports}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feed;
