import ConferenceCard from "../../../../conferences/presentation/components/conference-card";

const ConferencesListSection = () => {
  return (
    <section aria-label="Conferences List Section" className="mx-auto">
      <header className="border-y-2 py-5">
        <div className="w-[80%] mx-auto">
          <h3 className="font-bold text-xl text-center md:text-start">
            Conferencias Académicas: Descubre y Participa
          </h3>
        </div>
      </header>
      <div className="w-[80%] mx-auto grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 gap-y-10 my-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <ConferenceCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default ConferencesListSection;
