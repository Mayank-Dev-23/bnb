import Head from 'next/head'

import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Largecard from '../Components/Largecard'
import Maxcard from '../Components/Maxcard'
import Smallcard from '../Components/Smallcard'

export default function Home({exploredata,carddata}) {
  



  
  return (
    <div >
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header  />
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16 shadow-">
        <section  className="pt-6 ">
          <h2 className="text-2xl md:text-3xl font-semibold pb-5">Explore NearBy</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-md rounded-lg">
  {exploredata?.map((item)=>(
    <Smallcard 
    key={item.img}
    img={item.img}
    distance={item.distance}
    location={item.location}
    />
  ))}
</div>
        </section>
        <h2 className="text-2xl sm:text-3xl py-4 font-semibold">Live Anywhere</h2>
<div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3  ">
        {carddata?.map((item)=>(
          <Largecard  
          key={item.img}
          img={item.img}
          title={item.title}
          />
        ))}
</div>
        <section>
          <Maxcard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="whishlists created by Airbnb"
          buttontext="Get Inspire"
          
          />

        </section>
      </main>

      <Footer />

    </div>
  )
}


export async function getStaticProps(){
  const exploredata=  await fetch("https://links.papareact.com/pyp").then(
    res=>(res.json())
  )

  const carddata= await fetch("https://links.papareact.com/zp1").then(res=>(res.json()))
  return{
    props:{
      exploredata,
      carddata
    }
}
}
