import React from 'react';
import DashboardHeader from '../../Components/DashboardHeader/page';
import DashboardSideBar from '../../Components/DashboardSideBar/page';
import InvoicePage from './dashboard/invoice/page';
import InvoiceList from './dashboard/invoiceList/page';

const DashboardLayout = ({ children }) => {
    return (
        <>

            <section className='bg-[#F1F5F9]  '>
                <div className='w-[1728px] h-[1406px] flex mx-auto'>
                    <div>
                        <DashboardSideBar></DashboardSideBar>
                    </div>


                    <div className=''>
                        <DashboardHeader></DashboardHeader>
                        {/* <InvoicePage></InvoicePage> */}
                        {/* <InvoiceList></InvoiceList> */}
                        {children}
                    </div>
                </div>
            </section>



        </>
    );
};

export default DashboardLayout;