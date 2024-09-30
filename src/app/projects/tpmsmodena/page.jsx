"use client"
import Image from 'next/image';
import tpmsdashboard from '../../../../public/tpmsdashboard.svg';
import tpmsprofile from '../../../../public/tpmsprofile.svg';
import tpmsproject from '../../../../public/tpmsproject.svg';
import tpmskanban from '../../../../public/tpmskanban.svg';
import { useEffect, useState } from 'react';

export default function TPMSModena() {
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
                        <div className="flex p-px w-full sm:h-auto lg:col-span-4">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full h-full">
                                <Image src={tpmsdashboard} alt="Autosave Desktop 1" layout="responsive" objectFit="cover" width={300} height={300} />
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary lg:rounded-tr-[2rem] w-full h-full">
                                {isXL ? (
                                    <Image src={tpmsprofile} alt="Autosave Mobile 1" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={tpmsprofile} alt="Autosave Mobile 1" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2 sm:h-auto">
                            <div className="relative overflow-hidden rounded-lg bg-primary ring-1 ring-primary lg:rounded-bl-[2rem] w-full h-full">
                                {isXL ? (
                                    <Image src={tpmsproject} alt="Autosave Mobile 2" layout="fill" objectFit="cover" />
                                ) : (
                                    <Image src={tpmsproject} alt="Autosave Mobile 2" layout="responsive" objectFit="cover" width={300} height={300} />
                                )}
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4 w-full">
                            <div className="overflow-hidden rounded-lg bg-primary ring-1 ring-primary max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full">
                                <Image src={tpmskanban} alt="Autosave Desktop 2" layout="responsive" objectFit="cover" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}