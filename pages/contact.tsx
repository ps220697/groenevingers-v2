import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Vestigingen from "../components/vestigingen"
import Image from "next/image"

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 sm:grid-rows-1 bg-slate-50">
                <div>
                    <div className="mt-10 mb-10 ml-12">
                        <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-6xl p-4">Wij zijn benieuwd naar jou vraag!</h1>
                        <p className="flex md:text-xl p-4 font-normal mb-0 sm:mb-2 from-neutral-600">Neem contact met ons op of kom langs bij een van onze vestigingen.</p>
                    </div>
                </div>
                <div className="bg-black rounded-3xl p-10 sm:mr-10 sm:mt-10 text-white max-w-3xl  ">
                    <div>
                        <label>Naam</label>
                        <input placeholder="Naam" className="w-full h-10 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></input>

                    </div>
                    <div className="mt-3">
                        <label>Achternaam</label>
                        <input placeholder="Achternaam" className="w-full h-10 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></input>

                    </div>
                    <div className="mt-3">
                        <label>Email</label>
                        <input placeholder="Email" className="w-full h-10 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></input>

                    </div>
                    <div className="mt-3">
                        <label>Telefoonnummer</label>
                        <input placeholder="Telefoonnummer" className="w-full h-10 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></input>
                    </div>
                    <div className="mt-3">
                        <label>Bericht</label>
                        <textarea placeholder="Bericht" rows={5} className="w-full block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></textarea>
                    </div>
                    <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded mt-5 max-w-xs ">Verstuur</button>
                </div>
            </div>

            <Vestigingen />
        </>
    )
}

export default Contact;