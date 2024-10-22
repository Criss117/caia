import ConferenceScreen from "@/core/conferences/presentation/screens/conference.screen";

interface Props {
  params: {
    slug: string;
  };
}

const PublicConferencePage = ({ params: { slug } }: Props) => {
  return <ConferenceScreen slug={slug} />;
};

export default PublicConferencePage;
