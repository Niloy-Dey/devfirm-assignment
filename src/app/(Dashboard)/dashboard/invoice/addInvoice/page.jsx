'use client'
import Image from 'next/image';
import { FaAngleDown, FaTrash, FaCalendar } from 'react-icons/fa';
import upload from '/public/images/upload.png'
import increase from '/public/images/increase.png'
import Ddelete from '/public/images/delete.png'
import search from '/public/images/search.png'
import AddProduct from '../addProduct/page'
import { useState } from 'react';
const AddInvoice = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchText, setSearchText] = useState('');
    const options = ['T2390', 'TR7652', 'TR7652'];




    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };



    const toggleTypeDropdown = () => {
        setIsOpenD(!isOpenD);
    };
    const handleTypeSelectChange = (e) => {
        setSelectedOptionD(e.target.value);
        setIsOpenD(false);
    };
    const handleTypeInputChange = (e) => {
        setSearchTextD(e.target.value);
    };






    const [products, setProducts] = useState([
        {
            id: 1,
            productType: '',
            product: '',
            description: '',
            total: '',
        },
    ]);

    const handleAddProduct = () => {
        // Create a new product object with a unique ID
        const newProduct = {
            id: Date.now(),
            productType: '',
            product: '',
            description: '',
            total: '',
        };
        setProducts([...products, newProduct]);
    };

    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };


    // const [selectedImage, setSelectedImage] = useState(null);

    // // Function for file input change
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setSelectedImage(e.target.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };


    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to clear the selected image
    const clearSelectedImage = () => {
        setSelectedImage(null);
    };



    return (
        <div>

            {/* top section  */}
            <section className=' ml-7  py-8  pr-0 flex justify-between items-center '>
                <div>
                    <h1 className="font-poppins text-2xl font-semibold leading-10"> Invoices </h1>
                    <p className="font-poppins text-base font-normal leading-6">invoices </p>
                </div>
            </section>


            {/* middle section  */}
            <section className=' flex justify-between px-10  items-center ml-7  bg-white  w-[1350px] h-[313px] rounded-md'>
                {/* left part  */}
                <div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className=' w-[596px] h-[60px]'>
                            <label htmlFor="dropdown" className="font-poppins pl-1 font-bold text-lg text-black ">Select</label>
                            <div className="relative  border border-gray-300 rounded-full mt-4 p-3">
                                <select id="dropdown" className="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">
                                    <option>Select Client </option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                                    <FaAngleDown className="h-[20px] w-[20px] mr-4 text-gray-400" />
                                </div>
                            </div>
                        </div>


                        <div className='w-[300px] h-[60px] '>
                            <label htmlFor="dropdown" className="font-poppins pl-1 font-bold text-lg text-black ">Invoice Date</label>
                            <div className="relative  border border-gray-300 rounded-full mt-4 p-3">
                                <select id="dropdown" className="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">
                                    <option>Select Date </option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                                    <FaCalendar className="h-[20px] w-[20px] mr-4 text-gray-400" />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='w-[254px] mt-16 h-[60px] '>
                        <label htmlFor="dropdown" className="font-poppins pl-1 font-bold text-lg text-black ">
                            Trip
                        </label>
                        <div className="relative border border-gray-300 rounded-full mt-4 p-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Trip"
                                    className="w-full outline-none bg-transparent pr-8 pt-1 font-poppins text-lg pl-2"
                                    onClick={toggleDropdown}
                                    readOnly
                                />

                            </div>
                            {isOpen && (
                                <div className="absolute z-10 top-14 left-0 right-0 border border-gray-300 bg-white rounded-b-lg">
                                    <div>
                                        <div className='relative flex justify-between items-center'>
                                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                                <Image src={search} alt='' className="h-5 w-5 mr-4 text-gray-400" />
                                            </div>

                                            <input
                                                type="text"
                                                placeholder="   Search options"
                                                className="pl-4 py-4 m-2 outline-none rounded-full w-full border-2 border-gray-300 p-2"
                                                onChange={handleInputChange}
                                            />

                                        </div>

                                        <p className='px-2 py-2 font-poppins text-lg '>T2390</p>
                                        <p className='px-2 py-2 font-poppins text-lg '>T2390</p>
                                        <p className='px-2 py-2 font-poppins text-lg '>T2390</p>
                                        <p className='px-2 py-2 font-poppins text-lg '>T2390</p>
                                        <p className='px-2 py-2 font-poppins text-lg '>T2390</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                </div>


                {/* right part */}
                <div>
                    <p className="font-poppins pl-1 pb-3 font-bold text-lg text-black">Plane Image</p>
                    <div className="relative w-[230px] h-[170px] border border-dashed border-[#CAE138] rounded-md flex items-center justify-center gap-10">
                        <input
                            type="file"
                            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                            name="file"
                            id="file"
                            onChange={handleImageChange}
                        />
                        <label htmlFor="file" className="flex items-center justify-center flex-col space-y-2 cursor-pointer">
                            {selectedImage ? (
                                <div className="relative">
                                    <div className="relative w-[230px] h-[170px] rounded-lg overflow-hidden">
                                        <img src={selectedImage} alt="Selected" className="w-full h-full object-cover rounded-lg" />
                                        <div className="absolute top-0 right-0 -mt-2 -mr-2 flex items-center justify-center cursor-pointer">
                                            <p onClick={clearSelectedImage} className="bg-white text-red-700 w-6 h-6 rounded-full text-center">X</p>
                                        </div>
                                    </div>
                                    <p className="text-white font-bold absolute top-16 left-16 font-poppins text-lg mt-2 cursor-pointer">Change Photo</p>
                                </div>
                            ) : (
                                <>
                                    <div className="rounded-lg overflow-hidden absolute left-4 ">
                                        <Image className="w-[50px] h-[50px] object-cover" alt="" src={upload} />
                                    </div>
                                    <div className="p-2 absolute left-20">
                                        <p className="text-[#CAE138] font-poppins text-lg">Upload</p>
                                        <p className="text-[#CAE138] font-poppins text-lg">Plane Image</p>
                                    </div>
                                </>
                            )}
                        </label>
                    </div>
                </div>
            </section>






            {/* Bottom section  */}
            <section className=' px-10 mt-10 items-center ml-7  bg-white  w-[1350px] ] rounded-md'>
                <table className="table-auto mb-10 w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr className=" flex border-t-2 border-b-2 border-gray-100">
                            <th htmlFor="dropdown" className="font-poppins   w-[170px] flex items-center py-5 font-bold text-center font-poppins text-gray-900 text-sm ">Products Type<Image className=" ml-1" alt="" src={increase} /></th>
                            <th className="font-poppins  w-[260px] flex items-center  py-5 font-bold ml-6 font-poppins text-gray-900  text-sm">Products<Image className=" ml-1" alt="" src={increase} /> </th>
                            <th className="font-poppins  w-[390px]   py-5 font-bold ml-4 font-poppins text-gray-900 text-sm"> Description </th>
                            <th className="font-poppins ml-[170px] py-5 font-bold   font-poppins text-gray-900 text-sm"> Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index) => (
                            <tr className="flex gap-4" key={product.id}>
                                <td>
                                    <div className="w-[170px] h-[60px]">
                                        <div className="relative border border-gray-300 rounded-lg mt-4 p-3">
                                            <select
                                                id={`dropdown-${index}`}
                                                className="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2"
                                            >
                                                <option>Plane</option>
                                                <option>Trips IDs</option>
                                                <option>Flowers</option>
                                                <option>Drinks</option>
                                                <option>Foods</option>
                                                <option>Airbus</option>
                                                <option>Helicopters</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                                <FaAngleDown className="h-[20px] w-[20px] mr-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="w-[260px] h-[60px]">
                                        <div className="relative border border-gray-300 rounded-lg mt-4 p-3">
                                            <select
                                                id={`dropdown-${index}`}
                                                className="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2"
                                            >
                                                <option>Falcone 8x TBA</option>
                                                <option>Falcone 8x TBA</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                                <FaAngleDown className="h-[20px] w-[20px] mr-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="w-[390px] h-[60px]">
                                        <div className="relative border border-gray-300 rounded-lg mt-4 p-3">
                                            <p className="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">
                                                product for Trip t85475
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='w-[200px] ml-40 flex mt-1 items-center justify-between h-[60px]'>
                                        <div className="relative  border border-gray-300 rounded-lg mt-4 p-3">
                                            <p className="appearance-none bg-transparent border-none outline-none w-full pr-8 pt-1 font-poppins text-lg pl-2">11.500.000</p>
                                        </div>
                                        <Image onClick={() => handleDeleteProduct(product.id)} className="cursor-pointer w-[40px] h-[40px] p-2 mt-3 ml-2 rounded-xl bg-red-100 " alt='' src={Ddelete} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button onClick={handleAddProduct} className="text-[#CAE138] font-bold text-lg my-6 mt-10">+ Add Product </button>
                {/* Add product start here  */}
                <AddProduct></AddProduct>
            </section>
        </div>
    );
};

export default AddInvoice;