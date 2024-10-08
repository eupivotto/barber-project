
import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"


const Home = async () => {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy:{
          name:'desc',
    }
  })
  
 

  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucas </h2>
        <p>Sexta, 9 de Agosto.</p>

        <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca..."/>
        <Button size="icon">
          <SearchIcon />
        </Button>

        
        
        </div>

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant='secondary'>
            <Image alt='icone cabelo' src='/cabelo.svg' width={16} height={16} />
           Cabelo
          </Button>

          <Button className="gap-2" variant='secondary'>
            <Image alt='icone barba' src='/barba.svg' width={16} height={16} />
           Barba
          </Button>

          <Button className="gap-2" variant='secondary'>
            <Image alt='icone acabamento' src='/acabamento.svg' width={16} height={16} />
           Acabamento
          </Button>

          <Button className="gap-2" variant='secondary'>
            <FootprintsIcon size={16}/>
           Pezinho
          </Button>

          <Button className="gap-2" variant='secondary'>
            <EyeIcon size={16}/>
           Sobrancelha
          </Button>
        </div>

        <div className="relative w-full h-[150px] ">
        <Image 
           alt="banner 01" 
           src="/banner-01.png" 
           fill 
           className="object-cover rounded-xl" />
        </div>
        
          <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-6">Agendamentos</h2>
          <Card>
            <CardContent className="flex justify-between p-0">
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de Cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                  </Avatar>
                  <p className="text-sm">Belo Barbearia</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid"> 
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">09</p>
                <p className="text-sm">18:00</p>
              </div>

            </CardContent>
          </Card>

          <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-6">Recomendados</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
          </div>

          <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-6">Populares</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
          </div>

          
          
      </div>
          <footer>
          <Card>
            <CardContent className="py-6 px-5">
              <p className="text-sm text-gray-400">© 2024 Copyright <span className="font-bold">Belo Barbearia Portal</span></p>
            </CardContent>
          </Card>
          </footer>
    </>
  )
}

export default Home
