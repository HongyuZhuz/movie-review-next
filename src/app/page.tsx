import { Title } from "./ui/homePage/title";
import { HomeImage } from "./ui/homePage/homeImage";
export default function Home() {
  return (
    <div className="flex  justify-center items-center mt-36 flex-col">
      <Title/>
      <HomeImage />
    </div>
  );
}


