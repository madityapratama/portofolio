import Image from "next/image";

function rightMain() {
  return (
    <div className="flex justify-center md:justify-end items-center p-6 pt-20">
      <div className="w-45 h-45 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image
          src="/images/saya.png" // taruh gambar di folder public/
          alt="Adit Profile"
          width={288}
          height={288}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default rightMain;
