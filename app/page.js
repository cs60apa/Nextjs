import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-6xl text-center font-semibold	mt-44 ">
        Welcome to Nextjs Tutorial
      </h2>
      <p className="text-center mt-4">
        Trying some styling with Tailwind CSS. This is a simple page created
        with Next.js and Tailwind CSS.
      </p>

      <div className="flex justify-center space-x-4 p-10">
        <Link href="/get-started">
          <button className="rounded-full p-2 border border-gray-500 bg-black text-white ">
            Get started
          </button>
        </Link>
        <Link href="/learn-more">
          <button className="rounded-full p-2 border border-gray-500  text-black ">
            Learn more
          </button>
        </Link>
      </div>

      <div className="flex justify-center mb-10">
        <Image src="/plan.png" alt="Next.js Logo" width={600} height={600} />
      </div>
    </div>
  );
}
