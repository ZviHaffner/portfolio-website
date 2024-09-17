import techStackData from "../assets/techStackData";

const TechStack = () => {
  return (
    <div className="bg-green-50 p-5 mb-5 rounded-3xl shadow-lg text-blue-800">
      <h2 className="text-center">
        {"<"}Tech Stack{"/>"}
      </h2>
      <p className="text-center m-5 text-xl font-semibold">Confident With:</p>
      <div className="flex justify-evenly">
        {Object.entries(techStackData.confident).map(
          ([key, ValueComponent]) => {
            return (
              <div className="flex flex-col items-center">
                <ValueComponent size={32} />
                <span className="text-xs mt-2">{key}</span>
              </div>
            );
          }
        )}
      </div>
        <p className="text-center m-5 text-xl font-semibold">Familiar With:</p>
      <div className="flex justify-evenly">
        {Object.entries(techStackData.familiar).map(
          ([key, ValueComponent]) => {
            return (
              <div className="flex flex-col items-center">
                <ValueComponent size={32} />
                <span className="text-xs mt-2">{key}</span>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TechStack;
