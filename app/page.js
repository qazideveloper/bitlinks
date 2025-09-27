import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const poppins = Geist({
  src: "../fonts/Poppins-ExtraBoldItalic",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {

  return (
    <div>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col justify-center items-center">
            <p className={`font-bold text-3xl ${poppins.className}`}>This is best URL shortener</p>
            <p className="text-center px-50 py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, earum!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asper
            </p>
            <div className='flex gap-3 my-2'>
              <Link href='/generate'><button className='bg-blue-400 text-black font-bold  rounded-lg py-2 px-5 '>Try now</button></Link>
              <Link href='/github'><button className='bg-blue-400 text-black font-bold  rounded-lg py-2 px-5'>GitHub</button></Link>
            </div>
          </div>
          <div className="relative">
            <Image className="mix-blend-darken" alt='a type of URL shortener' src='/vector.jpg' fill={true} />
          </div>

        </section>
      </main>
    </div>
  );
}
