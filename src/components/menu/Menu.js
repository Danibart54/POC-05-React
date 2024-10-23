import Link from "next/link";
import style from "./menu.module.css";

export function Menu() {
    return (
        <header className={style.menu}>
            <Link href="/">Filmes</Link>
            <Link href="/Shrek">Shrek</Link>
        </header>
    )
}

export default Menu;