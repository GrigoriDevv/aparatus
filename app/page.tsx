import Header from "./_components/Header";
import SearchInput from "./_components/search-input";
import Image from "next/image";
import Frame from "@/public/Frame.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";
import { PageContainer, PageSection, PageSectionScroller, PageSectionTitle } from "./_components/ui/page";


 const Home =  async () =>  {

  const recomendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    }
  })
  
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })

  return (
    <main className="bg-zinc-50 font-sans dark:bg-black p-5">
      <Header />
        <PageContainer>
          <SearchInput />
            <PageSection>
              <Image src={Frame}
                alt="Agende agora"
                sizes="100vw"
                className="w-full h-auto" />
         <PageSectionTitle>Agendamentos</PageSectionTitle>
            <BookingItem 
              serviceName="Corte de cabelo"
              barbershopName="Barbearia do João"
              barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
              date={new Date()}
            />
            {recomendedBarbershops.map((barbershop: Barbershop) => (
              <BookingItem
                key={barbershop.id}
                serviceName="Corte de cabelo"
                barbershopName={barbershop.name}
                barbershopImageUrl={barbershop.imageUrl}
                date={new Date()}
              />
            ))}
         </PageSection>
         <PageSection>
         <PageSectionTitle>Barbearias</PageSectionTitle>
            <PageSectionScroller>
              {recomendedBarbershops.map((barbershop: Barbershop) => (
                  <BarbershopItem
                    key={barbershop.id} 
                    barbershop={barbershop}
                  />
                ))}
              </PageSectionScroller>
        </PageSection>
        <PageSectionTitle>Popular</PageSectionTitle>
        <PageSection>
          <PageSectionScroller>
              {popularBarbershops.map((barbershop: Barbershop) => (
                  <BarbershopItem
                    key={barbershop.id} 
                    barbershop={barbershop}
                  />
                ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
          <Footer/>
    </main>
  );
}

export default Home;