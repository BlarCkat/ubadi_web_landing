import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Image from "next/image";

const LandingView = () => {
  return ( 
    <>
    <Header/>
    
    <header className="flex flex-row justify-between items-center px-[10vw]">
      <div className="hero w-[50%]">
      <div className="text-content">
        <h1 className="text-5xl font-[600] leading-[1] text-[#0A3082]">Modern financial services for families.</h1>
        <p>Ubadi helps families build essential financial habits through savings and tracking expenses.</p>
      </div>
        <button className="px-4 py-2 bg-[#0A3082] text-white rounded-[15px] hover:bg-[#092053] transition my-6">Join the waitlist</button>
      </div>
        <div className="relative">
          <div className="absolute top-[40%] left-[-64px] bg-[#B9F4D7] h-[30px] w-[150px]"></div>
          <Image src={'/img/landing_img.png'} alt="landing-page-image" width={500} height={550}/>
        </div>
    </header>

{/*  */}
    <section className="bg-[#EFF4FC] text-[#0A3082] flex flex-col justify-center items-center py-[48px]">
      <h2 className="text-3xl font-bold">We make it easy for families to build essential financial habits</h2>
      <p>With Ubadi there is a product for every member of the family including kids and teenagers</p>
      <div className="px-[4vw] py-[12px]">
      <div className="grid grid-cols-3 px-[4vw] py-[48px] text-center justify-center items-start bg-white rounded-xl">
        <aside className="flex flex-col items-center justify-start h-full mx-6">
          <div className="px-6 py-8 h-28 rounded-b-full bg-[#EFF4FC]">
            <Image src={'/img/icon_micro-savings.png'} width={48} height={48} alt="micro-savings" className="relative"/>
          </div>
          <h3 className="text-[#0A3082] text-2xl font-bold">Micro-savings for every family member</h3>
          <p>Create a micro-savings account for every family member. <br /> Like a SuperTeen account for teenagers and a CoolKid account for pre-teens.</p>
        </aside>
        <aside className="flex flex-col items-center justify-start h-full mx-6">
        <div className="px-6 py-8 h-28 rounded-b-full bg-[#EFF4FC]">
            <Image src={'/img/icon_tracking.png'} width={48} height={48} alt="micro-savings" className="relative"/>
          </div>
          <h3 className="text-[#0A3082] text-2xl font-bold">Track family and individual finances</h3>
          <p>Get insights into your family and individual finances by tracking every expense automatically and manually.</p>
        </aside>
        <aside className="flex flex-col items-center justify-start mx-6">
        <div className="px-6 py-8 h-28 rounded-b-full bg-[#EFF4FC]">
            <Image src={'/img/icon_literacy.png'} width={48} height={48} alt="micro-savings" className="relative"/>
          </div>
          <h3 className="text-[#0A3082] text-2xl font-bold">Financial literacy for teenagers</h3>
          <p>We help equip teenagers with financial education through in-app and offline activities. With Ubadi raising a financially responsible child is assured.</p>
        </aside>
      </div>
      </div>
    </section>

    <section className="flex flex-row h-[80vh] justify-between m-[10vw]">
        <div className="img-content h-full bg-neutral-50 w-full relative">
          <Image src={'/img/img_banner_1.png'} fill alt="banner-image"/>
        </div>
        <div className="text-content w-full flex flex-col gap-[24px] items-start justify-center p-[64px] rounded-tr-[24px] rounded-br-[24px] bg-[#0A3082]">
        <h2 className="text-3xl font-[500] text-white">Take the family on an adventure with our modern financial services for families.</h2>
      <button className="px-4 py-2 text-[#0A3082] bg-white rounded-[15px] hover:bg-[#5DCB95] transition">Join the waitlist</button>
        </div>
    </section>

    <section className="">
      <h2>Join 1000+ people on our waitlist</h2>
      <div className="">
        <input type="text" placeholder="Your first name" />
        <input type="text" placeholder="Your email address" />
      <button className="px-4 py-2 bg-[#0A3082] text-white rounded-[15px]">Join the waitlist</button>
      </div>
    </section>

    <section>
      <h2>Tailor-made financial solutions for families of any size</h2>
      <div className="grid grid-cols-2">
        <div className="item h-50 w-[50px] bg-neutral-50">1</div>
        <div className="item h-50 w-50 bg-neutral-50">2</div>
        <div className="item h-50 w-50 bg-neutral-50">3</div>
        <div className="item h-50 w-50 bg-neutral-50">4</div>
      </div>
    </section>
    <section className="flex flex-row h-[80vh] justify-between m-[10vw]">
        <div className="img-content h-full bg-neutral-50 w-full relative">
          <Image src={'/img/img_banner_2.png'} fill alt="banner-image"/>
        </div>
        <div className="text-content w-full flex flex-col gap-[24px] items-start justify-center rounded-tr-[24px] rounded-br-[24px] p-[64px] bg-[#5DCB95]">
        <h2 className="text-3xl font-[500] text-white">Build essential financial habits as a teenager and get financial support from your family to meet your goals.</h2>
      <button className="px-4 py-2 text-[#0A3082] bg-white rounded-[15px]">Join the waitlist</button>
        </div>
    </section>




    <Footer/>
    </>
   );
}
 
export default LandingView;