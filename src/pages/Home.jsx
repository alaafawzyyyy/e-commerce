import { Hero } from "../components";
import { LatestCollection } from "../components";
import BestSeller from "../components/BestSeller";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}
export default Home;
