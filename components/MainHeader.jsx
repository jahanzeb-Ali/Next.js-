import Link from "next/link"
import Image from "next/image"


import logoImg from "@/assets/icons/icon.png"
import classes from "./MainHeader.module.css"
export default function Header(){
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="plate full with fruits " priority />
                Food Recipe
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals">Brower Meals</Link></li>
                    <li><Link href="/community">Food Community</Link></li>
                </ul>
            </nav>
        </header>
    )
}