import React from 'react'
import Carde from './Carde/Carde'

function Benifits_main() {
  return (
    <div>
        <main class="pt-[5.5rem] lg:pt-24">
      {/* <!-- Banner --> */}
      <section class="relative">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="banner.jpg" alt="gradient" class="h-full w-full"/>
        </picture>
        <div class="container">
          {/* <!-- Page Title --> */}
          <div class="mx-auto max-w-2xl py-16 text-center">
            <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white" style={{color:"#fff"}}>Benefits</h1>
            <p class="dark:text-jacarta-300 text-lg leading-normal" style={{color:"#fff"}}>
             An exclusive private<br></br>-members club by Jutto
            </p>
          </div>
        </div>
      </section>
      <Carde />
      </main>
    </div>
  )
}

export default Benifits_main