import Image from 'next/image';
import home from '/public/images/Vector (1).png'
import mobile from '/public/images/Vector (2).png'
import trips from '/public/images/Vector (3).png'
import invoice from '/public/images/Vector (4).png'
import planes from '/public/images/Vector (5).png'
import amenities from '/public/images/Vector (6).png'
import contacts from '/public/images/Vector (7).png'
import team from '/public/images/Vector (8).png'
import member from '/public/images/Vector (9).png'
import files from '/public/images/Vector (10).png'
import message from '/public/images/Vector (11).png.png'
import calender from '/public/images/Vector (12).png'
import settings from '/public/images/Vector (13).png'
import logout from '/public/images/logout.png'
import Link from 'next/link';
const DashboardSideBar = () => {
  return (
    <div>

      {/* Side bar start here and logo the below */}
      <div class="h-[1252px] w-[345px] bg-[#CAE138] rounded-lg text-white">
        <h1 class=" p-10 font-bold text-white  text-center font-poppins text-4xl leading-15">
          Logo
        </h1>


        {/* side bar navigation route here  */}
        <div className="w-[300px] h-[1118px] ml-[45px] ">
          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={home} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Dashboard</p>
          </Link>
          
  

          <Link href="" className="flex justify-center items-center text-white">
            <Image src={mobile} className='filter brightness-0' alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Reservations</p>
          </Link>


          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={trips} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Trips</p>
          </Link>


          <Link href="/dashboard/invoice" className="flex justify-center items-center rounded-l-full bg-sky-500/25 p-3 ">
            <Image className='filter brightness-0' src={invoice} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2  text-white font-medium'>Invoices </p>
          </Link>


          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={planes} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Planes</p>
          </Link>

          <Link href="" className="flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={amenities} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Amenities</p>
          </Link>

          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={contacts} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Contacts</p>
          </Link>

          <Link href="" className="flex justify-center items-center text-white">
            <Image  className='filter brightness-0' src={team} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Team</p>
          </Link>

          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={member} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Crew Members</p>
          </Link>

          <Link href="" className="flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={files} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Files</p>
          </Link>

          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image className='filter brightness-0' src={message} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Message</p>
          </Link>

          <Link href="" className="flex justify-center items-center text-white">
            <Image className='filter brightness-0'  src={calender} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Calendar</p>
          </Link>

          {/* settings button here  */}
          <Link href="" className=" h-[86px] flex justify-center items-center text-white">
            <Image  className='filter brightness-0' src={settings} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Setting</p>
          </Link>

          {/* Logout button here  */}
          <Link href="" className="flex justify-center items-center mt-14 text-white ">
            <Image className='filter brightness-0' src={logout} alt='' w={25} h={25} />
            <p className=' w-[140px] font-poppins pl-2 font-medium'> Logout</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardSideBar