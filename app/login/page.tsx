"use client"
import { useAuth } from '@/context/auth';
import { useLoading } from '@/context/Loading';
import Loader from '@/utils/Loader';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useLoading();

    const router = useRouter();

    // form function
    const handlelogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = {
                email: email,
                password: password,
            };
            setLoading(true);
            const res = await axios.post('/api/login', data);
           
         
            if (res && res.data.success) {
                setLoading(true);
                toast.success("Login Successfully");
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                router.push('/');
            } else {
                setLoading(false);
                toast.error(res.data.message);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error('Something went wrong');
        }
    };


    useEffect(() => {
        setLoading(true);
        if (auth?.token) {
            router.push('/');
        }
        setLoading(false);
    }, [auth?.token, router, setLoading]);


    return (<>
        {
            loading && (
                <Loader />
            )
        }
        <div className="h-screen md:flex ">
            <div className="flex md:w-full h-full justify-center py-10 items-center bg-[#fff]">
                <form className="" onSubmit={handlelogin}>
                    <h1 className="text-gray-800 font-bold text-3xl mb-1">Hello Again!</h1>
                    <p className="text-xl font-normal text-gray-600 mb-7">Welcome to Ignition</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-[#000] bg-[#fff] pl-2 outline-none border-none" type="text" placeholder="Email Address" />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-[#000] bg-[#fff] pl-2 outline-none border-none" type="text" placeholder="Password" />
                    </div>
                    <button type="submit" className="block w-full bg-gradient-to-r from-green-400 to-purple-500 mt-4 mb-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    <span className="text-sm ml-2 text-[#000] cursor-pointer">Don't Have an Account <Link href={'/register'} className="text-lg font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500">Register</Link></span>
                </form>
            </div>
        </div>
    </>

    )
}

export default page
