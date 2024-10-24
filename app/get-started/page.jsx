import Image from "next/image";
import React from "react";
import Hero from "./hero";

export default function GetStarted() {
  return (
    // parent container
    <div>
      <Hero />

      <div className="flex flex-col">
        <div className="items-center   m-auto">
          <Image
            src="/plan.png"
            height={500}
            width={500}
            alt="Image"
            className="mt-20"
          />
        </div>
        <div className="items-center   m-auto">
          <Image
            src="/plan.png"
            height={500}
            width={500}
            alt="Image"
            className="mt-20"
          />
        </div>
        <div className="items-center   m-auto">
          <Image
            src="/plan.png"
            height={500}
            width={500}
            alt="Image"
            className="mt-20"
          />
        </div>
      </div>
    </div>
  );
}
