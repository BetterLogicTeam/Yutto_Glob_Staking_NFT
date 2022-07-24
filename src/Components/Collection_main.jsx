import React from "react";

function Collection_main() {
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
            <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white" style={{color:"#fff"}}>NFT</h1>
            <p class="dark:text-jacarta-300 text-lg leading-normal" style={{color:"#fff"}}>
             An exclusive private<br></br>-members club by Jutto
            </p>
          </div>
        </div>
      </section>
      {/* <!-- end banner -->  */}
	 {/* <!-- Process / Newsletter --> */}
     <section class="dark:bg-jacarta-800 relative py-24">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
     <img src="gradient.jpg" alt="gradient" class="h-full w-full"/>
   </picture>
   <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
     <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full"/>
   </picture>
         <div class="container">
         <h5 class="font-display text-center dark:text-white" style={{color:"#F067D8"}}>Join Jutto Club</h5>
           <h2 class="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white">
            Become a member of the exclusive<br></br>Jutto Club
           </h2>
           <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            </div>
   
         </div>
       </section>
     
      {/* <!-- end process / newsletter --> */}
  </main>
    </div>
  );
}

export default Collection_main;
