import Link from "next/link"
export default function MealsPage(){
    return(
        <main>
            <h1>Meals</h1>
            <Link href="/">Home</Link>
            <Link href="/meals">Meals</Link>
            <Link href="/community">Community</Link>
            <h2>Share your meal</h2>
            <Link href="/meals/share">Share Meal</Link>
        </main>
    )
}