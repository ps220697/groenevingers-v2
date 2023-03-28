import Image from "next/image"

const Vestigingen = () => {
    return (
        <>
            <div>
                <h1 className="flex ml-12 text-3xl font-bold leading-tight tracking-tight lg:text-4xl p-4">Onze vestigingen</h1>
                <div className="grid grid-cols-1 p-4 mb-5 sm:grid sm:grid-cols-2 md:grid-rows-2 lg:grid lg:grid-cols-3 lg:grid-rows-1">
                    <div className="bg-slate-100 max-w-xs mx-auto p-5 rounded-3xl shadow-xl hover:translate-y-5 transform transition ease-in-out duration-500 mb-10">
                        <div className="">
                            <Image className="rounded-lg mb-5" alt="kerk" width={640} height={350} src='/best.webp' />
                            <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-4xl">Best</h1>
                            <p>Tuinstraat 167</p>
                            <p>2587 WD Nuenen</p><br></br>
                            <p>Bel +31 6 22811892</p>
                            <a href="https://goo.gl/maps/h15q8zuPUgjDG7HT6" target="_blank" className="text-green-500">Plan je route</a>
                        </div>
                    </div>
                    <div className="bg-slate-100 max-w-xs mx-auto  p-5 rounded-3xl shadow-xl hover:translate-y-5 transform transition ease-in-out duration-500 mb-10">
                        <div className="">
                            <Image className="rounded-lg mb-5" alt="kerk" width={640} height={350} src='/veldhoven.jpg' />
                            <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-4xl">Veldhoven</h1>
                            <p>Polderstraat 17</p>
                            <p>5509LB Veldhoven</p><br></br>
                            <p>Bel +31 6 49958756</p>
                            <a href="https://goo.gl/maps/UxQjojL3gfqt25Lm8" target="_blank" className="text-green-500">Plan je route</a>
                        </div>
                    </div>
                    <div className="bg-slate-100 max-w-xs mx-auto  p-5 rounded-3xl shadow-xl hover:translate-y-5 transform transition ease-in-out duration-500 mb-10">
                        <div>
                            <Image className="rounded-lg mb-5" alt="kerk" width={640} height={350} src='/nuenen.jpg' />
                            <h1 className="flex text-3xl font-bold leading-tight tracking-tight lg:text-4xl">Nuenen</h1>
                            <p>Collse Hoefdijk 7</p>
                            <p>5674 VL Nuenen</p><br></br>
                            <p>Bel +31 6 34890256</p>
                            <a  href="https://goo.gl/maps/nVaVeGHms2UG6Xb86" target="_blank" className="text-green-500">Plan je route</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vestigingen;