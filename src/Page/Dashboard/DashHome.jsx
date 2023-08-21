
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
                <div></div>
            </div>
        </div>
    );
};

export default DashHome;