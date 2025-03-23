
import {  Philosopher, Cormorant_Upright } from "next/font/google";

const philosopher = Philosopher({
    subsets: ["latin"],
    weight: '400',
  })
  
  const cormorant = Cormorant_Upright({
    weight:'400',
    subsets: ["latin"],
  })

export default function NotDevelopedYet(){

    return(
        <section className={`${philosopher.className} flex flex-col items-center gap-8 p-[6rem_0rem_0rem_0rem]`}>
                
            <h1 className="text-xl sm:text-5xl">
                We are working on this!
            </h1>
            <h6>
                Try again later
            </h6>

        </section>
    )
}