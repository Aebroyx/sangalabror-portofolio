"use client"
import Image from 'next/image';
import Link from 'next/link';
import tpmsdashboard from '../../../../public/tpmsdashboard.png';
import tpmsprofile from '../../../../public/tpmsprofile.png';
import tpmsproject from '../../../../public/tpmsproject.png';
import tpmskanban from '../../../../public/tpmskanban.png';
import { useEffect, useState } from 'react';
import ModalViewImage from '@/app/components/ModalViewImage';
import { ArrowsPointingOutIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function TPMSModena() {
    const [isXL, setIsXL] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleOnViewImage = (imageSrc) => {
        setSelectedImage(imageSrc);
        setOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-8">
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
                    TPMS (Project Management System) Modena
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
                                        Tailwindcss
                                    </p>
                                    <p className="text-lg text-white">
                                        Express JS
                                    </p>
                                    <p className="text-lg text-white">
                                        Sequelize
                                    </p>
                                    <p className="text-lg text-white">
                                        PosgresSQL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start lg:w-1/2 mt-6 lg:mt-0 text-left">
                            <div className="ml-4">
                                <p className="text-lg text-white">
                                    Responsible for the fullstack development of an agile sprint planner web application, similar to JIRA, for project management. Key features include; Sprint Milestones: Users can add tasks with effort measured in story points and manage tasks through drag-and-drop functionality, transitioning tasks from “In Progress” to “Ready to Test,” “Defect,” and “Done. Timesheet Management: Users can input the number of hours spent on tasks to record progress accurately. QA Integration: Allows testers to add test cases to each task. Developers can view task-specific bugs/defects and detailed bug information for efficient resolution.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h2 className="text-center text-3xl font-semibold text-white">Showcase</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-6 lg:grid-rows-2">
                        <div className="flex p-px w-full sm:h-auto lg:col-span-4" onClick={() => handleOnViewImage(tpmsdashboard)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full h-full group">
                                <Image src={tpmsdashboard} alt="TPMS Dashboard" layout="responsive" objectFit="cover" width={300} height={300} />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto" onClick={() => handleOnViewImage(tpmsprofile)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary lg:rounded-tr-[2rem] w-full h-full group">
                                {isXL ? (
                                    <Image src={tpmsprofile} alt="TPMS Profile" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={tpmsprofile} alt="TPMS Profile" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto" onClick={() => handleOnViewImage(tpmsproject)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary lg:rounded-bl-[2rem] w-full h-full group">
                                {isXL ? (
                                    <Image src={tpmsproject} alt="TPMS Project" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={tpmsproject} alt="TPMS Project" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                                    <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4 w-full" onClick={() => handleOnViewImage(tpmskanban)}>
                            <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full h-full group">
                                <Image src={tpmskanban} alt="TPMS Kanban" layout="responsive" objectFit="cover" width={300} height={300} />
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