import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import SecondHeader from "../components/Header";
const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    imageUrl: "/images/image 1.png",
    discount: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    imageUrl: "/images/AB.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    imageUrl: "/images/image 3.png",
    discount: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    imageUrl: "/images/image 4.png",
    isNew: true,
  },
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    imageUrl: "/images/image 1.png",
    discount: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    imageUrl: "/images/AB.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    imageUrl: "/images/image 3.png",
    discount: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    imageUrl: "/images/image 4.png",
    isNew: true,
  }, {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    imageUrl: "/images/image 1.png",
    discount: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    imageUrl: "/images/AB.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    imageUrl: "/images/image 3.png",
    discount: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    imageUrl: "/images/image 4.png",
    isNew: true,
  }, {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    imageUrl: "/images/image 1.png",
    discount: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    imageUrl: "/images/AB.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    imageUrl: "/images/image 3.png",
    discount: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    imageUrl: "/images/image 4.png",
    isNew: true,
  },
];
export default function ShopHero() {
  return (
    <><SecondHeader />
      {/* shopsect */}
      <div className="relative">
        <Image src={ShopImage} alt="Picture of the author" />
        <div className="absolute  ml-[-40px] mt-[-40px] top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={716}
            width={1440}
            className="w-full  h-full object-cover"
          />
          <h3 className="font-bold text-[1.5rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-8">


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product border rounded-lg p-4 shadow-lg hover:shadow-xl transition ${product.isNew ? 'new' : ''}`}
            >
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover rounded-md"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded-md">
                    {product.discount}
                  </div>
                )}
                {product.isNew && (
                  <div className="w-[48px]  h-[48px]   mt-[24px]  px-2 py-3 bg-green-500 text-white text-sm rounded-full">
                    New
                  </div>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">
                  {product.discountPrice ? (
                    <>
                      <span className="line-through text-gray-500">
                        {product.discountPrice}
                      </span>{" "}
                      {product.price}
                    </>
                  ) : (
                    product.price
                  )}
                </span>
              </div>

            </div>
          ))}
        </div>


        <div className=" flex gap-2 justify-center mt-[60px] " >
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
          <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>
        </div>
        <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[200px] bg-[#F9F1E7]">
          <div className=" ">
            <Image
              src="/images/Vector.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />

            <h4 className="font-bold">High Quality</h4>
            <p>crafted from top materials</p>
          </div>
          <div>
            <Image
              src="/images/Vector (1).png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h4 className="font-bold">Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
          <div>
            <Image
              src="/images/Vector (2).png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h4 className="font-bold">Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>
          <div>
            <Image
              src="/images/Vector (3).png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h4 className="font-bold">24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}