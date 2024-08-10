
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"


const Home = () => {
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

        <div className="relative w-full h-[150px] ">
        <Image 
           alt="banner 01" 
           src="/banner-01.png" 
           fill 
           className="object-cover rounded-xl" />
        </div>
        
        
          <Card className="mt-6">
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
     

      </div>
    </>
  )
}

export default Home
