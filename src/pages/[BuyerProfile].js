import Layout from "../layout/Layout";
import BPDetailSection from "../screens/buyerprofile/BPDetailSection";
import BPHeadSection from "../screens/buyerprofile/BPHeadSection";
import { useRouter } from "next/router";

const BuyersProfile = () => {
  const router = useRouter();
  const buyerData = router.query.buyer;
  if (!buyerData) {
    return <span>Loading</span>;
  }
  const buyer = JSON.parse(buyerData);

  return (
    <Layout isActive={true}>
      <BPHeadSection buyer={buyer} />
      <BPDetailSection buyer={buyer} />
    </Layout>
  );
};

export default BuyersProfile;
