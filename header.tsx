import Link from "next/link"
export default function Header () {
    return ( 
    <div>
      <ul className="flex gap-10 bg-pink-500 "> 
      
      <h1 className='text-xl m-2 cursor-pointer font-bold'>Navbar</h1>
 
     <li><Link href="/">Home</Link></li> 
    <li><Link href="/about">About</Link></li>
    <li><Link href="contact">Contact</Link></li>
    <li><Link href="service">Service</Link></li>


    </ul>
    
    </div>
    )
}