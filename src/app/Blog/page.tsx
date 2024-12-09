import Image from "next/image";
// import ShopeHero from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import SecondHeader from "../components/Header";

export default function Cart() {
    return (
        <>
            <SecondHeader />
            <div className="relative">
                <Image
                    src="/images/Im1.png"
                    alt="backgroud"
                    width={400}
                    height={400}
                    className="object-cover rounded-md w-[100%] h-[300px]"
                />
                <div className=" mt-[-40px]  ml-[-40px] absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">


                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                    />
                    <h3 className="font-bold text-[1.5rem]">Blog</h3>
                    <div className="flex items-center">
                        <h3>Home</h3>
                        <IoIosArrowForward />
                        <h3>cart</h3>
                    </div>
                </div>
                {/* <div> */}
                {/* </div> */}
            </div>

            <div className="">
                <div className="  mt-[80px] ml-[50px]  producDetails flex justify-around items-center p-4 w-[60%] h-[4rem] bg-[#F9F1E7] ">
                    <h2>Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Subtotal</h2>
                </div>
                <div>

                    <br />
                    <div className="flex justify-evenly gap-1">
                        <Image src="/images/Asgaard sofa 5.png" width={100} height={3} alt="Picture of the author" />
                        <p>Asgaard sofa</p>
                        <p>Rs. 250,000.00</p>
                        <input type="number" />
                        <p>Rs. 250,000.00</p>


                        <div className="cartTotal  bg-[#F9F1E7] text-center w-[20rem] h-[15rem] pt-[4rem] ">
                            <h2 className="font-bold text-[1.5rem]">Cart Totals</h2>
                            <p><span className="font-bold">Subtotal </span>  Rs. 250,000.00</p>
                            <p><span className="font-bold">Total</span> Rs. 250,000.00</p>

                            <button className="mt-5 rounded-md border-gray-900 border-2 p-2 pr-3  pl-3">Check Out</button>
                        </div>
                    </div>
                </div>

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
            <Footer />
        </>
    );
}