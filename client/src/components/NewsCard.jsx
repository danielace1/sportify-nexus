import Proptypes from "prop-types";
import { formatDate } from "../helpers";

const SportsNewsCard = ({ url, title, desc, urlImg, author, time }) => {
  return (
    <div className="bg-green-100 mx-3 mb-3 md:mb-4 lg:mb-6 pb-10 h-[80dvh] md:h-[70dvh] lg:h-[80dvh] 2xl:h-auto rounded overflow-hidden">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden rounded-t">
          <img
            src={urlImg}
            alt={title}
            className={`w-full h-[38vh] rounded-t object-cover transition-transform duration-700 transform  hover:scale-110`}
          />
        </div>
        <div className="pt-3 px-4">
          <div>
            <h1 className="font-semibold text-xl text-primary-col1 mb-2">
              {title}
            </h1>
            <article className="text-sm overflow-hidden">{desc}</article>
          </div>

          <div className="mt-3 grid gap-y-3 sm:gap-y-0 sm:flex items-center justify-between">
            <h1 className="text-xs bg-emerald-200 px-3 py-2 rounded-full">
              Author : {author}
            </h1>
            <time className="text-xs text-gray-500">{formatDate(time)}</time>
          </div>
        </div>
      </a>
    </div>
  );
};

SportsNewsCard.propTypes = {
  url: Proptypes.string,
  title: Proptypes.string,
  desc: Proptypes.string,
  urlImg: Proptypes.string,
  author: Proptypes.string,
  time: Proptypes.string,
};

export default SportsNewsCard;
