import Image from "next/image"

function Smallcard({img,distance,location}) {
    return (
        <div className="flex space-x-4 m-2 mt-5   rounded-lg cursor-pointer hover:bg-gray-100
      hover:scale-105 transition transform duration-200 ease-out">
            {/* left */}
            <div className="relative h-16 w-16">
                <Image   src={img} 
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                />
            </div>


            {/* right */}

            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default Smallcard
