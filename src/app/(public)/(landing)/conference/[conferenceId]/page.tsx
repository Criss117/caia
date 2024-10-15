import ConferenceScreen from "@/core/conferences/presentation/screens/conference.screen";

interface Props {
  params: {
    conferenceId: string;
  };
}

const PublicConferencePage = ({}: Props) => {
  return (
    <div className="w-[60%] mx-auto">
      <ConferenceScreen />
    </div>
  );
};

export default PublicConferencePage;
