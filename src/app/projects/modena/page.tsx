"use client"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import modenaD1 from '../../../../public/modenaD1.png';
import modenaD2 from '../../../../public/modenaD2.png';
import modenaM1 from '../../../../public/modenaM1.png';
import modenaM2 from '../../../../public/modenaM2.png';
import { useState } from 'react';
import ModalViewImage from '@/app/components/ModalViewImage';
import { ArrowsPointingOutIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Modena() {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const handleOnViewImage = (imageSrc: StaticImageData): void => {
        setSelectedImage(imageSrc);
        setOpen(true);
    };

    return (
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
                    Modena Website
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
                                        Laravel
                                    </p>
                                    <p className="text-lg text-white">
                                        Bootstrap
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start lg:w-1/2 mt-6 lg:mt-0 text-left">
                            <div className="ml-4">
                                <p className="text-lg text-white">
                                    Responsible for the fullstack development of a number of features and pages for the Modena website, a comprehensive web application designed to showcase Modena’s products and services. The website allows users to buy products, book services, and access information about Modena’s products and services. 
                                    Responsible for a full responsive landing page of modena genuine part details page. Users can be directed to the Modena Website genuine part details page from scanning the QR code during showroom view. The page displays the part details, part image, and part price. Users can also view the part details, part image, and part price.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h2 className="text-center text-3xl font-semibold text-white">Showcase</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-6 lg:grid-rows-2">
                        <div className="flex p-px w-full lg:col-span-4" onClick={() => handleOnViewImage(modenaD1)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                <Image src={modenaD1} alt="Modena Desktop 1" fill className="object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2" onClick={() => handleOnViewImage(modenaM1)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary lg:rounded-tr-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                <Image src={modenaM1} alt="Modena Mobile 1" fill className="object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2" onClick={() => handleOnViewImage(modenaM2)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary lg:rounded-bl-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                <Image src={modenaM2} alt="Modena Mobile 2" fill className="object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4 w-full" onClick={() => handleOnViewImage(modenaD2)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full h-64 lg:h-80 group cursor-pointer">
                                <Image src={modenaD2} alt="Modena Desktop 2" fill className="object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalViewImage open={open} setOpen={setOpen} imageSrc={selectedImage} />
        </div>
    );
}