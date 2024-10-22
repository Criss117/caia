import ConferenceScreen from "@/core/conferences/presentation/screens/conference.screen";

interface Props {
  params: {
    slug: string;
  };
}

const ConferenceDashboardPage = ({ params: { slug } }: Props) => {
  return <ConferenceScreen onDashboard slug={slug} />;
};

export default ConferenceDashboardPage;
