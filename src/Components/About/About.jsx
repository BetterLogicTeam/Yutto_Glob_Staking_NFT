import React from 'react';
import './About.css'

function About() {
  return (
    <div>
        <section Class="bg-accent about_main dark:bg-jacarta-800 relative py-24">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="gradient_light.jpg" alt="gradient" class="h-full w-full"/>
        </picture>
        <div class="container">
          <div class="lg:flex lg:justify-between">
          <div className="home_maine_div">
                <img src="group-ntf-03.png" className="gift2"  alt="" />
                <img src="3D_elements.png" alt="" class="animate-fly hero3  " />
              </div>
            {/* <!-- Info -->
            <!-- Image --> */}
              {/* <div class="lg:w-[55%]">
                <div class="relative">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto mt-8 w-[80%] rotate-[8deg]">
                    <defs>
                      <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                        <path d="
                      M 0, 100
                      C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                      S 200, 17.000000000000004 200, 100
                          183, 200 100, 200
                          0, 183 0, 100
                  " fill="#9446ED"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#clipping)">
                      
                      <image href="group-ntf-03.png" width="180" height="180" clip-path="url(#clipping)"></image>
                    </g>
                  </svg>
                  <img src="3D_elements.png" alt="" class="animate-fly absolute top-0"/>
                </div> */}
              {/* </div> */}
              <div class="py-20 lg:w-[45%] lg:pl-16">
                <h5 class="font-display dark:text-white" style={{color:"#F067D8"}}>About Us</h5>
                <h2 class="text-jacarta-700 font-display mb-6 text-2xl light:text-white" style={{color:"#fff",fontWeight:"600"}}>
                  Jutto CLUB– YOUR KEY TO EXPLORING METAVERSE
                </h2>
                <p class="dark:text-jacarta-300 mb-8 text-lg leading-normal" style={{color:"#fff"}}>
                  Metaverse is a wide new world with endless possibilities and new experiences, and our Jutto Club is the key to 
                  unlocking this world. </p>
                <p class="dark:text-jacarta-300 mb-10" style={{color:"#fff"}}>
                  Jutto Club NFTs is a limited collection of unique, programmatically generated NFTs hosted on the BSC blockchain. Each
                   Jutto is unique – just like you and programmatically generated from over 200 possible traits, including clothing, 
                   city background, expression and more.
               
                </p>
                 
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About