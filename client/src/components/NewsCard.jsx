import Proptypes from "prop-types";
import { useState } from "react";

import { formatDate } from "../helpers";

const SportsNewsCard = ({ url, title, desc, urlImg, author, time }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-green-100 mx-3 mb-3 md:mb-4 lg:mb-6 pb-10 h-[80dvh] md:h-[70dvh] 2xl:h-auto rounded overflow-hidden">
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
            <article
              className={`text-sm overflow${
                isExpanded ? "" : " overflow-hidden"
              }`}
            >
              {desc.length > 150 ? (
                <>
                  {isExpanded ? desc : `${desc.substring(0, 150)}...`}
                  {!isExpanded && (
                    <button
                      className="text-primary-col1 font-semibold mt-2"
                      onClick={toggleExpand}
                    >
                      Read More
                    </button>
                  )}
                </>
              ) : (
                desc
              )}
            </article>
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
  author: Proptypes.array,
  time: Proptypes.string,
};

export default SportsNewsCard;
