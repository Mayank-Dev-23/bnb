import Image from "next/image"


function Banner() {
    return (
        <div className=" relative banner ">
            <Image src="/hero.webp"
            layout="fill"
            objectFit="cover"

            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-lg sm:text-2xl font-semibold  ">Not sure <span className="text-red-400">where to go?</span> Perfect</p>
                < button className="bg-white px-10 py-4  my-3 hover:shadow-xl font-bold shadow-md rounded-full text-purple-600
                
                ">I'm flexible </button>
            </div>
            
        </div>
    )
}

export default Banner
