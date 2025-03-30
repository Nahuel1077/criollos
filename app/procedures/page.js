import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  weight:['100', '400', '600', '800'],
  subsets: ["latin"],
  style: ["italic", "normal"],
})

export default function Procedures(){



    return(
        <section className={`${montserrat.className} grid justify-items-center grid-rows-1 gap-[2rem] sm:gap-[8rem] p-[4rem_0.5rem] lg:p-[8rem_3rem]`}>
            <div id="fase1" className="flex flex-wrap flex-col content-start items-start gap-[2rem] w-full sm:w-[80%]">
                <h1 className="text-2xl sm:text-5xl">Phase 1 - Tell us your <span className="text-[#ebc26b]">idea</span></h1>
                <div className="flex flex-col gap-[0.5rem]">
                    <h6>You share <span className="text-[#ebc26b]">your vision</span> – Tell us about your project, your goals, and your requirements.</h6>
                    <h6>We define the <span className="text-[#ebc26b]">scope</span> – We analyze your needs, suggest improvements, and define a roadmap.</h6>
                    <h6>Transparent <span className="text-[#ebc26b]">pricing</span> – We provide a detailed quote based on the project’s complexity and timeline.</h6>
                </div>
                <Image
                src="/light-bulb.svg"
                height={150}
                width={150}
                alt="idea"
                className="block xl:absolute self-center xl:self-end invert active:bg-[#005fed] active:shadow-[0px_-14px_25px_45px_#005fed] hover:bg-[#005fed] hover:shadow-[0px_-14px_25px_45px_#005fed] border-none rounded-[200px] duration-50"
                />
                <span className="w-[80%] h-[1px] bg-[#ebc26b] self-center sm:hidden"></span>
            </div>
            <div id="fase2" className="flex flex-wrap flex-col content-start xl:content-end items-start gap-[2rem] w-full sm:w-[80%]">
                <h1 className="text-2xl sm:text-5xl">Phase 2 – We <span className="text-[#ebc26b]">work</span> on your idea</h1>
                <div className="flex flex-col gap-[0.5rem]">
                    <h6><span className="text-[#ebc26b]">Agreement & Kickoff</span> – Once the contract is approved, our team starts working on your project.</h6>
                    <h6><span className="text-[#ebc26b]">Development</span> – We follow best practices to build a scalable and efficient solution.</h6>
                    <h6><span className="text-[#ebc26b]">On-time delivery</span> – Your project will be ready within the agreed deadline.</h6>
                </div>
                <Image
                src="/config.svg"
                height={150}
                width={150}
                alt="idea"
                className="block xl:absolute self-center xl:self-start border-none duration-[3s] hover:rotate-[370deg] active:rotate-[370deg] ease-in-out"
                />
                <span className="w-[80%] h-[1px] bg-[#ebc26b] self-center sm:hidden"></span>
            </div>
            <div id="fase3" className="flex flex-wrap flex-col content-start items-start gap-[2rem] w-full sm:w-[80%]">
                <h1 className="text-2xl sm:text-5xl">Phase 3 – Review, Optimize & <span className="text-[#ebc26b]">Launch</span></h1>
                <div className="flex flex-col gap-[0.5rem]">
                    <h6>You test, we <span className="text-[#ebc26b]">refine</span> – You review the final product, and we implement any necessary adjustments.</h6>
                    <h6><span className="text-[#ebc26b]">Hosting & Deployment</span> – We take care of hosting and deployment for a smooth launch.</h6>
                    <h6>Flexible <span className="text-[#ebc26b]">payment</span> options – You can choose monthly or yearly payments.</h6>
                </div>
                <Image
                src="/rocket.svg"
                height={150}
                width={150}
                alt="idea"
                className="block xl:absolute self-center xl:self-end border-none duration-[3s] rotate-[-45deg] hover:transform-[matrix(0.41,-0.41,0.41,0.41,-50,-200)] active:transform-[matrix(0.41,-0.41,0.41,0.41,-50,-200)] ease-in-out"
                />
                <span className="w-[80%] h-[1px] bg-[#ebc26b] self-center sm:hidden"></span>
            </div>
            <div id="fase4" className="flex flex-wrap flex-col self-center content-center items-start gap-[2rem] w-full sm:w-[80%]">
                <h1 className="text-2xl sm:text-5xl">Last phase – <span className="text-[#ebc26b]">Expand</span> your business!</h1>
                <div className="flex flex-col gap-[0.5rem]">
                    <h6>Ongoing <span className="text-[#ebc26b]">support</span>: Do you need updates or maintenance? We offer continuous assistance.</h6>
                    <h6><span className="text-[#ebc26b]">SEO & Optimization</span>: We ensure your website is fast, secure, and search-engine-friendly.</h6>
                    <h6>Thank you for choosing us and <span className="text-[#ebc26b]">enjoy your website!</span>.</h6>
                </div>
                <Image
                src="/firework.gif"
                height={300}
                width={300}
                alt="firework"
                className="block self-center border-none w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
                />
            </div>
            <button className="bg-[black] text-xl sm:text-2xl sm:w-[200px] w-[170px] h-[50px] rounded-xl m-[1rem] hover:bg-[#232222] shadow-[4px_3px_8px_black]">
                    <Link href="/#contact" className={`${montserrat.className}`}>Work together</Link>
                </button>
        </section>
    )
}