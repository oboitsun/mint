import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import ConnectWallet from "./ConnectWallet";
import Cloud from "./Cloud";

export default function AboutUs({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  return (
    <div id="about-us" className="relative">
      <div className="my-container flex flex-col lg:flex-row items-center">
        <img className="kiwis-squad" src="/imgs/kiwis-group.png" alt="kiwis group" />
        <div className="about">
          <Heading>
            <p className="text-white">What is</p>
            <p className="text-orange pb-4"> Charity kiwis</p>
          </Heading>
          <SubHeading>
            Chariti Kiwis is a game centered around breedable, and oh-so-adorable
            creatures we call Charity Kiwis! Each cat is one-of-a-kind and 100% owned by
            you; it cannot be replicated, taken away, or destroyed.
          </SubHeading>
          <div className="w-1/2 ">
            <ConnectWallet
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              setUserAddress={setUserAddress}
              userAddress={userAddress}
            />
          </div>
        </div>
      </div>
      <img className="absolute top-10 left-10 w-1/6" src="/imgs/spot.svg" alt="spot" />
      <img className="absolute top-10 left-1/2 w-1/12" src="/imgs/spot.svg" alt="spot" />
      <img className="absolute top-3/4 -left-20 w-1/6" src="/imgs/spot.svg" alt="spot" />
      <Cloud />
    </div>
  );
}
