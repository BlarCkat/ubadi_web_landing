import { FaTwitter, FaFacebook, FaTiktok, FaLinkedin, FaSnapchat, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
        <div className="h-1 w-fit"></div>
        <div className="px-">
            <span>2022&copy; Ubadi. All rights reserved.</span>
            <div className="flex flex-row items-center gap-[16px]">
                <FaTiktok/>
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaTwitter/>
                <FaSnapchat/>
                <FaWhatsapp/>
            </div>
        
        </div>
        </>
     );
}
 
export default Footer;