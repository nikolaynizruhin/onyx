import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-stretch sm:items-center px-6 py-24 md:p-24 bg-[#111D28]">
      <div className="flex flex-col items-center justify-between">
        <Image className="sm:mb-36 w-52 md:w-72 lg:w-auto" src="/logo.svg" alt="Onyx Logo" width={371} height={123} />
        <Image className="sm:mb-36 w-[450px] md:w-[550px] lg:w-auto" src="/under-construction.svg" alt="Under Constraction" width={663} height={121} />
        <a href="tel:+380963737575" className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-[33px]">+38 096 373 75 75</a>
      </div>
    </main>
  );
}
