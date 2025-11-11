import { Hero } from "../components";
import { LatestCollection } from "../components";
import BestSeller from "../components/BestSeller";
function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
}
export default Home;
