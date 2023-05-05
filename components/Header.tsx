import Link from "next/link";

const Header = () => {
    return ( 
        <>
        <header className="flex flex-row items-center justify-between">
            <div className="logo">Ubadi</div>
            <nav>
                <ul>
                    <li><Link href={'/'}>Teen</Link></li>
                    <li><Link href={'/'}>How it works</Link></li>
                    <li><Link href={'/'}>Why Ubadi</Link></li>
                    <li><Link href={'/'}>Blog</Link></li>
                </ul>
            </nav>
            <button>Join the waitlist</button>
        </header>
        </>
     );
}
 
export default Header;