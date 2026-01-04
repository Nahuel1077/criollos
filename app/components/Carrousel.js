'use client'
import Image from "next/image";
import { useState } from "react";

const carrousel = [
  {id:1, src:"/images/garufa1.jpg", title:"Café Garufa"},
  {id:2, src:"/images/garufa2.jpg", title:"Café Garufa"},
  {id:3, src:"/images/garufa3.jpg", title:"Café Garufa"},
  {id:4, src:"/images/garufa4.jpg", title:"Café Garufa"},
  {id:5, src:"/images/sumuebles1.jpg", title:"SuMuebles"},
  {id:6, src:"/images/sumuebles2.jpg", title:"SuMuebles"},
  {id:7, src:"/images/sumuebles3.jpg", title:"SuMuebles"},
  {id:8, src:"/images/sumuebles4.jpg", title:"SuMuebles"},
  {id:9, src:"/images/altosdelagunitas1.jpg", title:"Altos de Lagunitas"},
  {id:10, src:"/images/altosdelagunitas2.jpg", title:"Altos de Lagunitas"},
  {id:11, src:"/images/altosdelagunitas3.jpg", title:"Altos de Lagunitas"},
  {id:12, src:"/images/altosdelagunitas4.jpg", title:"Altos de Lagunitas"},
  {id:13, src:"/images/altosdelagunitas5.jpg", title:"Altos de Lagunitas"},
  {id:14, src:"/images/altosdelagunitas6.jpg", title:"Altos de Lagunitas"},
  {id:15, src:"/images/altosdelagunitas7.jpg", title:"Altos de Lagunitas"},
];

export default function Carrousel(){


    const [carrouselImage, setCarrouselImage] = useState(0);

    function handleNext() {
        setCarrouselImage((prev) => (prev + 1) % carrousel.length);
    }

    function handlePrevious() {
        setCarrouselImage((prev) => (prev - 1 + carrousel.length) % carrousel.length);
    }

    const current = carrousel[carrouselImage];

    return(
        <div id="carrousel" className="flex flex-col w-full items-center transition gap-8">
            <div className="flex flex-col items-center w-full">
            <Image
            src={current.src}
            alt="example"
            width={700}
            height={700}
            />
            <h6 className="text-black font-bold">{current.title}</h6>
            <button onClick={handleNext}>
                <Image
                src="right.svg"
                alt="right arrow"
                width={20}
                height={20}
                className="absolute right-[30%] top-[50%]"
                />
            </button>
            <button onClick={handlePrevious}>
                <Image
                src="left.svg"
                alt="left arrow"
                width={20}
                height={20}
                className="absolute left-[30%] top-[50%]"
                />
            </button>
            </div>
        </div>
    )
}