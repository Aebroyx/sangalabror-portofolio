"use client"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import B2BLogin from '../../../../public/b2blogin.png'
import B2BPRList from '../../../../public/b2bprlist.png'
import B2BPOForm from '../../../../public/b2bpoform.png'
import B2BGRForm from '../../../../public/b2bgrform.png'
import { useState } from 'react';
import ModalViewImage from '@/app/components/ModalViewImage';
import { ArrowsPointingOutIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function B2BModena() {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const handleOnViewImage = (imageSrc: StaticImageData): void => {
        setSelectedImage(imageSrc);
        setOpen(true);
    }

    return (
        <>
            <div className="min-h-[100dvh] flex flex-col items-center justify-start py-8">
                <div className="py-12 sm:py-24">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="flex justify-end mb-6">
                            <Link href="/projects" className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300">
                                <ArrowLeftIcon className="h-6 w-6" />
                                <span className="text-lg">Back to Projects</span>
                            </Link>
                        </div>
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
                            <div className="flex p-px w-full lg:col-span-4" onClick={() => handleOnViewImage(B2BLogin)}>
                                <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                    <Image src={B2BLogin} alt="B2B Login" fill className="object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                        <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-px lg:col-span-2" onClick={() => handleOnViewImage(B2BPRList)}>
                                <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary lg:rounded-tr-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                    <Image src={B2BPRList} alt="B2B PR List" fill className="object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                        <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-px lg:col-span-2" onClick={() => handleOnViewImage(B2BPOForm)}>
                                <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary lg:rounded-bl-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                    <Image src={B2BPOForm} alt="B2B PO Form" fill className="object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                        <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-px lg:col-span-4 w-full" onClick={() => handleOnViewImage(B2BGRForm)}>
                                <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                    <Image src={B2BGRForm} alt="B2B GR Form" fill className="object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                        <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalViewImage open={open} setOpen={setOpen} imageSrc={selectedImage} />
        </>
    );
}