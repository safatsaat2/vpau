
const DashHome = () => {
    return (
        <div className="max-w-[1266px] mx-auto">
            <div className="grid grid-cols-3 gap-x-[28px]">
                <div className="bg-white rounded-[20px]">
                    <p className="ml-[30px] mt-[30px] text-2xl font-medium text-black">Count</p>
                    <div className="flex justify-between mt-24 ml-6 mb-8">
                        <div className="w-[141px] border-img -mt-14">
                            <p className="p-[70px]">00</p>
                        </div>
                        <div className="mr-6">
                            <img src="https://i.ibb.co/dkrw67z/sgape-1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <p className="ml-[30px] mt-[30px] text-2xl font-medium text-black mb-[92px]">Work Activity</p>
                    <img className="mx-[30px] w-[320.46px]" src="https://i.ibb.co/bzktPZM/sgape-2.png" alt="" />
                </div>
                <div>
                    <div className="bg-white rounded-[20px]">
                        <p className="ml-8 pt-8 text-2xl font-medium">Counted this Month</p>
                        <h3 className="text-5xl ml-44 text-[#8561FF] font-medium mt-10 pb-8">$00</h3>
                    </div>
                    <div className="bg-white rounded-[20px] mt-10">
                        <p className="ml-8 pt-8 text-2xl font-medium">Earn Money</p>
                        <h3 className="text-5xl ml-44 text-[#8561FF] font-medium mt-10 pb-8">$00</h3>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[20px] mt-6 pb-8">
                <div className="pt-8 ml-8 flex items-center">
                    <p className="text-2xl font-medium">Overall Revenue</p>
                    <div className="ml-[320px] flex items-center">
                        <div className="bg-[#CFBDFF] w-5 h-5 rounded-full mr-2"></div>
                        <span className="text-2xl font-medium">Total</span>
                    </div>
                </div>
                <h3 className="text-5xl ml-8 text-[#8561FF] font-medium mt-10 pb-8">$00</h3>
                <div className="h-[213px] border border-black  mx-14 rounded-[10px] pb-6">
                    <img className="mt-8 overflow-hidden mb-6" src="https://i.ibb.co/NSsk6TD/Group-1-4.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DashHome;