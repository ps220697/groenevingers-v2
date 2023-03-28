import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"

const Home = () => {
  return (
    <>
            <div className="grid grid-cols-2 p-4">
            <div>
                <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-6xl p-4">Wij werken hier aan een nieuwe website.</h1>
                <p className="flex md:text-xl p-4 font-normal mb-2 from-neutral-600">GroeneVingers is een toonaangevend bedrijf dat gespecialiseerd is in alles wat met tuinieren te maken heeft.
                    Het bedrijf is opgericht met als doel mensen te helpen hun buitenruimtes om te toveren tot prachtige,
                    groene oases waarin ze kunnen ontspannen en genieten van de natuur.</p>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded ml-4">Neem contact op</button>
            </div>
            <Image className="rounded-lg" layout='fixed' alt="kerk" width={640} height={350} src='/Markt.jpg' />
        </div>
      <div className="p-4">
        <h1 className="flex text-3xl font-bold mx-10 mt-3">Bekijk alvast onze producten</h1>
      </div>
      <div className="grid grid-cols-3">
        <div className="">
        <Image className="rounded-lg" layout='fixed' alt="kerk" width={310} height={110} src='/Markt.jpg' />
          <h1>Product01</h1>
          <p>Prijs</p>
        </div>
        <div>
        <Image className="rounded-lg" layout='fixed' alt="kerk" width={310} height={110} src='/Markt.jpg' />
          <h1>Product02</h1>
          <p>Prijs</p>
        </div>
        <div>
        <Image className="rounded-lg" layout='fixed' alt="kerk" width={310} height={110} src='/Markt.jpg' />
          <h1>Product03</h1>
          <p>Prijs</p>
        </div>
      </div>
      <div className="p-4">
        <p className="flex mx-10 mt-3">Bekijk meer</p>
      </div>
    </>
  )
}

export default Home;