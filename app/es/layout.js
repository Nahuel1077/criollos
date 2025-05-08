'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import {  Philosopher, Cormorant_Upright } from "next/font/google";
import 'animate.css';

    const philosopher = Philosopher({
        subsets: ["latin"],
        weight: '400',
    });

    const cormorant = Cormorant_Upright({
        weight:'400',
        subsets: ["latin"],
    });

  export default function SpanishLayout({ children }) {

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
        <section className="flex flex-col items-center"><script async="" src="/lib/app.js"></script>
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
            <li><Link href="/" className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}><Image
              height={20}
              width={20}
              alt="spanish"
              src="/flag-us.svg"
              className="w-[25px] top-1.5 relative"
            /></Link></li>
              <li><Link href="/es/#solutions" onClick={() => setMenuOpen(false)} className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}>Soluciones<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link></li>
              <li><Link href="/es/#reviews" onClick={() => setMenuOpen(false)} className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}>Precios<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link></li>
              <li><Link href="/es/#contact" onClick={() => setMenuOpen(false)} className={`${cormorant.className} ${menuOpen ? "text-lg" : "text-[x-large] "} relative group`}>Contacto<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link></li>
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
  
          </nav>
          {children}
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
                <Link href="/">
                  <Image
                    className="bg-transparent invert hover:opacity-50 transition-opacity"
                    src="/envelope-solid.svg"
                    alt="email"
                    width={30}
                    height={30}
                  />
              </Link>
                <Link href="/">
                  <Image
                    className="bg-transparent invert hover:opacity-50 transition-opacity"
                    src="/instagram-brands.svg"
                    alt="instagram"
                    width={30}
                    height={30}
                  />
              </Link>
                <Link href="/">
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
              <h6 className="text-[x-large]">Soluciones Digitales</h6>
              <ul className="flex flex-col items-center sm:block">
                <li>Diseño UX/UI</li>
                <li>Desarrollo Web</li>
                <li>E-commerce</li>
                <li>Optimización</li>
                <li>Software a medida</li>
                <li>Mantenimiento Web</li>
              </ul>
            </div>
            <div className={`${cormorant.className} text-[large] flex flex-col items-center sm:items-baseline gap-[2rem] pt-20`}>
              <h6 className="text-[x-large]">Soluciones Lingüísticas</h6>
              <ul className="flex flex-col items-center sm:block">
                <li>Traducción</li>
                <li>Transcripción</li>
                <li>Subtitulado</li>
                <li>Post-edición de traducción automática</li>
                <li>Localización</li>
                <li>Traducción Web</li>
              </ul>
            </div>
            <div className={`${cormorant.className} text-[large] flex flex-col items-center sm:items-baseline gap-[2rem] pt-20`}>
              <h6 className="text-[x-large]">Recursos</h6>
              <ul className="flex flex-col items-center sm:block">
                <li>
                  <Link href="emailto:nahuh08gmail.com" className="group relative">Soporte<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link>
                </li>
                <li>
                  <Link href="/about-us" className="group relative">Sobre nosotros<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link>
                </li>
                <li>
                  <Link href="/procedures" className="group relative">Procedimientos<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f0deb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></Link>
                </li>
              </ul>
            </div>
          </footer>
        </section>
    );
  }
  