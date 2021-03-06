import Head from "next/head";
import Image from "next/image";
import Timer from "../components/Timer";
import { BsFacebook, BsInstagram } from "react-icons/bs";
export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="bg-gray-800 text-white ">
          <div className="  h-screen flex flex-col justify-center items-center gap-16  ">
            <p className="text-2xl font-bold">SOON.</p>
            <h2 className="md:text-4xl text-xl">We Are Coming Soon!</h2>
            <Timer />
            <a href="mailto:info@firstoneworshop.com" className="text-red-500">
              info@firstoneworshop.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/firstoneworkshop/"
                target="_blank"
                rel="noreferrer"
                className="bg-red-500  p-2 rounded-full"
              >
                <BsFacebook />
              </a>

              <a
                className="bg-red-500  p-2 rounded-full"
                href="https://instagram.com/f1_workshop?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-green-100 relative  w-full">
          <Image src="/img.jpg" layout="fill" objectFit="cover" priority />
        </div>
      </main>
    </div>
  );
}
