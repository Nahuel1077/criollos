'use client'
import Image from "next/image";
import { Philosopher, Cormorant_Upright, Cormorant, Montserrat, } from "next/font/google";
import { useState } from "react";
import 'animate.css';

/* Fonts */
const philosopher = Philosopher({
  weight: '400',
  subsets: ["latin"],
  style: ["italic", "normal"],
})
const cormorant = Cormorant_Upright({
  weight:['400','500','600'],
  subsets: ["latin"],
})
const cormorant_italic = Cormorant({
  weight:'700',
  subsets: ["latin"],
  style: ["italic", "normal"],
})
const montserrat = Montserrat({
  weight:['100', '400', '600', '800'],
  subsets: ["latin"],
  style: ["italic", "normal"],
})

export default function EsHome() {

  const [visibleD, setVisibleD] = useState(false);
  const [visibleL, setVisibleL] = useState(false);

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  
  const [pricing, setPricing] = useState("monthly");
  const [review, setReview] = useState(0);
  const [animation, setAnimation] = useState("");

  const reviews = [
    {id: "1", author: "Alicia Plotner", text:"Servicio dedicado, excelentes profesionales!", src:"/avatar-woman.svg", alt:"avatar-woman"},
    {id:"2", author: "Luis Menendez", text:"¡Gran trabajo! El equipo de lingüístas me ayudó con un manual.", src:"/avatar-man1.svg", alt:"man 1"},
    {id:"3", author: "Richard Soto", text:"Necesitaba un sitio para mi negocio de café artesanal, ¡muy contento con el resultado!", src:"/avatar-man2.svg", alt:"man 2"},
  ];

  const handleNext = () => {
    setAnimation(""); 
    setTimeout(() => {
      setAnimation("animate__fadeInRight"); 
      setReview((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 50); 
  };

  const handlePrevious = () => {
    setAnimation(""); 
    setTimeout(() => {
      setAnimation("animate__fadeInLeft"); 
      setReview((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    }, 50);
  };

  return (
    <div className="gap-12 flex flex-col">
      <section id="title" className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          <video width="1000" height="1000" autoPlay loop muted className="w-screen sm:w-full object-fill brightness-50">
            <source src="/title.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 lg:gap-[4rem]">
            <h1 className={`${philosopher.className} italic sm:text-3xl md:text-5xl z-10 w-300px lg:w-[900px] text-center`}>Expanda su negocio y alcance a clientes internacionales</h1>
            <div className="flex flex-row gap-4">
              <button className="bg-white text-black rounded-[8px] w-[120px] h-[35px] border-black hover:brightness-50 hidden sm:block"><a href="#solutions">Ver servicios</a></button>
              <button className="bg-black text-white rounded-[8px] w-[120px] h-[35px] border-white hover:brightness-50"><a href="#contact">Contacto</a></button>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" className="flex flex-col justify-center items-center gap-8 sm:p-[2rem_0rem]">
        <div className="flex flex-col md:p-8 w-full">
          <div className="items-start flex flex-col">
            <h3 className={`${cormorant.className} text-4xl text-[#f0deb8]`}>Soluciones Digitales</h3>
            <button onClick={() => setVisibleD(!visibleD)} className={`${cormorant_italic.className} italic border-none bg-transparent text-[#DBA95E]`}>{visibleD ? "Ver menos" : "Ver más"}</button>
          </div>
          <div className={`${montserrat.className} grid grid-cols-1 justify-items-center md:grid-cols-3 gap-20 animate__animated animate__slideInLeft transition-all ease-in-out overflow-hidden ${visibleD ? "animate__animated animate__slideInLeft opacity-100 max-h-max" : "animate__animated animate__slideOutLeft opacity-0 max-h-0"}`}>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/web.svg"
                width={100}
                height={100}
                alt="logo"
                className="object-cover invert grayscale-75"
              />
              <h3>Diseño UX/UI</h3>
              <h6 className="p-4">Creamos diseños atractivos y funcionales, combinando estilos únicos y una experiencia intuitiva para el usuario, mejorando la usabilidad.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/web-development.svg"
                width={100}
                height={100}
                alt="logo"
                className="object-cover grayscale-100 p-4"
              />
              <h3>Desarrollo Web</h3>
              <h6 className="p-4">Hacemos diseños web a medida, enfocados en la funcionalidad, performance y diseño moderno.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/ecommerce.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>E-commerce</h3>
              <h6 className="p-4">¡Maximice sus ventas! Desarrollamos sitios web para negocios, ofreciendo seguridad y optimización de actualizaciones.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/optimization.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Optimización y edición</h3>
              <h6 className="p-4">Optimizamos y redefinimos su sitio web: mejor interfaz, diseño, performance y posicionamiento SEO.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/customize.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Software a medida</h3>
              <h6 className="p-4">El software perfecto para su negocio: automatización, seguridad y optimización de recursos.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/maintenance.svg"
                width={100}
                height={100}
                alt="logo"
                className="p-4 invert"
              />
              <h3>Mantenimiento Web</h3>
              <h6 className="p-4">Web hosting, actualizaciones, seguridad, monitoreo, resolución, recomendaciones.</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:p-8 w-full">
          <div className="items-start flex flex-col">
            <h3 className={`${cormorant.className} text-4xl text-[#f0deb8]`}>Soluciones Lingüísticas</h3>
            <button onClick={() => setVisibleL(!visibleL)} className={`${cormorant_italic.className} italic border-none bg-transparent text-[#DBA95E]`}>{visibleL ? "Ver menos" : "Ver más"}</button>
          </div>
          <div className={`${montserrat.className} grid grid-cols-1 justify-items-center md:grid-cols-3 gap-20 animate__animated animate__slideInLeft transition-all ease-in-out overflow-hidden ${visibleL ? "animate__animated animate__slideInLeft opacity-100 max-h-max" : "animate__animated animate__slideOutLeft opacity-0 max-h-0"}`}>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/translation.svg"
                width={100}
                height={100}
                alt="logo"
                className="object-cover invert p-4"
              />
              <h3 className="text-center">Traducción certificada</h3>
              <h6 className="p-4">Contamos con un excelente equipo de profesionales con amplia experiencia en diferentes áreas: legal, técnica, marketing, educación, finanzas, entre otras.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/transcription.svg"
                width={100}
                height={100}
                alt="logo"
                className="object-cover invert p-4"
              />
              <h3>Transcripción</h3>
              <h6 className="p-4">Transcribimos audio o video a texto usando diferentes herramientas para entregar trabajos de alta calidad, tanto en inglés como en español.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/subtitling.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Subtitulado</h3>
              <h6 className="p-4">Subtitulos de alta calidad en español o en inglés. Aseguramos sincronización, legibilidad y precisión.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/edition.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3 className="text-center">Post-edición de traducción automática</h3>
              <h6 className="p-4">Traducción automática perfeccionada por traductores certificados, asegurando precisión, coherencia y una lectura natural.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/localization.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Localización</h3>
              <h6 className="p-4">Adaptamos sus productos a la cultura del idioma objetivo.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/web-translation.svg"
                width={100}
                height={100}
                alt="logo"
                className="p-4 invert"
              />
              <h3>Traducción Web</h3>
              <h6 className="p-4">Expandimos su negocio a través de sitios web traducidos a los idiomas objetivos.</h6>
            </div>
          </div>
        </div>
        
      </section>
      <section id="reviews" className="gap-14 flex flex-col items-center">
        <div className="flex items-center">
          <h2 className={`${philosopher.className} text-center w-full text-4xl text-[#f0deb8]`}>¿Por qué elegirnos?</h2>
        </div>
        <div className={"flex flex-col items-center gap-4"}> {/* dropdown container */}
          <div className={`gap-24 flex flex-row items-center justify-between bg-white bg-[url(/firulete.svg)] bg-contain sm:bg-[center_right_17rem] bg-[center_right_28rem] hover:bg-right duration-[1s] ease-in-out bg-no-repeat bg-blend-normal text-black border-gray-600 rounded-xl w-[95vw] lg:h-[80px] lg:w-[800px] p-[0rem_1rem] ${dropdown1 ? "h-[180px] lg:h-[120px]":"h-[80px] "}`} /* "" */>
            <div className="flex flex-col items-start gap-4 lg:gap-0">
              <h6 className="font-bold">Expertos en lo que hacemos</h6>
              <h6 className={`${dropdown1 ? "block h-auto lg:h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Más de 5 años de experiencia en un mercado competitivo.</h6>
            </div>
            <div> 
              <button onClick={() => setDropdown1(!dropdown1)}>
                <Image
                  src="/dropdown.svg"
                  height={30}
                  width={30}
                  alt="dropdown"
                  className="h-[30px]! w-[30px]! max-w-max"
                />
              </button>
            </div>
          </div>
          <div className={`gap-24 flex flex-row items-center justify-between bg-white bg-[url(/firulete.svg)] bg-contain sm:bg-[center_right_17rem] bg-[center_right_28rem] hover:bg-right duration-[1s] ease-in-out bg-no-repeat bg-blend-normal text-black border-gray-600 rounded-xl w-[95vw] lg:h-[80px] lg:w-[800px] p-[0rem_1rem] ${dropdown2 ? "h-[180px] lg:h-[120px]":"h-[80px] "}`} >
            <div className="flex flex-col items-start">
              <h6 className="font-bold">Soluciones 100% a medida</h6>
              <h6 className={`${dropdown2 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Adaptamos las soluciones a sus necesidades.</h6>
            </div>
            <div> 
              <button onClick={() => setDropdown2(!dropdown2)}>
                <Image
                  src="/dropdown.svg"
                  height={30}
                  width={30}
                  alt="dropdown"
                  className="h-[30px]! w-[30px]! max-w-max"
                />
              </button>
            </div>
          </div>
          <div className={`flex flex-row items-center justify-between bg-white bg-[url(/firulete.svg)] bg-contain sm:bg-[center_right_17rem] bg-[center_right_28rem] hover:bg-right duration-[1s] ease-in-out bg-no-repeat bg-blend-normal text-black border-gray-600 rounded-xl w-[95vw] lg:h-[80px] lg:w-[800px] p-[0rem_1rem] ${dropdown3 ? "h-[180px] lg:h-[120px]":"h-[80px] "}`} >
            <div className="flex flex-col items-start">
              <h6 className="font-bold">Soluciones digitales y lingüísticas en un solo lugar</h6>
              <h6 className={`${dropdown3 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Ofrecemos una combinación inigualable de soluciones digitales y lingüísticas para expandir su negocio.</h6>
            </div>
            <div> 
              <button onClick={() => setDropdown3(!dropdown3)}>
                <Image
                  src="/dropdown.svg"
                  height={30}
                  width={30}
                  alt="dropdown"
                  className="h-[30px]! w-[30px]! max-w-max"
                />
              </button>
            </div>
          </div>
          <div className={`flex flex-row items-center justify-between bg-white bg-[url(/firulete.svg)] bg-contain sm:bg-[center_right_17rem] bg-[center_right_28rem] hover:bg-right duration-[1s] ease-in-out bg-no-repeat bg-blend-normal text-black border-gray-600 rounded-xl w-[95vw] lg:h-[80px] lg:w-[800px] p-[0rem_1rem] ${dropdown4 ? "h-[180px] lg:h-[120px]":"h-[80px] "}`} >
            <div className="flex flex-col items-start">
              <h6 className="font-bold">Orientados a los detalles</h6>
              <h6 className={`${dropdown4 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Los detalles son muy importantes para nosotros.</h6>
            </div>
            <div> 
              <button onClick={() => setDropdown4(!dropdown4)}>
                <Image
                  src="/dropdown.svg"
                  height={30}
                  width={30}
                  alt="dropdown"
                  className="h-[30px]! w-[30px]! max-w-max"
                />
              </button>
            </div>
          </div>
          <div className={`flex flex-row items-center justify-between bg-white bg-[url(/firulete.svg)] bg-contain sm:bg-[center_right_17rem] bg-[center_right_28rem] hover:bg-right duration-[1s] ease-in-out bg-no-repeat bg-blend-normal text-black border-gray-600 rounded-xl w-[95vw] lg:h-[80px] lg:w-[800px] p-[0rem_1rem] ${dropdown5 ? "h-[180px] lg:h-[120px]":"h-[80px] "}`} >
            <div className="flex flex-col items-start">
              <h6 className="font-bold">Eficiencia e innovación combinadas</h6>
              <h6 className={`${dropdown5 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Ofrecemos soluciones creativas enfocadas en la eficiencia, entregando resultados excelentes.</h6>
            </div>
            <div> 
              <button onClick={() => setDropdown5(!dropdown5)}>
                <Image
                  src="/dropdown.svg"
                  height={30}
                  width={30}
                  alt="dropdown"
                  className="h-[30px]! w-[30px]! max-w-max"
                />
              </button>
            </div>
          </div>
          
        </div>
        <div className="lg:flex lg:flex-row gap-10 justify-around grid grid-cols-1 items-center">
          <div className={`flex flex-col items-center lg:flex-row lg:flex-wrap content-start p-4 gap-4 shadow-[1px_1px_30px_5px] w-[300px] bg-white text-black rounded-xl h-[235px] animate__animated ${animation}`}>
            <Image
            src={reviews[review].src}
            width={60}
            height={60}
            alt={reviews[review].alt}
            className="object-fit"
            />
            <div className="flex flex-col text-start">
              <h3 className={`${cormorant.className} text-xl font-bold`}>{reviews[review].author}</h3>
              <h6 className={`${cormorant_italic.className} italic text-xl`}>{reviews[review].text}</h6>
                <div className="flex flex-row gap-4">
                   {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src="/star.svg"
                      alt="Star"
                      width={20} 
                      height={20}
                      className="w-6 h-6 saturate-[3.5] drop-shadow-[2px_4px_6px_black]"
                    />
                  ))}
                </div>
            </div>
          </div>
          <button onClick={handlePrevious} className="absolute left-[0%] sm:left-[30%] w-[30px] h-[30px] bg-[#0000003b] rounded-md hover:bg-[#0000006c]">
            <Image
            src="/left.svg"
            width={30}
            height={30}
            alt="left-arrow"
            className="bg-transparent invert absolute top-[0px]"
            />
          </button>
          <button onClick={handleNext} className="absolute right-[0%] sm:right-[30%] w-[30px] h-[30px] bg-[#0000003b] rounded-md hover:bg-[#0000006c]">
            <Image
            src="/right.svg"
            width={30}
            height={30}
            alt="right-arrow"
            className="bg-transparent invert aboslute top-[0px]"
            />
          </button>
        </div>
      </section>
      <section id="pricing" className="flex flex-col items-center w-full gap-2">
        <div className={`${montserrat.className} flex flex-row gap-8`}>
          <button onClick={() => setPricing("monthly")} className={`w-[75px] h-[25px] border-none rounded-lg hover:bg-gray ${pricing === "monthly" ? "bg-white text-black" : ""}`}>Mensual</button>
          <button onClick={() => setPricing("yearly")} className={`w-[75px] h-[25px] border-none rounded-lg hover:bg-gray ${pricing === "yearly" ? "bg-white text-black" : ""}`}>Anual</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:w-[80%] gap-8">
          <div className="w-[300px] h-[300px] lg:h-full flex flex-col items-center text-center lg:gap-[2rem] bg-white rounded-xl text-black shadow-[1px_1px_30px_5px] hover:scale-105 transition-all duration-75 ease-in-out">
            <h3 className={`${montserrat.className}`}>Básico</h3>
            <h2 className={`${montserrat.className} text-2xl font-[800]`}>{pricing === "monthly" ? "$14.999 ARS" : "$174.999 ARS"}</h2>
            <ul className={`${montserrat.className} text-start list-disc m-[2rem] self-start`}>
              <li>Desarrollo Web</li>
              <li>1 revisión</li>
              <li>{pricing === "monthly" ? "1 actualización por mes" : "12 actualizaciones en total"}</li>
              <li>Sitios estáticos</li>
              <li>5 páginas</li>
            </ul>
            <button className=" bg-black text-white w-[170px] h-[50px] rounded-xl m-[1rem] hover:bg-[#232222] shadow-[4px_3px_8px_black]">
              <a href="https://www.paypal.com/ncp/payment/VG29HJ44GVDBE" className={pricing === "monthly" ? "block" : "hidden"}>Buy now</a>
              <a href="https://www.paypal.com/ncp/payment/RVLEKLQ86PDKW" className={pricing === "yearly" ? "block" : "hidden"}>Buy now</a>
            </button>
          </div>
          <div className="w-[300px] h-[300px] lg:h-full flex flex-col items-center text-center lg:gap-[2rem] bg-white rounded-xl text-black shadow-[1px_1px_30px_5px] hover:scale-105 transition-all duration-75 ease-in-out">
            <h3 className={`${montserrat.className}`}>Intermedio</h3>
            <h2 className={`${montserrat.className} text-2xl font-[800]`}>{pricing === "monthly" ? "$29.999 ARS" : "$349.999 ARS"}</h2>
            <ul className={`${montserrat.className} text-start list-disc m-[2rem] self-start`}> 
              <li>Desarrollo web</li>
              <li>2 revisiones</li>
              <li>{pricing === "monthly" ? "1 actualización por mes" : "12 actualizaciones en total"}</li>
              <li>Sitios estáticos</li>
              <li>7 páginas</li>
            </ul>
            <button className=" bg-black text-white w-[170px] h-[50px] rounded-xl m-[1rem] hover:bg-[#232222] shadow-[4px_3px_8px_black]">
              <a href="https://www.paypal.com/ncp/payment/CSSPLEX76FX36" className={pricing === "monthly" ? "block" : "hidden"}>Buy now</a>
              <a href="https://www.paypal.com/ncp/payment/3SXUKR5DFM43A" className={pricing === "yearly" ? "block" : "hidden"}>Buy now</a>
            </button>
          </div>
          <div className="w-[300px] h-[300px] lg:h-full flex flex-col items-center text-center lg:gap-[2rem] bg-white rounded-xl text-black shadow-[1px_1px_30px_5px] hover:scale-105 transition-all duration-75 ease-in-out">
            <h3 className={`${montserrat.className}`}>Pro</h3>
            <h2 className={`${montserrat.className} text-2xl font-[800]`}>{pricing === "monthly" ? "$79.999 ARS" : "$929.999 ARS"}</h2>
            <ul className={`${montserrat.className} text-start list-disc m-[2rem] self-start`}>
              <li>Desarrollo Web</li>
              <li>Hasta 4 revisiones</li>
              <li>{pricing === "monthly" ? "2 actualizaciones por mes" : "24 actualizaciones en total"}</li>
              <li>Sitios estáticos, E-commerce</li>
              <li>Páginas ilimitadas</li>
            </ul>
            <button className=" bg-black text-white w-[170px] h-[50px] rounded-xl m-[1rem] hover:bg-[#232222] shadow-[4px_3px_8px_black]">
              <a href="https://www.paypal.com/ncp/payment/4YHFTNLXB485J" className={pricing === "monthly" ? "block" : "hidden"}>Buy now</a>
              <a href="https://www.paypal.com/ncp/payment/TQ38LBD28QA24" className={pricing === "yearly" ? "block" : "hidden"}>Buy now</a>
            </button>
          </div>
        </div>
        <div>
          <h6 className={`${montserrat.className} text-[#f0deb8]`}>*Características adicionales podrían modificar el total</h6>
        </div>
      </section>
      <section id="contact" className="flex flex-col items-center gap-4"> {/*Contact*/}
        <h1 className={`${philosopher.className} text-center w-full text-4xl text-[#f0deb8]`}>Contacto</h1>
        <div className="w-full md:w-[600px] h-[600px] md:h-[700px] flex flex-col bg-white rounded-xl text-black shadow-[1px_1px_30px_5px]">
          <form action="https://formsubmit.co/nahuh08@gmail.com" method="POST">
            <div className="w-full lg:w-[600px] lg:h-[800px] h-100vh flex flex-col gap-[2rem] p-[2rem] md:p-[5rem]">
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" requiredplaceholder="Name" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
              </div>
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="service">Servicio</label>
                <select defaultValue={""} id="service" name="service" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]">
                  <option value="">Servicios...</option>
                  <option value="1">Digitales</option>
                  <option value="2">Lingüísticos</option>
                </select>
              </div>
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="E-mail" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] max-h-[40px]"></input>
              </div>
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" placeholder="Hablemos de su proyecto..." className="resize-none border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[80px]"></textarea>
              </div>
              <button id="submit" type="submit" className="border-none border-gray-200 rounded-lg w-full md:w-[70%] h-[40px] bg-black text-white hover:bg-[#232222] shadow-[4px_3px_8px_black] self-center">Enviar</button>
            </div>
          </form>
        </div>
      </section>      
    </div>
  );
}