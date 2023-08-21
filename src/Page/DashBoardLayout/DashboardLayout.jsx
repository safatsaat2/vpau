import React from 'react';
import DashTitle from '../Dashboard/DashTitle';
import { Outlet } from 'react-router-dom';
import DashNav from '../Dashboard/DashNav';

const DashboardLayout = () => {
    return (
        <>
            <div className="hidden lg:flex bg-[#F2F2F2] ">

                <div className="flex lg: bg-white">
                     <DashNav />

                </div>

                <div className="w-full bg-[#F2F2F2]">
                    <DashTitle />
                    <div className="py-4 lg:mx-4 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

            <div className=" lg:hidden bg-[#F2F2F2] ">


                 <DashNav />



                <div className="w-full bg-[#F2F2F2] ">

                    <div className="py-4 mx-4 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div></>
    );
};

export default DashboardLayout;