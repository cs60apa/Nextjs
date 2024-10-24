import React from "react";

export default function Hero() {
  return (
    <div>
      <h2 className="text-center font-bold  mt-44 text-6xl">
        Get Started with Nextjs with our easy setups
      </h2>
      <p className="text-center text-black mx-16 my-2 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo explicabo
        ipsam placeat magnam tempora consequuntur earum inventore eos corrupti.
        Nulla doloribus iusto atque ipsam ab ad quod? Ut, at esse.
      </p>

      <div className="flex justify-center space-x-10 mt-6">
        <button className="border border-black p-2 rounded-full bg-orange-400 text-black hover:bg-black hover:text-white hover:border-orange-400 ">
          Learn more
        </button>
        <button className="border border-black p-2 rounded-full bg-white text-black">
          Learn more
        </button>
      </div>
    </div>
  );
}
