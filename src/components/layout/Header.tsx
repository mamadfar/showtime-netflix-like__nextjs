"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {

    const pathname = usePathname()

    return (
        <header>
            <nav className="flex justify-between py-3">
                <Link href="/">
                    <h1 className="text-red-600 text-2xl">SHOWTIME</h1>
                </Link>
                <Link href="/" className={pathname === "/" ? "text-white text-shadow-[1px_3px_#e50914]" : "text-red-600"}>Home</Link>
            </nav>
        </header>
    );
};

export default Header;
