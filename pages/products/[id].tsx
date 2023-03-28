import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { AppContext } from "next/app"

type HomeProps = {
  // TODO create type for products response
  product: any;
}

export async function getServerSideProps(context: any) {
  const { data } = await axios.get((`https://kuin.summaict.nl/api/product/${context.params.id}`), {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  });

  return {
    props: {
      product: data
    }
  }
}

const Products = ({ product }: HomeProps) => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 p-20">
          <div>
            <Image className="rounded-lg" alt="kerk" width={340} height={750} src={product.image} />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-normal leading-tight tracking-tight lg:text-xl">{product.name}</h1>
              <p>{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </div>
            <div className="flex">
              <div className="flex flex-row h-10 w-20 rounded-lg relative bg-transparent mr-4">
                <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
              <a href="/contact" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
                Toevoegen aan winkelwagen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;