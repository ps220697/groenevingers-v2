import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

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

const Artikelen = ({ products }: HomeProps) => {
    return (
        <>
            <div>
                <h1 className="flex ml-12 text-3xl mt-10 mb-10 font-bold leading-tight tracking-tight lg:text-4xl p-4">Onze producten</h1>
                <div className="grid grid-cols-1 p-4 mb-5 sm:grid sm:grid-cols-2 md:grid-rows-2 lg:grid lg:grid-cols-3 lg:grid-rows-1">
                    {products.slice(0,3).map((product: any) => {
                        return (
                            <div className="bg-slate-100 max-w-xs mx-auto p-5 rounded-3xl shadow-xl mb-10">
                                <div>
                                    <Image className="rounded-lg mb-5" alt="kerk" width={340} height={150} src={product.image} />
                                    <h1 className="flex font-normal leading-tight tracking-tight lg:text-xl">{product.name}</h1>
                                    <p className="mt-2 font-bold">{product.price}</p>
                                    <footer className="flex mt-5 ">
                                        <a href={`/products/${product.id}`}>Bekijk product</a>
                                        <a className="ml-2">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        )
                    })}
                    <div className="flex ml-12">
                        <a href="/products">Bekijk alle producten</a>
                        <a className="ml-2" href="/">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artikelen;