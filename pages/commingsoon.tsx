import Cta from "../components/cta"
import Artikelen from "../components/artikelen"
import Image from "next/image"
import axios from "axios";

type HomeProps = {
    // TODO create type for products response
    products: any;
}

export async function getServerSideProps() {
    const { data } = await axios.get('https://kuin.summaict.nl/api/product', {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    });

    return {
        props: {
            products: data
        }
    }
}

const Commingsoon = ({products}: HomeProps) => {
    return (
        <>
            <div className=" bg-slate-50">
                <div className="grid grid-rows-2 grid-cols-1 sm:grid sm:grid-cols-2 sm:grid-rows-1 p-4">
                    <div className="ml-10">
                        <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-6xl p-4">Wij werken hier aan een nieuwe website.</h1>
                        <p className="flex md:text-xl p-4 font-normal mb-2 from-neutral-600">GroeneVingers is een toonaangevend bedrijf dat gespecialiseerd is in alles wat met tuinieren te maken heeft.
                            Het bedrijf is opgericht met als doel mensen te helpen hun buitenruimtes om te toveren tot prachtige,
                            groene oases waarin ze kunnen ontspannen en genieten van de natuur.</p>
                        <a href="/contact" className="inline-flex items-center justify-center px-4 py-2.5 ml-4 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
                            Neem contact op
                        </a>
                    </div>
                    <div className="p-4">
                        <Image className="rounded-lg ml-auto" alt="kerk" width={640} height={350} src='/veldhoven.jpg' />
                    </div>
                </div>
            </div>
            <Cta />
            <Artikelen products={products} />
        </>
    )
}

export default Commingsoon;