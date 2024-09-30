"use client"
import Image from 'next/image';
import autosaveD1 from '../../../../public/autosaveD1.png';
import autosaveD2 from '../../../../public/autosaveD2.png';
import autosaveD3 from '../../../../public/autosaveD3.png';
import autosaveD4 from '../../../../public/autosaveD4.png';
import autosaveM1 from '../../../../public/autosaveM1.png';
import autosaveM2 from '../../../../public/autosaveM2.png';
import autosaveM3 from '../../../../public/autosaveM3.png';
import autosaveM4 from '../../../../public/autosaveM4.png';
import { useEffect, useState } from 'react';

export default function B2BModena() {
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
                    Autosave
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
                                        2022
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8">
                                <h2 className="text-2xl font-medium text-primary w-32 text-left">
                                    Tech Stack
                                </h2>
                                <div className="ml-4 grid grid-cols-2 gap-4 text-left">
                                    <p className="text-lg text-white">
                                        Wordpress
                                    </p>
                                    <p className="text-lg text-white">
                                        PHP
                                    </p>
                                    <p className="text-lg text-white">
                                        HTML
                                    </p>
                                    <p className="text-lg text-white">
                                        CSS
                                    </p>
                                    <p className="text-lg text-white">
                                        Boostrap
                                    </p>
                                    <p className="text-lg text-white">
                                        Javascript
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start lg:w-1/2 mt-6 lg:mt-0 text-left">
                            <div className="ml-4">
                                <p className="text-lg text-white">
                                    Responsible for the full development of the website using wordpress php. Autosave is a media company that provides news and information related to pop culture which primarily includes gaming and anime. The user can navigate through the website to read the latest news and information about their favorite games and anime.
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
                                <Image src={autosaveD1} alt="Autosave Desktop 1" layout="responsive" objectFit="cover" width={300} height={300} />
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary lg:rounded-tr-[2rem] w-full h-full">
                                {isXL ? (
                                    <Image src={autosaveM1} alt="Autosave Mobile 1" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={autosaveM1} alt="Autosave Mobile 1" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary lg:rounded-bl-[2rem] w-full h-full">
                                {isXL ? (
                                    <Image src={autosaveM2} alt="Autosave Mobile 2" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={autosaveM2} alt="Autosave Mobile 2" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4 w-full">
                            <div className="overflow-hidden rounded-lg bg-primary ring-1 ring-primary max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full">
                                <Image src={autosaveD2} alt="Autosave Desktop 2" layout="responsive" objectFit="cover" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}