import Link from "next/link"
import Image from "next/image"


import logoImg from "@/assets/icons/icon.png"
import classes from "./MainHeader.module.css"
import NavLink from "./NavLink"
export default function Header(){
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="plate full with fruits " priority />
                Food Recipe
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href="/meals">Browser Meal</NavLink></li>
                    <li><NavLink href="/community">Food Community</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}