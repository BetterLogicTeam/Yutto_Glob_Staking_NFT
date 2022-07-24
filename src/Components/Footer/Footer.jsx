import React from 'react';
import {BsFacebook}  from 'react-icons/bs';
import {IoLogoTwitter}  from 'react-icons/io';
import {FaTelegramPlane}  from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer class="dark:bg-jacarta-900 page-footer footer_main bg-white" style={{backgroundColor:"#0D102D"}}>
      <div class="container">
	    <div class="grid grid-cols-12 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
          <div class="col-span-3 md:col-span-4">
            {/* <!-- Logo --> */}
            <a href="index.html" class="mb-6 inline-block">
              <img src="logo.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
              <img src="logo_white.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
            </a>
            <p class="dark:text-jacarta-300 mb-12" style={{color:"gray"}}>
              Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
            </p>
            {/* <!-- Socials --> */}
             <div class="flex space-x-5">
              <a href="https://www.facebook.com/Metamaxsnft/?ref=pages_you_manage" target="_blank" class="group">
                <BsFacebook></BsFacebook>
              </a>
              <a href="#"  target="_blank" class="group">
                <IoLogoTwitter></IoLogoTwitter>
              </a>
              <a href="#" target="_blank" class="group">
                <BsFacebook></BsFacebook>
              </a>
             <a href="#" target="_blank"> 
              <FaTelegramPlane></FaTelegramPlane>
              </a>
            </div>
          </div>
            <div class="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
            <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white" style={{color:"#fff"}}>USEFUL LINK</h3>
            <ul class="dark:text-jacarta-300 flex flex-col space-y-1" style={{color:"gray"}}>
              <li>
                <a href="index.html" class="hover:text-accent dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="about.html" class="hover:text-accent dark:hover:text-white">About us</a>
              </li>
              <li>
                <a href="collections.html" class="hover:text-accent dark:hover:text-white">Collection</a>
              </li>
              <li>
                <a href="benefits.html" class="hover:text-accent dark:hover:text-white">Benefits</a>
              </li>
               <li>
                <a href="Attributes.html" class="hover:text-accent dark:hover:text-white">Attributes</a>
              </li>
              <li>
                <a href="roadmap.html" class="hover:text-accent dark:hover:text-white">Roadmap</a>
              </li>
              <li>
                <a href="mint.html" class="hover:text-accent dark:hover:text-white">Mint</a>
              </li>
             </ul>
          </div>

         

        </div>
        <div class="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
          <span class="dark:text-jacarta-400 text-sm"
            >&copy;
            <script>
              document.write(new Date().getFullYear())
            </script>
           
            <a href="https://www.jutto.info" class="hover:text-accent">www.jutto.info</a></span
          >
          <ul class="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
            <li>
              <a href="#" class="hover:text-accent">Terms and conditions</a>
            </li>
            <li><a href="#" class="hover:text-accent">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer