"use client";
import { useState } from "react";
import HighchartsChart from "./components/HighchartsChart";

function Page() {
    const [username, setUsername] = useState('Testname');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <main className="flex flex-col  items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-full">

                    <div className="w-11/12 p-5">
                        <div className="text-left font-bold">
                            <span className="text-violet-500 ">Bienvenido </span> <span className="text-black">{username}</span>
                        </div>
                        <div className="pt-2">
                            <h2 className="text-base font-bold text-left text-violet-500 mb-2 yr-1/2">Tu estado de cuenta</h2>
                        </div>
                        <div>
                            <HighchartsChart />
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}

export default Page;