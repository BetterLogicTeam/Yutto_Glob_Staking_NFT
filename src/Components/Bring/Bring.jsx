import React from 'react';
import './Bring.css'

function Bring() {
  return (
    <div>
        <section class="relative pt-32 pb-24">
  <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
    <img src="gradient.jpg" alt="gradient" class="h-full w-full"/>
  </picture>
  <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
    <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full"/>
  </picture>
  <div class="container">
    <div class="mx-auto max-w-xl text-center">
      <h5 class="font-display text-center dark:text-white" style={{color:"#F067D8"}}>Road Map</h5>
      <h1 class="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
        The Journey of the Jutto Club </h1>
     </div>
      {/* <!--section2-->  */}
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline5">
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">01.</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Launch Jutto Club NFTs</h3>
                            <p class="description">
                                Launching a collection of 10000 unique NFTs which act as a membership for the Jutto Club
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">02.</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Jutto Club Game</h3>
                            <p class="description">
                                Jutto club will launch a Jutto Club game, so that the holders can play anywhere they go.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">03.</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Buy Land in Metaverse</h3>
                            <p class="description">
                                Jutto Club will go to the metaverse as the Jutto Club buys land in the metaverse to build its private members only club.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">04.</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Mini-Jutto collection</h3>
                            <p class="description">
                                The new exclusive NFT collection will be created benefiting the Jutto Club members
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  </div>
</section>
    </div>
  )
}

export default Bring