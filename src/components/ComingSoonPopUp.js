import React, { useState } from "react";
import "../styles/pop-up.scss";
export default function ComingSoonPopUp({ showPopup, setShowPopup }) {
  const dayX = new Date("November 23, 2021 00:00:00").getTime();
  const today = Date.now();
  const [mintAmount, setmintAmount] = useState(1);
  const [showMint, setShowMint] = useState(dayX > today ? !false : !true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      onClick={handleClosePopup}
      className={`${
        showPopup ? "opacity-100 " : "pointer-events-none opacity-0"
      } transition-all duration-300 fixed z-40 bg-black bg-opacity-70 top-0 left-0 w-screen h-screen flex justify-center items-center`}
    >
      <div
        className="popup relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={handleClosePopup}
          className="popup-close absolute top-10 right-10 lg:-top-2.5 lg:-right-2"
        >
          x
        </button>
        {!showMint && (
          <p className="text-white text-7xl text-center font-guera">Coming soon!:)</p>
        )}
        {showMint && (
          <div className="popup-mint">
            <p className="text-white text-xl lg:text-7xl text-center font-guera">
              Sale live now!
            </p>
            <p className="text-orange text-xl lg:text-7xl text-center font-guera">
              Charity kiwis!
            </p>
            <p className="py-4 text-center uppercase text-white font-bold">
              8888 NFTS (1 ICP / NFT)
            </p>
            <div className="popup-mint-form">
              <div className="popup-mint-item">
                <p className="balance mr-auto">MY ICP BALANCE</p>
                <p className="text-orange">0 ICP</p>
              </div>
              <div className="popup-mint-item relative">
                <p className="">MINT AMOUNT</p>
                <div className="mx-auto flex">
                  <button
                    disabled={mintAmount <= 1}
                    onClick={() => {
                      setmintAmount((prev) => prev - 1);
                    }}
                    className="uppercase font-bold cursor-pointer w-5"
                  >
                    -
                  </button>
                  <p className="text-orange px-3 text-3xl">{mintAmount}</p>
                  <button
                    onClick={() => {
                      setmintAmount((prev) => prev + 1);
                    }}
                    className="uppercase font-bold cursor-pointer w-5"
                  >
                    +
                  </button>
                </div>
                <button className="bg-orange text-black font-bold h-full absolute top-0 right-0 px-6">
                  MAX
                </button>
              </div>
              <div className="popup-mint-item">
                {" "}
                <p className="balance mr-auto">TOTAL PRICE</p>
                <p className="text-orange">{mintAmount * 1} ICP</p>
              </div>
              <button className="popup-mint-item popup-mint-button"> Mint now </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
