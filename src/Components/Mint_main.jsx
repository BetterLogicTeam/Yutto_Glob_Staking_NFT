import React, { useEffect, useState } from "react";
import "./Mint_main.css";
import { loadWeb3 } from "../Api/Api";
import { wirecontractadress, wirecontractabi } from "../contracts/contract";
import { tokencontractadress, tokencontractabi } from "../contracts/contract";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

function Mint_main() {
  // let [btnOne, setButtonOne] = useState("Mint With BNB");
  let [value, setValue] = useState(1);
  let [mintPriceBnb, setMintPriceBnb] = useState(0);
  let [mintingtokenPrice, setMintingtokenPrice] = useState(0);


  const increaseValue = () => {
    if (value < 10) {
      setValue(++value);
      console.log("setValue", value);
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
      console.log("setValue", value);
    }
  };
  // const [users, setUsers] = useState([])
  let [btnOne, setButtonOne] = useState("Mint With BNB");
  const [inputdatahere, setinputdatahere] = useState("100");

  const myMintBNB = async () => {
    // console.log("res",inputValue)
    // setShowModal(false)
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net");
    } else {
      try {
        let res = await axios.get(
          `https://whebuynft.herokuapp.com/checkuser?id=${inputdatahere}`
        );
        // console.log("resdatahere", res.data);
        res = res.data.data;

        if (res == 1) {
          try {
            setButtonOne("Please Wait While Processing");
            // console.log("mintFor BNB");
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(
              wirecontractabi,
              wirecontractadress
            );

            let tokenContractOf = new web3.eth.Contract(
              tokencontractabi,
              tokencontractadress
            );


            let totalnft = await nftContractOf.methods
              .ValueinToken()
              .call();

            // console.log("totalnft", totalnft);

            if (value > totalnft) {
              toast.error(`Maximum Limit is ${totalnft} `);
            } else {
              let maxSupply = await nftContractOf.methods.maxsupply().call();

              let ttlSupply = await nftContractOf.methods.totalSupply().call();
              let paused = await nftContractOf.methods.paused().call();
              let maxLimitprTransaction = await nftContractOf.methods
                .MaxLimitPerTransaction()
                .call();
              let mintingbnbPrice = await nftContractOf.methods.ValueinToken().call();
              let mintingtokenPrice = await nftContractOf.methods.Valueinbnb().call();

              mintingbnbPrice = parseFloat(mintingbnbPrice);
              mintingtokenPrice = parseFloat(mintingtokenPrice);

              let totalMintingPriceBNB = value * mintingbnbPrice;
              let totalMintingPriceToken = value * mintingtokenPrice;


              totalMintingPriceBNB   =  totalMintingPriceBNB + 0.0001;
              totalMintingPriceToken = totalMintingPriceToken + 0.0001;


              
              
              // let getdata = await axios.get(
                //   "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
                // );
                // getdata = getdata.data.price;
                // let usid = totalMintingPriceBNB * getdata;
                console.log("Here");
               
                  // if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                    // if (paused == false) {
                    //   if (value < parseInt(maxLimitprTransaction)) {
                        
                        
                        let tkkn = await tokenContractOf.methods
                        .approve(wirecontractadress ,totalMintingPriceToken.toString())
                        .send({from: acc});
                        


                      let hash = await nftContractOf.methods
                        .mint_with_token(value ,totalMintingPriceToken.toString())
                        .send({
                          from: acc,
                          value: totalMintingPriceBNB.toString(),
                        });
                      setButtonOne("Mint With BNB");
                      // console.log("hash", hash.transactionHash);
                      // tkkn = tkkn.transactionHash;
                      hash = hash.transactionHash;
                      mintingbnbPrice = web3.utils.fromWei(
                        mintingbnbPrice.toString()
                      );
                      let postapi = await axios.post(
                        "https://whebuynft.herokuapp.com/buynfttoken",
                        {
                          uid: inputdatahere,
                          address: acc,
                          nft: value,
                          token: mintingbnbPrice,
                          txn: "hash",
                        }
                      );
                      toast.success("Transaction Confirmed");

                      // console.log("postapi", postapi);
                      toast.success(postapi.data.data);
                      setinputdatahere(" ");
                  //   } else {
                  //     toast.error(
                  //       "No of Minting is Greater than maximum limit Per Transaction"
                  //     );
                  //     setButtonOne("Mint With BNB");
                  //   }
                  // } else {
                  //   toast.error("Paused is False");
                  //   setButtonOne("Mint With BNB");
                  // }
                // } else {
                //   toast.error("Max Supply is Greater than total Supply");
                //   setButtonOne("Mint With BNB");
                // }
              
            }
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setButtonOne("Mint With BNB");
          }
        } else {
          toast.error("User Is Not Exists");
          setinputdatahere(" ");
        }
      } catch (e) {
        setinputdatahere(" ");
        toast.error("User Is Not Exists");
      }
    }
  };

  let bnb_mint = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      alert("No Wallet");
    } else if (acc == "Wrong Network") {
      alert("Wrong Network");
    } else {
      const web3 = window.web3;
      let wire_contract_instance = new web3.eth.Contract(
        wirecontractabi,
        wirecontractadress
      );

      const maxlimite = await wire_contract_instance.methods
        .ValueinToken()
        .call();
      console.log("token_valu", maxlimite);
    }
  };


  const getMydata = async () => {
    let acc = await loadWeb3();

    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(
        wirecontractabi,
        wirecontractadress
      );

      let mintingtokenPrice = await nftContractOf.methods.ValueinToken().call();
      let mintingbnbPrice = await nftContractOf.methods.Valueinbnb().call();
      console.log("Value", mintingbnbPrice);
      console.log("tokenValue", mintingtokenPrice);


      mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
      mintingbnbPrice = parseFloat(mintingbnbPrice).toFixed(4);
      setMintPriceBnb(mintingbnbPrice);

      mintingtokenPrice = web3.utils.fromWei(mintingtokenPrice);
      mintingtokenPrice = parseFloat(mintingtokenPrice).toFixed(4);
      setMintingtokenPrice(mintingtokenPrice);

    } catch (e) {
      console.log("Error while getting minting Price", e);
    }
    
  };

  useEffect(() => {
    getMydata();
  }, []);

  return (
    <div>
      <section class="relative lg:py-24" style={{ paddingTop: "130px" }}>
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="gradient_light.jpg" alt="gradient" class="h-full" />
        </picture>
        <div class="container">
          {/* <!-- Item --> */}
          <div class="md:flex md:flex-wrap">
            {/* <!-- Image --> */}
            <figure class="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
              <img
                src="item-11.png"
                alt="item"
                class="rounded-2.5xl cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
                width="80%"
              />

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="imageModal"
                tabindex="-1"
                aria-labelledby="buyNowModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                  <img
                    src="assets/img/hero/item-11.png"
                    alt="item"
                    width="80%"
                  />
                </div>

                <button
                  type="button"
                  class="btn-close absolute top-6 right-6"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-6 w-6 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                  </svg>
                </button>
              </div>
              {/* <!-- end modal --> */}
            </figure>

            {/* <!-- Details --> */}
            <div class="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
              <h1 class="font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white">
                MINT
              </h1>

              <div class="mb-8 mint_in items-center space-x-4 whitespace-nowrap">
                <div className="btn plus" onClick={() => decreaseValue()}>
                  -
                </div>{" "}
                <div class="">
                  <input
                    class="count-form"
                    type="text"
                    id="qa"
                    // value="1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>{" "}
                <div className="btn minus" onClick={() => increaseValue()}>
                  +
                </div>
              </div>
              {/* <!-- Creator / Owner --> */}

              <div class="token_price">
                    <a href="user.html" class="text-accent">
                      <p class="text-sm font-bold">
                        <h1 style={{ fontSize: "28px" }}>
                          {mintingtokenPrice} Jutto Token
                          {/* Price : {mintPriceBnb} BNB */}
                        </h1>
                      </p>
                    </a>
                  </div>
              <div class="  mint_bbbb ">
                <div class="mr-8  mint_bbbb2 flex">
                  <figure class="mr-4 shrink-0 bttn">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                      class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                      onClick={() => myMintBNB()}
                    >
                      {btnOne}
                    </a>
                  </figure>

                </div>

                <div class="price">
                    <a href="user.html" class="text-accent ">
                      <p class="text-sm font-bold">
                        <h1 style={{ fontSize: "28px" }}>
                          {/* {mintingtokenPrice} */}
                          Price : {mintPriceBnb} BNB
                        </h1>
                      </p>
                    </a>
                  </div>
              </div>
              {/* <!-- Creator / Owner --> */}
              {/* <div class="mb-8 flex flex-wrap">
                <div class="mr-8 mb-4 flex">
                  <figure class="mr-4 shrink-0">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" 
                    class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all">Mint With JTO</a>
                  </figure>
                  <div class="flex flex-col justify-center">
                     <a href="user.html" class="text-accent block">
                      <span class="text-sm font-bold"><h1 style={{fontSize:"28px"}}>Price : 0 JTO</h1></span>
                    </a>
                  </div>
                </div>
             </div> */}
              {/* <!-- Creator / Owner --> */}
              {/* <div class="mb-8 flex flex-wrap">
                <div class="mr-8 mb-4 flex">
                  <figure class="mr-4 shrink-0">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" 
                    class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all">Mint With Busd</a>
                  </figure>
                  <div class="flex flex-col justify-center">
                     <a href="user.html" class="text-accent block">
                      <span class="text-sm font-bold"><h1 style={{fontSize:"28px"}}>Price : 0 Busd</h1></span>
                    </a>
                  </div>
                </div>
             </div> */}
            </div>
            {/* <!-- end details --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mint_main;
