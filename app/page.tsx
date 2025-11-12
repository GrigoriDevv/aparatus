import Header from "./_components/Header";
import SearchInput from "./_components/search-input";
import Image from "next/image";
import Frame from "@/public/Frame.png";
import BookingItem from "./_components/booking-item";


 const Home = () =>  {
  return (
    <main className="bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="space-y-4 px-5 py-6">
        <SearchInput />
        <Image src={Frame}
         alt="Agende agora"
         sizes="100vw"
         className="w-full h-auto" />
         <h2 className="text-xs font-semibold uppercase text-foreground">Agendamentos</h2>
         <BookingItem 
         serviceName="Corte de cabelo"
         barbershopName="Barbearia do João"
         barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
         date={new Date()}
         />
      </div>
    </main>
  );
}

export default Home;