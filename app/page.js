import Link from "next/link";
import Menu from "./components/Menu.jsx"

export default function Home() {
  return (
      <main>
        <Menu />
        {/* <img src="/" alt="A server surrounded by magic sparkles." /> */}
        <h1>Welcome to this NextJS Course!</h1>
        <p>🔥 Let&apos;s get started! 🔥</p>

        {/* We can also use anchar tag but it is not professional way in Next js and it reload th page  */}
        {/* <p><a href="/about">About Us</a></p> */}


        {/* But in Link it is built in feature of Next js it is pro way to nevigate between pages  */}
        <p><Link href="/about">About Us</Link></p>
      </main>
    
  );
}
