import ConferenceCard from "./conference-card";

const ConferencesList = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 gap-y-10 my-10">
      {Array.from({ length: 8 }).map((_, index) => (
        <ConferenceCard key={index} onDashboard />
      ))}
    </div>
  );
};

export default ConferencesList;
