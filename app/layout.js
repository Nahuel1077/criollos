'use client'
import { useState, useEffect } from "react";
import {  Philosopher, Cormorant_Upright } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';
import Head from 'next/head';
import { usePathname } from "next/navigation";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '400',
})

const cormorant = Cormorant_Upright({
  weight:'400',
  subsets: ["latin"],
})

export default function RootLayout({ children }) {

  const [hideLayout, setHideLayout] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/es")) {
      setHideLayout(true);
    } else {
      setHideLayout(false);
    }
  }, [pathname]);
   
  useEffect(() => {
    document.title = "Criollos | Global Solutions"; 
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expand your business around the globe");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Expand your business around the globe";
      document.head.appendChild(newMeta);
    }
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <Head>
      <script 
        src="https://www.paypal.com/sdk/js?client-id=BAALGyhqa-7zCP1tqw87kthVANlJJ5u-t15yzcV4rvpxe3ZEgrMVB6MDYjqUwA1lUCVvnNDLVm2CmEcM8c&components=hosted-buttons&disable-funding=venmo&currency=USD" async>
      </script>
      </Head>
      <body
        className={`${cormorant} ${philosopher}antialiased`}
        >
      <script async="" src="/lib/app.js"></script>
      {!hideLayout && (
        <nav className={`flex flex-row justify-between sm:px-10 text-black h-[30px] sm:h-14 items-center fixed top-0 w-full z-20 ${isScrolled ? "bg-[#000000ad] backdrop-blur-md shadow-lg animate__animated animate__pulse":"bg-transparent"}`}>
          <div>
            <Link href="/">
              <Image
                className="hover:opacity-50 ease-linear duration-150 h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]"
                src="/criolloslogo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
          </div>

          <ul className={`sm:flex-row sm:gap-4 text-[#f0deb8] flex ${menuOpen ? "flex-col w-full z-30 items-end bg-[#000000ad] backdrop-blur-md h-100vh flex absolute top-0 gap-[2rem] p-[50px_60px] animate__animated animate__fadeInDown" : "sm:flex hidden"}`}>
            <li><Link href="/es" className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}><Image
              height={20}
              width={20}
              alt="spanish"
              src="/flag-argentina.svg"
              className="w-[25px] top-1.5 relative"
            /></Link></li>
            <li><Link href="/#solutions" onClick={() => setMenuOpen(false)} className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}>Solutions<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link></li>
            <li><Link href="/#reviews" onClick={() => setMenuOpen(false)} className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}>Reviews<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link></li>
            <li><Link href="/#contact" onClick={() => setMenuOpen(false)} className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}>Contact<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link></li>
          </ul>

          <button className="sm:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            <Image
            src="/menu.svg"
            alt="menu logo"
            width={30}
            height={30}
            className="invert"
            />
          </button>          

        </nav>)}
        {children}
        {!hideLayout && (
        <footer className="block sm:grid grid-cols-4 justify-items-center items-start p-[3rem_0rem] text-[#f0deb8]">
          <div className="flex flex-col items-center">
            <Image
              className=""
              src="/criolloslogo.png"
              alt="logo"
              width={200}
              height={200}
            />
            <div className="flex flex-row gap-8">
              <Link href="mailto:general@criollos-solutions.com">
                <Image
                  className="bg-transparent invert hover:opacity-50 transition-opacity"
                  src="/envelope-solid.svg"
                  alt="email"
                  width={30}
                  height={30}
                />
            </Link>
              <Link href="https://www.instagram.com/criollos.solutions/">
                <Image
                  className="bg-transparent invert hover:opacity-50 transition-opacity"
                  src="/instagram-brands.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
            </Link>
              <Link href="https://wa.me/541127194665?text=Hola, me contacto desde la web de Criollos Solutions!">
                <Image
                  className="bg-transparent invert hover:opacity-50 transition-opacity"
                  src="/whatsapp-brands.svg"
                  alt="whatsapp"
                  width={30}
                  height={30}
                />
            </Link>
            </div>
          </div>
          <div className={`${cormorant.className} text-[large] flex flex-col items-center sm:items-baseline gap-[2rem] pt-20 `}>
            <h6 className="text-[x-large]">Digital Solutions</h6>
            <ul className="flex flex-col items-center sm:block">
              <li>UX/UI Design</li>
              <li>Web Development</li>
              <li>E-commerce</li>
              <li>Optimization</li>
              <li>Customized Software</li>
              <li>Web Maintenance</li>
            </ul>
          </div>
          <div className={`${cormorant.className} text-[large] flex flex-col items-center sm:items-baseline gap-[2rem] pt-20`}>
            <h6 className="text-[x-large]">Linguistic Solutions</h6>
            <ul className="flex flex-col items-center sm:block">
              <li>Translation</li>
              <li>Transcription</li>
              <li>Subtitling</li>
              <li>Post-Machine Edition</li>
              <li>Localization</li>
              <li>Web Translation</li>
            </ul>
          </div>
          <div className={`${cormorant.className} text-[large] flex flex-col items-center sm:items-baseline gap-[2rem] pt-20`}>
            <h6 className="text-[x-large]">Resources</h6>
            <ul className="flex flex-col items-center sm:block">
              <li>
                <Link href="emailto:nahuh08gmail.com" className="group relative">Support<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link>
              </li>
              <li>
                <Link href="/about-us" className="group relative">About us<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link>
              </li>
              <li>
                <Link href="/procedures" className="group relative">Procedures<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link>
              </li>
            </ul>
          </div>
        </footer>)}
      </body>
    </html>
  );
}
