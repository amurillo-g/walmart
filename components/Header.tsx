import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { Search } from "lucide-react"
import logoHeader from '../public/logo_insta_fashionbox.jpg'

function Header() {
  return (
    <header className="flex bg-gray-400 px-10 py-7 space-x-5">
      <Link href={"/"}>
        <Image
          src={logoHeader}
          width={150}
          height={300}
          alt="Logo"
        />
      </Link>

      <form className="flex items-center bg-white rounded-full w-full flex-1">
         <input type="text" placeholder="Buscar todo" className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"/>
         <button>
            <Search className="rounded-full h-10 px-2 w-10 bg-pink-300
             cursor-pointer"/> 
          </button> 

      </form>      

    </header> 
  )
}

export default Header