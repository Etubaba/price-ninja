import SearchField from "@/components/SearchField";
import { randomizeBg } from "@/utils/radomizeBg";

const imgbg = randomizeBg();
export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url('${imgbg}')` }}
      className={`bg-dynamic  flex justify-center items-center w-full h-screen`}
    >
      <div className="w-full flex-col flex justify-center items-center ">
        {" "}
        <h1 className="text-7xl text-white mb-6 font-bold">Price Ninja</h1>
        <SearchField />
      </div>
    </main>
  );
}
