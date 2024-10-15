import ConferenceScreen from "@/core/conferences/presentation/screens/conference.screen";

interface Props {
  params: {
    conferenceId: string;
  };
}

const ConferenceDashboardPage = ({}: Props) => {
  return <ConferenceScreen onDashboard />;
};

export default ConferenceDashboardPage;
