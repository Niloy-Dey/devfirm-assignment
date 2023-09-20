import Image from 'next/image';
import { FaAngleDown, FaCalendar } from 'react-icons/fa';
import upload from '/public/images/upload.png'
const addInvoice = () => {
    return (
        <div>

            {/* top section  */}
            <section className=' ml-7  py-8  pr-0 flex justify-between items-center '>
                <div>
                    <h1 class="font-poppins text-2xl font-semibold leading-10"> Invoices </h1>
                    <p class="font-poppins text-base font-normal leading-6">invoices </p>
                </div>
            </section>



            <section className=' flex justify-between px-10  items-center ml-7  bg-white  w-[1350px] h-[313px] rounded-md'>
                {/* left part  */}
                <div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className=' w-[596px] h-[60px]'>
                            <label for="dropdown" class="font-poppins pl-1 font-bold text-lg text-black ">Select</label>
                            <div class="relative  border border-gray-300 rounded-full mt-4 p-3">
                                <select id="dropdown" class="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">
                                    <option>Select Client </option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <div class="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                                    <FaAngleDown className="h-[20px] w-[20px] mr-4 text-gray-400" />
                                </div>
                            </div>
                        </div>


                        <div className='w-[300px] h-[60px] '>
                            <label for="dropdown" class="font-poppins pl-1 font-bold text-lg text-black ">Invoice Date</label>
                            <div class="relative  border border-gray-300 rounded-full mt-4 p-3">
                                <select id="dropdown" class="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">
                                    <option>Select Date </option>
                                </select>
                                <div class="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                                    <FaCalendar className="h-[20px] w-[20px] mr-4 text-gray-400" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-[254px] mt-16 h-[60px] '>
                        <label for="dropdown" class="font-poppins pl-1 font-bold text-lg text-black ">Trip</label>
                        <div class="relative  border border-gray-300 rounded-full mt-4 p-3">
                            <select id="dropdown" class="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">
                                <option>T2390</option>
                                <option>TR7652</option>
                                <option>TR7652</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                                <FaAngleDown className="h-[20px] w-[20px] mr-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* right part */}
                <div>
                    <div class="relative w-[230px] h-[170px]    border border-dashed border-[#383FE1] rounded-md flex items-center justify-center gap-10">
                        <input type="file" class="opacity-0 absolute inset-0 w-full h-full cursor-pointer" name="file" id="file" />
                        <label for="file" class="flex  items-center justify-center space-y-2 cursor-pointer">
                            <Image className='w-14' alt='' src={upload} />
                            <div className='p-2'>
                                <p className='text-[#383FE1]  font-poppins text-lg'>Upload  </p>
                                <p className='text-[#383FE1]  font-poppins text-lg' >Plane Image</p>
                            </div>
                        </label>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default addInvoice;