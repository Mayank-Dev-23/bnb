import Image from "next/image";

function Largecard({img,title}) {
    return (
        <div className="cursor-pointer transform transition hover:scale-105 duration-300 ease-out">

            <div className="relative h-80 w-80">
                <Image src={img} 
                layout="fill"
                className="rounded-xl"

                />
            </div>
            <h3 className="text-xl mt-3">{title}</h3>
        </div>
    )
}

export default Largecard
