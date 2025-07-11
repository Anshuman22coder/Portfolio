import React from 'react'
import {words} from "../constants/index"
import Button from "../components/Button"
import { HeroExperience } from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import AnimatedCounter from '../components/AnimatedCounter'
const Hero = () => {
  useGSAP(()=>
  {
   gsap.fromTo('.hero-text h1',{
    y:50,
    opacity:0
   },{
     y:0,
     opacity:1,
     stagger:0.8, //like turtle effect
     duration:3,  //for how much duration it will stay ie the animation will stay ?

     ease:"bounce.inOut"
   }
  )})


  return (
    <section id="hero" className='relative overflow-hidden'>
       <div className='absolute top-0 left-0 z-10' >
        <img src="/images/bg.png"alt="bg"/>
       </div>

       <div className="hero-layout">
        {/*left hero content*/}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Translating
                <span className="slide">
                  <span className='wrapper'>
                    {words.map((word)=>(
                      <span key={word.text} className="flex items-center md:gap:3 gap-1 pb-2">
                        <img src={word.imgPath}
                        alt={word.text}
                        className='xl:size-12 md:size-10 size-7 md:p-2 p-1
                        rounded-full bg-amber-500'/>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into working solutions</h1>
              <h1>that solve problems</h1>
            </div>
            <p className="text-zinc-400 font-style: italic md:text-xl relative z-10 pointer-events-none">Anshuman this side from Durgapur,West Bengal
            </p>
            <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="See my work"/>
          </div>
        </header>
       
       {/*Right 3d model */}
       <figure>
         <div className='hero-3d-layout'>
          <HeroExperience/>
         </div>
       </figure>
       </div>
     <AnimatedCounter/>
    </section>
  )
}

export default Hero