import { Hero } from "../components";
import { LatestCollection } from "../components";
import { BestSeller } from "../components";
import { NewslertterBox } from "../components";
import { OurPolicy } from "../components";
function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewslertterBox />
    </div>
  );
}
export default Home;
