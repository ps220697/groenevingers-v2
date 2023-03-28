import Image from "next/image";
import Pagination from "../../components/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

interface HomeProps {
    products: Product[];
}

export async function getServerSideProps() {
    const { data } = await axios.get('https://kuin.summaict.nl/api/product', {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
        }
    });

    return {
        props: {
            products: data,
        },
    };
}

const Products = ({ products }: HomeProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(35);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <div className="container">
                <div className="flex gap-20">
                    <div className="bg-slate-100 min-w-32 mx-auto max-h-64 p-5 rounded-3xl shadow-xl">
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-3 leading-tight tracking-tight text-3xl">Categorie</h1>
                            <a href="" className="mb-2">Planten</a>
                            <a href="" className="mb-2">Potten</a>
                            <a href="" className="mb-2">Potgrond</a>
                            <a href="" className="mb-2">Meubels</a>
                        </div>
                    </div>

                    <div className="flex flex-col w-screen">
                        <h1 className="font-bold mb-3 leading-tight tracking-tight text-6xl">Planten</h1>
                        <p>Je bekijkt nu de categorie planten.</p>
                        <div className="w-11/12 border-b-2 border-gray-300 pb-1"></div>
                        <div className="flex flex-row">
                            <div className="grid grid-cols-1 p-4 mb-5 gap-5 sm:grid sm:grid-cols-5">
                                {currentPosts.map((product: any) => {
                                    return (
                                        <div className="bg-slate-100 max-w-xs mx-auto p-5 rounded-3xl shadow-xl mb-10">
                                            <div>
                                                <Image className="rounded-lg mb-5" alt="kerk" width={240} height={25} src={product.image} />
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
                            </div>
                        </div>
                        <Pagination totalPosts={products.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;