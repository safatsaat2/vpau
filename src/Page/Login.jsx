import React from 'react';

const Login = () => {
    return (
        <div className=' bg-black '>
            <div className='max-w-[1176px] mx-auto py-[120px]'>
                <h1 className='text-[80px] w-[857px] text-white font-bold'><span className='text-[#1281C6]'>আই এ ইউ</span> কোম্পানির ভিপি মহল।</h1>
                <div className=' flex justify-between items-center -mt-20'>
                    <p className='text-white text-2xl max-w-[360px]'>
                        একজন ভিপি হিসেবে আপনার দেয়া সকল অঙ্গীকার পালন করার স্বার্থে কাজ করুন।
                    </p>
                    
                        <div className="card-body flex flex-col justify-center items-center bg-white max-w-[546px] rounded-[20px] ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">ID</span>
                                </label>
                                <input type="text" placeholder="email" className="w-[426px] input dashshadow input-bordered bg-[#D9D9D9]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="w-[426px] input dashshadow input-bordered bg-[#D9D9D9]" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 w-[150px]">
                                <button className="btn text-white bg-[#1281C6]">Login</button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;