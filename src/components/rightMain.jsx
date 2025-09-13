import Image from "next/image"

function rightMain() {
    return  (
        <div className="flex justify-end items-center">
            <div className="w-110 h-110 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <Image
                src="/images/saya.png" // taruh gambar di folder public/
                alt="Adit Profile"
                width={288}
                height={288}
                className="object-cover"
                />
            </div>
        </div>
    );
}

export default rightMain;