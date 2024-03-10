import Proptypes from "prop-types";

const PeopleCard = ({ name, age, gender, location, sports }) => {
  return (
    <div className="bg-green-200  px-5 lg:px-10 py-5 rounded space-y-2 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-primary-col1 font-semibold text-xl capitalize">
          Name: {name}
        </h1>
        <h2 className="font-semibold">Age : {age}</h2>
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
