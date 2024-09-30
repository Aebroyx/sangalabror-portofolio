"use client"
import Image from 'next/image';
import B2BLoginSVG from '../../../../public/b2blogin.svg'
import B2BPRListSVG from '../../../../public/b2bprlist.svg'
import B2BPOFormSVG from '../../../../public/b2bpoform.svg'
import B2BGRFormSVG from '../../../../public/b2bgrform.svg'
import { useEffect, useState } from 'react';

export default function Autosave() {
    const [isXL, setIsXL] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsXL(window.innerWidth >= 1280);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-8">
            <div className="py-12 sm:py-24">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-start text-base/7 font-semibold text-white">Project:</h2>
                    <p className="mt-2 max-w-lg text-pretty text-start text-4xl font-medium tracking-tight text-primary sm:text-5xl">
                    B2B Modena
                    </p>
                    <div className="mt-6 border-t-2 border-white"></div>
                    <div className="flex flex-col lg:flex-row mt-6 justify-between items-start lg:items-start">
                        <div className="flex flex-col gap-8 lg:w-1/2">
                            <div className="flex items-start gap-8">
                                <h2 className="text-2xl font-medium text-primary w-32 text-left">
                                    Year
                                </h2>
                                <div className="ml-4 text-left">
                                    <p className="text-lg text-white">
                                        2024
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8">
                                <h2 className="text-2xl font-medium text-primary w-32 text-left">
                                    Tech Stack
                                </h2>
                                <div className="ml-4 grid grid-cols-2 gap-4 text-left">
                                    <p className="text-lg text-white">
                                        React
                                    </p>
                                    <p className="text-lg text-white">
                                        Node.js
                                    </p>
                                    <p className="text-lg text-white">
                                        Bootstrap
                                    </p>
                                    <p className="text-lg text-white">
                                        Hyperf (PHP)
                                    </p>
                                    <p className="text-lg text-white">
                                        PostgreSQL
                                    </p>
                                    <p className="text-lg text-white">
                                        MongoDB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start lg:w-1/2 mt-6 lg:mt-0 text-left">
                            <div className="ml-4">
                                <p className="text-lg text-white">
                                    Responsible for fullstack development of Modena B2B, a comprehensive web application designed to
                                    streamline and automate business processes between dealers and vendors. The application facilitates various critical operations including but not limited to; purchase request, purchase order, goods receipt, asset validation, invoice, payment, etc. The application behaves as a mini-ERP and some processes are integrated with SAP.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h2 className="text-center text-3xl font-semibold text-white">Showcase</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-6 lg:grid-rows-2">
                        <div className="flex p-px w-full sm:h-auto lg:col-span-4">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full h-full">
                                <Image src={B2BLoginSVG} alt="B2B Login" layout="responsive" objectFit="cover" width={300} height={300} />
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary lg:rounded-tr-[2rem] w-full h-full">
                                {isXL ? (
                                    <Image src={B2BPRListSVG} alt="B2B PR List" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={B2BPRListSVG} alt="B2B PR List" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary lg:rounded-bl-[2rem] w-full h-full">
                                {isXL ? (
                                    <Image src={B2BPOFormSVG} alt="B2B PO Form" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={B2BPOFormSVG} alt="B2B PO Form" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4 w-full">
                            <div className="overflow-hidden rounded-lg bg-primary ring-1 ring-primary max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                                <Image src={B2BGRFormSVG} alt="B2B GR Form" layout="responsive" objectFit="cover" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}