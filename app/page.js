'use client'
import Image from "next/image";
import { Philosopher, Cormorant_Upright, Cormorant, Montserrat, } from "next/font/google";
import { useState } from "react";
import 'animate.css';
import Carrousel from "./components/Carrousel";

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

export default function Home() {

  const [visibleD, setVisibleD] = useState(true);
  const [visibleL, setVisibleL] = useState(true);

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  
  const [pricing, setPricing] = useState("monthly");
  const [review, setReview] = useState(0);
  const [animation, setAnimation] = useState("");

  const reviews = [
    {id: "1", author: "Alicia Plotner", text:"Dedicated service, attentive professionals!", src:"/avatar-woman.svg", alt:"avatar-woman"},
    {id:"2", author: "Luis Menendez", text:"Great work! The linguistic team helped me with a user guide. Fast and efficient.", src:"/avatar-man1.svg", alt:"man 1"},
    {id:"3", author: "Richard Soto", text:"I needed a website for my coffee shop, definitely happy with the results!", src:"/avatar-man2.svg", alt:"man 2"},
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

  const [isOpen, setIsOpen] = useState(false);
  const images = [
      '/images/garufa1.jpg',
      '/images/garufa2.jpg',
      '/images/garufa3.jpg',
      '/images/garufa4.jpg',
      '/images/notflix1.jpg',
      '/images/notflix2.jpg',
      '/images/sumuebles1.jpg',
      '/images/sumuebles2.jpg',
      '/images/sumuebles3.jpg',
      '/images/sumuebles4.jpg',
      '/images/cdc1.jpg',
      '/images/cdc2.jpg',
      '/images/cdc3.jpg',
      '/images/cdc4.jpg',

  ];
  const toggleOffcanvas = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div className="gap-12 flex flex-col">
      <section id="title" className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          <video width="1000" height="1000" autoPlay loop muted className="w-screen h-screen sm:h-auto sm:w-full object-cover sm:object-fill object-[-85px_0px] sm:object-center brightness-50">
            <source src="/title.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 lg:gap-[4rem]">
            <h1 className={`${philosopher.className} italic sm:text-3xl md:text-5xl z-10 w-300px lg:w-[900px] text-center`}>We will make your business grow digitally and reach global clients</h1>
            <div className="flex flex-row gap-4">
              <button className="bg-white text-black rounded-[8px] w-[120px] h-[35px] border-black hover:brightness-50 hidden sm:block"><a href="#solutions">See services</a></button>
              <button className="bg-black text-white rounded-[8px] w-[120px] h-[35px] border-white hover:brightness-50"><a href="#contact">Contact us</a></button>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" className="flex flex-col justify-center items-center gap-8 sm:p-[2rem_0rem]">
        <div className="flex flex-col md:p-8 w-full">
          <div className="items-start flex flex-col">
            <h3 className={`${cormorant.className} text-4xl text-[#f0deb8]`}>Digital Solutions</h3>
            <button onClick={() => setVisibleD(!visibleD)} className={`${cormorant_italic.className} italic border-none bg-transparent text-[#DBA95E]`}>{visibleD ? "See less" : "See more"}</button>
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
              <h3>UX/UI Design</h3>
              <h6 className="p-4">We create attractive and functional interfaces, combining visual design (UI) with an intuitive user experience (UX) to maximize usability and impact.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/web-development.svg"
                width={100}
                height={100}
                alt="logo"
                className="object-cover grayscale-100 p-4"
              />
              <h3>Web Development</h3>
              <h6 className="p-4">Custom web solutions that combine functionality, performance, and modern design. We create websites that not only look great but also deliver results.</h6>
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
              <h6 className="p-4">Boost your sales with a custom e-commerce solution. We design and develop online stores that are secure, easy to manage, and optimized for conversions.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/optimization.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Optimization & Edition</h3>
              <h6 className="p-4">We optimize and refine your website—better UX/UI, faster loading speeds, and improved SEO performance.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/customize.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Customized Software</h3>
              <h6 className="p-4">The perfect software for your business—custom automation, optimized workflows, and simple yet powerful solutions.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/maintenance.svg"
                width={100}
                height={100}
                alt="logo"
                className="p-4 invert"
              />
              <h3>Web Maintenance</h3>
              <h6 className="p-4">Web hosting, updates, security, monitoring, remediation, management.</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:p-8 w-full">
          <div className="items-start flex flex-col">
            <h3 className={`${cormorant.className} text-4xl text-[#f0deb8]`}>Linguistic Solutions</h3>
            <button onClick={() => setVisibleL(!visibleL)} className={`${cormorant_italic.className} italic border-none bg-transparent text-[#DBA95E]`}>{visibleL ? "See less" : "See more"}</button>
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
              <h3 className="text-center">Professional Certified Translation</h3>
              <h6 className="p-4">With excellent professionals, we provide translations on a variety of fields: legal, technical, marketing, education, financial, among others.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/transcription.svg"
                width={100}
                height={100}
                alt="logo"
                className="object-cover invert p-4"
              />
              <h3>Transcription</h3>
              <h6 className="p-4">Turn your audio and video into precise, well-formatted text. We provide high-quality transcriptions in English and Spanish.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/subtitling.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Subtitling</h3>
              <h6 className="p-4">High-quality subtitles in English and Spanish. We ensure synchronization, and readability for a seamless viewing experience.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/edition.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Post-Machine Edition</h3>
              <h6 className="p-4">AI translations, perfected by humans. We refine machine-generated text for accuracy, fluency, and a natural reading experience.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/localization.svg"
                width={100}
                height={100}
                alt="logo"
                className="invert p-4"
              />
              <h3>Localization</h3>
              <h6 className="p-4">We adapt your products to the culture and language of different target markets.</h6>
            </div>
            <div className="flex flex-col items-center justify-center border rounded-xl w-[250px] h-[300px]">
              <Image
                src="/web-translation.svg"
                width={100}
                height={100}
                alt="logo"
                className="p-4 invert"
              />
              <h3>Web Translation</h3>
              <h6 className="p-4">Go global by having your website translated and improve your worldwide market</h6>
            </div>
          </div>
        </div>
        
      </section>
      <section id="reviews" className="gap-14 flex flex-col items-center">
        <div className="flex items-center">
          <h2 className={`${philosopher.className} text-center w-full text-4xl text-[#f0deb8]`}>Why choosing us?</h2>
        </div>
        <div className={"flex flex-col items-center gap-4"}> {/* dropdown container */}
          <div className={`gap-24 flex flex-row items-center justify-between bg-white bg-[url(/firulete.svg)] bg-contain sm:bg-[center_right_17rem] bg-[center_right_28rem] hover:bg-right duration-[1s] ease-in-out bg-no-repeat bg-blend-normal text-black border-gray-600 rounded-xl w-[95vw] lg:h-[80px] lg:w-[800px] p-[0rem_1rem] ${dropdown1 ? "h-[180px] lg:h-[120px]":"h-[80px] "}`} /* "" */>
            <div className="flex flex-col items-start gap-4 lg:gap-0">
              <h6 className="font-bold">Experts in Linguistic and Development Solutions</h6>
              <h6 className={`${dropdown1 ? "block h-auto lg:h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>More than 5 years of experience working in a growing environment.</h6>
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
              <h6 className="font-bold">100% customized solutions</h6>
              <h6 className={`${dropdown2 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Our solutions will adapt to your necessities.</h6>
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
              <h6 className="font-bold">Digital and Linguistic solutions all in one place</h6>
              <h6 className={`${dropdown3 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>We offer a unique combination of digital and linguistic solutions to help your business thrive.</h6>
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
              <h6 className="font-bold">Detail-oriented</h6>
              <h6 className={`${dropdown4 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>Details are very important to us, they make a big difference.</h6>
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
              <h6 className="font-bold">Efficiency & Innovation Combined</h6>
              <h6 className={`${dropdown5 ? "block h-[25px] transition-all duration-75 ease-in-out animate__animated animate__fadeInDown":"hidden"}`}>We provide creative solutions focused on efficiency, delivering outstanding results.</h6>
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
      
      <section id="contact" className="flex flex-col items-center gap-4"> {/*Contact*/}
        <h1 className={`${philosopher.className} text-center w-full text-4xl text-[#f0deb8]`}>Contact us</h1>
        <div className="w-full md:w-[600px] h-[600px] md:h-[700px] flex flex-col bg-white rounded-xl text-black shadow-[1px_1px_30px_5px]">
          <form action="https://formsubmit.co/general@criollos-solutions.com" method="POST">
            <div className="w-full lg:w-[600px] lg:h-[800px] h-100vh flex flex-col gap-[2rem] p-[2rem] md:p-[5rem]">
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" requiredplaceholder="Name" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
              </div>
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="service">Service</label>
                <select defaultValue={""} id="service" name="service" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]">
                  <option value="">Choose...</option>
                  <option value="1">Development</option>
                  <option value="2">Linguistic</option>
                </select>
              </div>
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="E-mail" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] max-h-[40px]"></input>
              </div>
              <div className="flex flex-col gap-6 content-center flex-wrap items-start">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Tell us about your project..." className="resize-none border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[80px]"></textarea>
              </div>
              <button id="submit" type="submit" className="border-none border-gray-200 rounded-lg w-full md:w-[70%] h-[40px] bg-black text-white hover:bg-[#232222] shadow-[4px_3px_8px_black] self-center">Submit</button>
            </div>
          </form>
        </div>
      </section> 
      <section id="floater" className="block w-[140px] h-[100px] fixed top-[80%] left-[60%] md:left-[80%] z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); toggleOffcanvas(); }} className={`${cormorant.className} text-[#f0deb8] text-sm flex flex-col items-center hover:opacity-70`}><Image
            width={40}
            height={40}
            alt="logo"
            src="/C (1).png"
            />
          See some of our projects
        </a>
        {isOpen && (
                <div className="fixed top-0 right-0 w-full bg-white shadow-lg h-full z-[5] p-[120px_40px_40px_40px] overflow-y-auto transition-transform duration-300 transform translate-x-0 flex flex-col">
                    <button onClick={toggleOffcanvas} className="text-black mb-4 self-end">✖</button>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {images.map((src, index) => (
                            <Image width={400} height={400} key={index} src={src} alt={`Imagen ${index + 1}`} className="w-[300px] lg:w-full h-[250px] object-scale-down rounded-lg"/>
                        ))}
                    </div> */}
                    <Carrousel/>
                </div>
        )}
      </section>     
    </div>
  );
}
