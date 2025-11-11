import { MenuIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import SearchInput from "./_components/search-input";


 const Home = () =>  {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <SearchInput />
    </div>
  );
}

export default Home;