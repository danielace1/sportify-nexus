import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PeopleCard from "../components/PeopleCard";
import SportsNewsCard from "../components/NewsCard";

const Feed = () => {
  const [people, setPeople] = useState([]);
  const [sportsCard, setSportsCard] = useState([]);
  const { _id } = useParams();

  const SPORTS_NEWS_API = import.meta.env.VITE_SPORTS_NEWS_API_KEY;

  const getPlayerDetails = async () => {
    const playerData = await fetch(
      `https://sportify-nexus.vercel.app/api/players/${_id}`
    );
    const data = await playerData.json();
    console.log(data);
  };
  getPlayerDetails();

  // Getting other players from DB
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

  // News APi
  useEffect(() => {
    async function getSportsNews() {
      const sportsNews = await fetch(
        `https://newsdata.io/api/1/news?country=in&category=sports&apikey=${SPORTS_NEWS_API}`
      );

      const sportsData = await sportsNews.json();

      console.log(sportsData.results);
      setSportsCard(sportsData.results);
    }

    getSportsNews();
  }, []);

  // Slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    swipeToSlide: true,
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
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="bg-green-600 bg-opacity-5 text-black px-2 py-4 md:px-7 md:py-10 lg:px-16 lg:pb-20 mx-2 md:mx-3 lg:mx-5 rounded-3xl min-h-screen">
      {/* News  */}
      <div>
        <h1 className="text-primary-col1 text-xl sm:text-2xl font-semibold">
          Sports News
        </h1>

        {/* News Cards */}
        <div className="mt-5">
          <Slider {...settings}>
            {sportsCard.map((sportcard) => (
              <SportsNewsCard
                key={sportcard.title}
                url={sportcard.link}
                urlImg={sportcard.image_url}
                title={sportcard.title}
                desc={sportcard.description}
                author={sportcard.creator}
                time={sportcard.pubDate}
              />
            ))}
          </Slider>
        </div>
      </div>

      {/* People */}
      <div className="mt-16">
        <h1 className="text-primary-col1 text-xl sm:text-2xl font-semibold">
          Find People with similar interests
        </h1>

        {/* people cards in carousel */}
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
      </div>
    </section>
  );
};

export default Feed;
