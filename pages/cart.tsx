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

const Cart = () => {
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-5sxl p-4">Winkelwagen</h1>
                        <div className="grid grid-rows-2 max-w-xl">
                            <div className="flex flex-col">
                                <div>
                                    <div className="border-gray-200 border w-full mt-2 mb-2"></div>
                                    <div className="mt-4">
                                        <Image className="rounded-lg mb-5" alt="kerk" width={240} height={25} src='/veldhoven.jpg' />
                                    </div>
                                    <div>
                                        <h1>Titel van product</h1>
                                        <p>Prijs</p>
                                        <p>Op voorraad</p>
                                        <a className="text-red-600">Verwijderen</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="border-gray-200 border w-full mt-2 mb-2"></div>
                                <div className="mt-4">
                                    <Image className="rounded-lg mb-5" alt="kerk" width={240} height={25} src='/veldhoven.jpg' />
                                </div>
                                <div>
                                    <h1>Titel van product</h1>
                                    <p>Prijs</p>
                                    <p>Op voorraad</p>
                                    <a className="text-red-600">Verwijderen</a>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="border-gray-200 border w-full mt-2 mb-2"></div>
                                <div className="mt-4">
                                    <Image className="rounded-lg mb-5" alt="kerk" width={240} height={25} src='/veldhoven.jpg' />
                                </div>
                                <div>
                                    <h1>Titel van product</h1>
                                    <p>Prijs</p>
                                    <p>Op voorraad</p>
                                    <a className="text-red-600">Verwijderen</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-3xl shadow-xl max-w-sm">
                        <h1 className="font-bold mb-4">Bestellings overzicht</h1>
                        <div className="flex flex-row justify-between">
                            <p>Subtotaal</p>
                            <p>2,99</p>
                        </div>
                        <div className="border-gray-200 border w-full mt-2 mb-2"></div>
                        <div className="flex flex-row justify-between">
                            <p>Verzending</p>
                            <p>2,99</p>
                        </div>
                        <div className="border-gray-200 border w-full mt-2 mb-2"></div>
                        <div className="flex flex-row justify-between">
                            <p>BTW</p>
                            <p className="">2,99</p>
                        </div>
                        <div className="border-gray-200 border w-full mt-2 mb-2"></div>
                        <div className="flex flex-row justify-between">
                            <p>Totaal</p>
                            <p className="">2,99</p>
                        </div>
                        <a href="/contact" className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
                            Bestellen
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;