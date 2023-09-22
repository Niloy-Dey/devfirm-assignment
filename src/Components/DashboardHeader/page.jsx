import Image from 'next/image';
import search from '/public/images/search.png'
import icon from '/public/images/icon.png'
const DashboardHeader = () => {
    return (
        <>
            {/* Header section start here  */}
            <section className="flex ml-7 px-4 pb-4 bg-white  items-center justify-between  w-[1350px] h-[119px]  rounded-lg">

                {/*search bar start here  */}
                <div className='mb-10'>
                    <div class="w-[476px]   h-[55px] absolute rounded-full border border-gray-300 flex items-center p-3">
                        <div class="text-gray-400 pr-2">
                            <Image src={search} alt='' w={25} h={25} />
                        </div>
                        <input type="text" placeholder="Search..." class="w-full outline-none bg-transparent" />
                    </div>
                </div>


                <div className='' >
                    <Image src={icon} alt="" />
                </div>
            </section>

        </>
    );
};

export default DashboardHeader;