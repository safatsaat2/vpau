import React from 'react';

const DashboardLayout = () => {
    return (
        <>
            <div className="hidden lg:flex bg-[#E9F7FF] ">

                <div className="flex lg: bg-white">
                    {type === "admin" ? <AdminNav /> : <DashNav />}

                </div>

                <div className="w-full bg-[#E9F7FF]">
                    <Dashboardtitle />
                    <div className="py-4 lg:mx-4 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

            <div className=" lg:hidden bg-[#E9F7FF] ">


                {type === "admin" ? <AdminNav /> : <DashNav />}



                <div className="w-full bg-[#E9F7FF] ">

                    <div className="py-4 mx-4 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div></>
    );
};

export default DashboardLayout;