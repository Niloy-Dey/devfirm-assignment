import Image from 'next/image';
import increase from '/public/images/increase.png'
import write from '/public/images/write.png'
import Ddelete from '/public/images/delete.png'
const InvoiceList = () => {
    return (
        <div>
            {/* Bottom section */}
            <section className=' ml-7 mt-10 pt-10 bg-white  w-[1350px] h-[498px] rounded-md'>

                <table className="table-auto  w-full text-left whitespace-no-wrap">
                    <thead>
                        {/* Table heading start here */}
                        <tr className=''>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm   rounded-tl rounded-bl flex items-center">Invoice No <Image className="w-[5px] h-[10px] ml-1 " alt='' src={increase} /></th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Trip </th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Inv. Date</th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Inv. Amount</th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Bal. Due</th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Payment Method</th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Due Date</th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins text-center   title-font tracking-wider text-gray-900 text-sm  ">Status</th>
                            <th className="px-2 py-5 font-bold  border-t-2 border-b-2 border-gray-100 font-poppins  text-center  title-font tracking-wider text-gray-900 text-sm flex items-center  "><span>Action</span>  <Image className="w-[5px] h-[10px] ml-1 " alt='' src={increase} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-[1227px] h-[40px] '>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">1909112</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">T901122</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">23/08/2022</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">13.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">4.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">AGH</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">01/31/2023</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm"><button className='btn-sm bg-red-100 w-[115px] h-[34px]  px-4 py-1 rounded-full text-red-400 '>Unpaid</button> </td>
                            {/* Action button here  */}
                            <td className='flex justify-between mt-2 items-center pr-1' >
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-[#ECF6FE]" alt='' src={write} />
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-red-100 " alt='' src={Ddelete} />
                            </td>
                        </tr>
                        <tr className='w-[1227px] h-[40px] '>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">1909112</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">T901122</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">23/08/2022</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">13.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">4.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">AGH</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">01/31/2023</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm"><button className='btn-sm bg-green-100 w-[115px] h-[34px]  px-4 py-1 rounded-full text-green-400 '>Paid</button> </td>
                            {/* Action button here  */}
                            <td className='flex justify-between mt-2 items-center pr-1' >
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-[#ECF6FE]" alt='' src={write} />
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-red-100 " alt='' src={Ddelete} />
                            </td>
                        </tr>

                        <tr className='w-[1227px] h-[40px] '>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">1909112</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">T901122</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">23/08/2022</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">13.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">4.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">AGH</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">01/31/2023</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm"><button className='btn-sm bg-red-100 w-[115px] h-[34px]  px-4 py-1 rounded-full text-red-400 '>Unpaid</button> </td>
                            {/* Action button here  */}
                            <td className='flex justify-between mt-2 items-center pr-1' >
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-[#ECF6FE]" alt='' src={write} />
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-red-100 " alt='' src={Ddelete} />
                            </td>
                        </tr>


                        <tr className='w-[1227px] h-[40px] '>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">1909112</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">T901122</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">23/08/2022</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">13.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">4.500.000</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">AGH</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm">01/31/2023</td>
                            <td className="px-4 py-3 text-[#84878B] font-poppins text-sm"><button className='btn-sm bg-green-100 w-[115px] h-[34px]  px-4 py-1 rounded-full text-green-400 '>Paid</button> </td>
                            {/* Action button here  */}
                            <td className='flex justify-between mt-2 items-center pr-1' >
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-[#ECF6FE]" alt='' src={write} />
                                <Image className=" w-[40px] h-[40px] p-2 rounded-xl bg-red-100 " alt='' src={Ddelete} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default InvoiceList;