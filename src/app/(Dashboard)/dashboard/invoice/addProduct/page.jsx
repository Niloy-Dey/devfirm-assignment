'use client'

import Link from 'next/link';
import { useState } from 'react';
const AddProduct = () => {

    return (
        <div className='pb-10'>
            {/* <Link href="" className='text-blue-700 font-bold text-lg my-6   mt-10'> + Add Product </Link> */}
            <hr class="w-full border-t border-gray-300 my-4" />


            <div className='mt-10 justify-end flex '>
                <div>
                    <p className='text-right'><span className='font-bold text-lg'>Subtotal: </span> 16.550.000</p>
                    <p className='text-right'><span className='font-bold text-lg'>TVA: </span> 2.800.000</p>
                </div>
            </div>

            <hr class="w-full border-t border-gray-300 my-4" />


            <div className='flex items-center justify-between'>
                <div>
                    <button className='p-4 mx-3  rounded-full w-40 font-bold text-lg text-white bg-[#CAE138] '>Save</button>
                    <button className='p-4  mx-3 border-2 border-gray-400 rounded-full w-40 font-bold text-lg text-black  '>Cancel</button>
                    <Link href="/downloadInvoice"className='p-4 mx-3  rounded-full w-60 font-bold text-lg text-white bg-[#CAE138] '>Download Invoice</Link>
                    {/* <Link href="/dashboard/invoice/addProduct/downloadInvoice"className='p-4 mx-3  rounded-full w-60 font-bold text-lg text-white bg-[#383FE1] '>Download Invoice</Link> */}
                </div>
                <p className='text-right font-bold text-[#CAE138] text-lg'>Subtotal: 16.550.000</p>
            </div>
        </div>
    );
};

export default AddProduct;