import ConfirmScreen from "@/core/users/presentation/screens/confirm.screen";

interface Props {
  params: {
    token: string;
  };
}

const ConfirmAccoutPage = ({ params }: Props) => {
  return <ConfirmScreen token={params.token} />;
};

export default ConfirmAccoutPage;
