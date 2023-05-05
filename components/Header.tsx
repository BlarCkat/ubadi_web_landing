import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
        <>
        <div className="flex flex-row items-center justify-between h-fit px-[10vw] py-[18px] shadow-sm">
            <div className="logo">
                <Image src={'/img/logo.png'} alt="Ubadi logo" className="relative" width={64} height={100}/>
            </div>
            <nav>
                <ul className="hidden md:flex md:flex-row md:gap-4 lg:gap-12 md:visible">
                    <li><Link href={'/'} className="text-[#0A3082] px-4 py-2 rounded-lg transition hover:bg-[#EFF4FC]">Teen</Link></li>
                    <li><Link href={'/'} className="text-[#0A3082] px-4 py-2 rounded-lg transition hover:bg-[#EFF4FC]">How it works</Link></li>
                    <li><Link href={'/'} className="text-[#0A3082] px-4 py-2 rounded-lg transition hover:bg-[#EFF4FC]">Why Ubadi</Link></li>
                    <li><Link href={'/'} className="text-[#0A3082] px-4 py-2 rounded-lg transition hover:bg-[#EFF4FC]">Blog</Link></li>
                </ul>
            </nav>
            <button className="px-4 py-2 bg-[#0A3082] text-white rounded-[15px] hover:bg-[#092053] transition">Join the waitlist</button>
        </div>
        </>
     );
}
 
export default Header;