import Image from "next/image";
import increase from '/public/images/increase.png'
const DownloadInvoice = () => {
    return (
        <div className="w-[1410px] h-[890px] mx-auto my-8 p-4">


            <div className="border ">
                {/* Header section start here */}
                <section className="p-6 flex justify-between items-center">
                    <div>
                        <p className="font-poppins  text-xl  "><span className="font-poppins font-bold text-xl  ">Invoice No</span > <span> #I909112</span></p>
                        <p className="text-lg font-poppins "><span className="font-bold ">Date :</span> 07/09/2022</p>
                    </div>
                    <h1 class=" p-10 font-bold text-[#84878B] text-center font-poppins text-4xl leading-15">Logo</h1>

                    {/*Address start here  */}
                    <div className="text-right text-[#84878B]">
                        <p>1474 Avenue Kwame</p>
                        <p>NKRUMAH 10 BP 13395</p>
                        <p>10 Ouagadougou, Burkina Faso</p>
                        <p>finance@lizetransport.com</p>
                        <p>+1 (226) 50 272383</p>
                    </div>
                </section>
                <hr class="w-full border-t border-gray-300 my-10" />





                {/* middle section start here  */}
                <section className="p-6 flex justify-between items-center">
                    <div className="mt-4">
                        <p className="font-bold pb-3 text-black text-lg">Invoiced To:</p>
                        <p className="text-[#84878B]">John Doe</p>
                        <p className="text-[#84878B]"> Lize Transport Organization</p>
                        <p className="text-[#84878B]">+1 (226) 50 272383</p>
                    </div>

                    <div className="text-right">
                        <p className="text-[#84878B]">1474 Avenue Kwame,</p>
                        <p className="text-[#84878B]">NKRUMAH 10 BP 13395</p>
                        <p className="text-[#84878B]">10 Ouagadougou, Burkina Faso</p>
                        <p className="text-[#84878B]">finance@lizetransport.com</p>
                    </div>
                </section>
                <hr class="w-full border-t border-gray-300 mt-6 " />





                {/* bottom section start here */}
                <div className="mt-2 ">
                    <table className="table-auto  w-full">
                        <thead>
                            <tr className="font-bold border-b-2  border-gray-300  text-black ">
                                <th className=" px-4 text-left   py-4 flex  items-center">Products <Image className=" ml-1" alt="" src={increase} /></th>
                                <th className=" px-4 text-left   py-4">Description</th>
                                <th className=" px-4 text-left   py-4 flex items-center">Reservation<Image className=" ml-1" alt="" src={increase} /></th>
                                <th className=" px-4 text-left  py-4">Trip</th>
                                <th className=" px-4 text-right  py-4">Total</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Falcon8X TBA/LTI</td>
                                <td className="px-4 py-2">Private jet</td>
                                <td className="px-4 py-2">R2390</td>
                                <td className="px-4 py-2">T2390</td>
                                <td className="px-4 text-right py-2">11.500.000</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Champagne TC</td>
                                <td className="px-4 py-2">Added after reservation</td>
                                <td className="px-4 py-2">R2390</td>
                                <td className="px-4 py-2">T2390</td>
                                <td className="px-4 text-right  py-2">4.900.900</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Coca-Cola 20oz Can</td>
                                <td className="px-4 py-2">Added after reservation</td>
                                <td className="px-4 py-2">R2390</td>
                                <td className="px-4 py-2">T2390</td>
                                <td className="px-4 text-right  py-2">150.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr class="w-full border-t border-gray-300 mt-6 " />





                {/* Summary */}
                <div className="mt-8 mr-4">
                    <div className="flex justify-end ">
                        <div className="">
                            <div className="flex justify-between mb-4 ">
                                <p className="text-black font-bold  mr-10">Subtotal :</p>
                                <p>16.550.000</p>
                            </div>
                            <div className="flex justify-between  ">
                                <p className="text-black font-bold  ml-8">TVA :</p>
                                <p>2.800.000</p>
                            </div>
                        </div>
                    </div>

                    <hr class="w-full border-t border-gray-300 mt-6 " />

                    <div className="flex justify-end ">
                        <div className="flex  text-[#CAE138] pt-4 justify-between font-bold">
                            <p className="mr-8">Total :</p>
                            <p>19.350.000</p>
                        </div>
                    </div>
                </div>
                <hr class="w-full border-t border-gray-300 mt-6 " />


                {/* Footer */}
                <div className="my-4">
                    <p className="text-[#84878B]  text-center">Name Of Company</p>
                </div>
            </div>
        </div>
    );
};

export default DownloadInvoice;