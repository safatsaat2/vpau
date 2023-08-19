import React from 'react';
import DashTitle from '../Dashboard/DashTitle';
import { Outlet } from 'react-router-dom';
import DashNav from '../Dashboard/DashNav';

const DashboardLayout = () => {
    return (
        <>
            <div className="hidden lg:flex bg-[#E9F7FF] ">

                <div className="flex lg: bg-white">
                     <DashNav />

                </div>

                <div className="w-full bg-[#E9F7FF]">
                    <DashTitle />
                    <div className="py-4 lg:mx-4 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

            <div className=" lg:hidden bg-[#E9F7FF] ">


                 <DashNav />



                <div className="w-full bg-[#E9F7FF] ">

                    <div className="py-4 mx-4 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div></>
    );
};

export default DashboardLayout;