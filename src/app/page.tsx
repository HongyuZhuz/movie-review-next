import { Title } from "./ui/homePage/title";
import { HomeImage } from "./ui/homePage/homeImage";
import { FunctionInvolves } from "./ui/homePage/functionInvolves";
import { Technics } from "./ui/homePage/technics";
export default function Home() {
  return (
    <div className="flex  justify-center items-center mt-36 flex-col">
      <Title/>
      {/*<HomeImage />*/}
      <FunctionInvolves/>
      <Technics/>
    </div>
  );
}


