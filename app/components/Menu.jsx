import Link from "next/link"
export default function Menu(){
    return(
        <nav className="navbar">
            <div>
                <Link href="/">Next Level Food</Link>
            </div>
            <ul className="navbar-list">
                <li>
                    <Link href="/">Home </Link>
                </li> 
                <li>
                    <Link href="/about">About </Link>
                </li> 
                <li>
                    <Link href="/contect">Contect </Link>
                </li> 
                <li>
                    <Link href="/feature">Feature</Link>
                </li> 
            </ul>
        </nav>
    )
}