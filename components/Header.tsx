import Link from "next/link";

const Header = () => {
    return ( 
        <>
        <div className="flex flex-row items-center justify-between h-fit px-[10vw] py-[32px] shadow-sm">
            <div className="logo">Ubadi</div>
            <nav>
                <ul className="flex flex-row gap-12">
                    <li><Link href={'/'}>Teen</Link></li>
                    <li><Link href={'/'}>How it works</Link></li>
                    <li><Link href={'/'}>Why Ubadi</Link></li>
                    <li><Link href={'/'}>Blog</Link></li>
                </ul>
            </nav>
            <button>Join the waitlist</button>
        </div>
        </>
     );
}
 
export default Header;