import Proptypes from "prop-types";

const PeopleCard = ({ name, age, gender, location, sports }) => {
  return (
    <div className="bg-green-200 text-black px-5 lg:px-10 py-5 mx-3 mb-3 md:mb-4 lg:mb-6 space-y-2 shadow-lg rounded">
      <div className="flex items-center justify-between">
        <h1 className="text-primary-col1 font-semibold text-xl capitalize">
          Name: {name}
        </h1>
        <h2 className="font-semibold text-primary-col1">Age : {age}</h2>
      </div>
      <div className="capitalize">
        <div>Gender : {gender}</div>
        <div>Location : {location}</div>
      </div>
      <div className="flex items-center space-x-2">
        <h1>Interested Sports : </h1>
        <div className="space-x-1">
          {sports.map((sport, index) => (
            <span
              key={index}
              className="bg-green-300 font-semibold px-4 py-1 rounded-full"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
  name: Proptypes.string,
  age: Proptypes.string.isRequired,
  gender: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  sports: Proptypes.array,
};

export default PeopleCard;
