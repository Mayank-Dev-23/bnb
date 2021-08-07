import Image from "next/image"

function Maxcard({img,title,description,buttontext}) {
    return (
        <section className="relative py-14 cursor-pointer ">
        <div className="relative h-96  ">    
                <Image src={img} 
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            
            />
        </div>

        <div className="absolute top-32 left-12">
            <h3 className="font-semibold text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>

            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttontext}</button>

        </div>
        </section>
    )
}

export default Maxcard
