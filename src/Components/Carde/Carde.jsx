import React from 'react';
import './Carde.css'

function Carde() {
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
      <h5 class="font-display text-center dark:text-white" style={{color:"#F067D8"}}>Our Speciality</h5>
      <h1 class="font-display text-jacarta-700  text-center text-4xl font-medium dark:text-white">
        BENEFITS OF Jutto CLUB NFTs
      </h1>
      <p class="dark:text-jacarta-200 mb-16 text-lg leading-normal">
        Holders of Jutto NFTs will get exclusive membership to Jutto club: a private members only club in the metaverse
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-4">
      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-5 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <img src="item-01.png" alt="img"/>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
          Own the full commercial rights
        </h3>
        <p>When you purchase a Jutto Club NFT, the art is yours, whether you want to sell it or use it in advertising</p>
      </div>

      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-5 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
             <img src="item-02.png" alt="img"/>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto max-w-[9.625rem] text-lg dark:text-white">
          Explore the Metaverse with us
        </h3>
     <p>By joining the Jutto Club, you will have access to every metaverse we enter. Plus there will be additional
	 perks within our metaverse Private members club for Jutto Club NFT holders</p>
      </div>

      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-5 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <img src="item-05.png" alt="img"/>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto  max-w-[9.625rem] text-lg dark:text-white">
          Display art in high resolution
        </h3>
        <p>All Jutto Club NFTs are available as high-resolution jpegs,
		which allows you to print a high-quality physical copy or display it on screen</p>
      </div>
	  <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-5 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
              <img src="item-07.png" alt="img"/>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto  max-w-[9.625rem] text-lg dark:text-white">
         Be part of a global community
        </h3>
        <p>Make authentic connections and become a part of a global community that empowers
		and supports each other on this exciting journey to the metaverse.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Carde