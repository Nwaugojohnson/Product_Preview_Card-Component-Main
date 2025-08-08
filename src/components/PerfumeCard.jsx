import React from "react";
import perfume from "../assets/images/image-product-mobile.jpg";
import perfume2 from "../assets/images/image-product-desktop.jpg";
import Icon from "../assets/images/icon-cart.svg";

const PerfumeCard = () => {
  return (
    <div className="min-h-screen bg-[#f2ebe3] flex items-center justify-center p-4">
      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-2xl bg-white rounded-xl overflow-hidden">
        <div className="w-1/2">
          <img src={perfume2} alt="" className="h-full" />
        </div>

        {/* Product Info Section */}
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xs font-fraunces text-[#6c7289] font-[500] tracking-[0.6em] mb-4">
              PERFUME
            </h2>
            <h1 className="text-5xl mb-6 font-[700] font-montserrat">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-lg font-fraunces font-[700] mb-6 text-[#6c7289] leading-relaxed ">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <p className="text-4xl mr-4 font-[700] font-montserrat">$149.99</p>
              <p className="text-sm font-fraunces font-[500] line-through">$169.99</p>
            </div>
            <button className="w-full bg-[#3c8067] cursor-pointer hover:bg-[#1b4133] text-white font-fraunces font-[700] py-3 px-4 rounded-lg flex items-center justify-center transition-colors">
              <img src={Icon} alt="" className="w-4 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-sm bg-white rounded-xl overflow-hidden">
        <div className="aspect-square">
          <img src={perfume} alt="" />
        </div>

        {/* Product Info Section */}
        <div className="p-6">
          <h2 className="text-xs text-[#6c7289] font-fraunces font-[700] tracking-[0.6em] mb-3">
            PERFUME
          </h2>
          <h1 className="text-[2.2rem] font-[700] mb-4 font-montserrat">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[18px] text-[#6c7289] font-[700] mb-6 leading-relaxed font-fraunces">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex items-center mb-6">
            <p className="text-4xl font-[700] mr-4 font-montserrat">$149.99</p>
            <p className="text-sm font-fraunces font-[500] line-through">$169.99</p>
          </div>

          <button className=" cursor-pointer w-full bg-[#3c8067] font-fraunces font-[700] hover:bg-[#1b4133] text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors">
           <img src={Icon} alt="" className="w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCard;
