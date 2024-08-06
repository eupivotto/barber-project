
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

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

      </div>
    </>
  )
}

export default Home
