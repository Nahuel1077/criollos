
import {  Philosopher, Cormorant_Upright, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '400',
})

const cormorant = Cormorant_Upright({
  weight:'400',
  subsets: ["latin"],
})

const montserrat = Montserrat({
    weight:['100', '400', '600', '800'],
    subsets: ["latin"],
    style: ["italic", "normal"],
})

export default function AboutUs(){


    return(
        <section className="flex flex-col items-center justify-center p-[6rem_0rem_0rem_0rem] gap-[3rem] overflow-hidden">
            <h1 className={`${philosopher.className} text-5xl text-[#f0deb8]`}>About us</h1>
            <div className="flex flex-col items-center bg-[#00000026] gap-[3rem] sm:gap-[0rem]">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="sm:w-[50vw] w-full">
                        <Image
                        src="/about-us-coding.jpg"
                        width={800}
                        height={600}
                        alt="coding"
                        className="w-full"
                        />
                    </div>
                    <div className={`${montserrat.className} sm:w-[50vw] w-full text-justify p-[1rem]`}>
                        <h3 className="text-4xl text-center sm:text-start">Development Services</h3>
                        <h6 className="text-wrap sm:w-[90%] text-justify sm:text-start">
                            We are a team of passionate and experienced developers dedicated to delivering exceptional results. Our journey began just like many small companies—working extra hours, giving our best, and always going the extra mile to ensure our customers’ satisfaction. Today, we continue to push boundaries, combining innovation and commitment to bring every project to life with excellence.
                        </h6>
                    </div>
                </div>
                <span className="sm:hidden w-[90%] h-0.5 self-center bg-[#f0deb8]"></span>
                <div className="flex flex-col-reverse sm:flex-row items-center">
                    <div className={`${cormorant.className} w-full sm:w-[50vw] text-justify p-[1rem]`}>
                        <h3 className="text-5xl text-center sm:text-start">Linguistic Services</h3>
                        <h6 className="text-wrap w-[100%] text-xl text-justify sm:text-start">
                            We take great pride in our outstanding team of linguists, who consistently go above and beyond to deliver exceptional results. Their dedication and expertise allow them to handle large-scale projects with tight deadlines, always ensuring precision and timely delivery. It is truly inspiring to see their hard work and commitment in action. Currently, we are hoping to hire more exceptional translators to join our team soon.
                        </h6>
                    </div>
                    <div className="sm:w-[50vw] w-full">
                        <Image
                        src="/about-us-writing.jpg"
                        width={800}
                        height={600}
                        alt="writing"
                        className="w-full"
                        />
                    </div>
                </div>
                <span className="sm:hidden w-[90%] h-0.5 self-center bg-[#f0deb8]"></span>
            </div>
            <div className="flex flex-col items-center">
                <h1 className={`${philosopher.className} text-2xl sm:text-7xl text-[#f0deb8] `}>How can we help you?</h1>
                <button className="bg-[black] text-xl sm:text-2xl w-[170px] h-[50px] rounded-xl m-[1rem] hover:bg-[#232222] shadow-[4px_3px_8px_black]">
                    <Link href="/#contact" className={`${montserrat.className}`}>Contact us</Link>
                </button>
            </div>
        </section>    
    )
}