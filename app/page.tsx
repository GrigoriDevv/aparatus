import Header from "./_components/Header";
import SearchInput from "./_components/search-input";
import Image from "next/image";
import Frame from "@/public/Frame.png";


 const Home = () =>  {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="space-y-4 px-5 py-6">
        <SearchInput />
        <Image src={Frame}
         alt="Agende agora"
         sizes="100vw"
         className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Home;