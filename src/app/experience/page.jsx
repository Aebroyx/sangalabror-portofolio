"use client"
import React, { useState } from 'react';

export default function Experience() {
    const [selectedOption, setSelectedOption] = useState(1);

    const handleRadioChange = (event) => {
      setSelectedOption(parseInt(event.target.value, 10));
    };

    return(
        <>
            <div className="flex h-screen">
                <div className="w-1/6">
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <section>
                        <h1 className="text-3xl text-white font-bold pb-5">
                            Work Experience
                        </h1>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300 p-6">
                            <input type="radio" name="my-accordion-4" checked={selectedOption === 1} onChange={handleRadioChange} value={1}/> 
                                <div className="collapse-title text-xl font-medium text-white">
                                Sagara Technology
                                </div>
                                <div className="collapse-content">
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-slate-200 text-sm'>October 2021 - January 2022</p>
                                        <h3 className='text-primary text-xl'>Front-end Engineer Specialist Trainee</h3>
                                        <ul className="list-disc text-white">
                                            <li>Responsible for Front-end at InvestX an equity fund company. Have worked closely with tools such as Next.js and reactJS to develop the front-end of the project.</li>
                                            <li>Responsible also a little bit on the UI/UX at InvestX. Figma was used to design and copyright the project.</li>
                                        </ul>
                                        <div className='flex gap-2 mt-6'>
                                            <div className="badge bg-primary text-white badge-md">Javascript</div>
                                            <div className="badge bg-primary text-white badge-md">HTML</div>
                                            <div className="badge bg-primary text-white badge-md">CSS</div>
                                            <div className="badge bg-primary text-white badge-md">Next JS</div>
                                            <div className="badge bg-primary text-white badge-md">React JS</div>
                                            <div className="badge bg-primary text-white badge-md">Figma</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300 p-6">
                            <input type="radio" name="my-accordion-4" checked={selectedOption === 2} onChange={handleRadioChange} value={2}/>  
                                <div className="collapse-title text-xl font-medium text-white">
                                Autosave
                                </div>
                                <div className="collapse-content">
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-slate-200 text-sm'>December 2022 - Present</p>
                                        <h3 className='text-primary text-xl'>Fullstack Developer</h3>
                                        <ul className="list-disc text-white">
                                            <li>Autosave is a media company that reports on all pop-culture, primarily gaming and anime</li>
                                            <li>Responsible for the full development of the website using wordpress php.</li>
                                        </ul>
                                        <div className='flex gap-2 mt-6'>
                                            <div className="badge bg-primary text-white badge-md">Javascript</div>
                                            <div className="badge bg-primary text-white badge-md">HTML</div>
                                            <div className="badge bg-primary text-white badge-md">CSS</div>
                                            <div className="badge bg-primary text-white badge-md">PHP Wordpress</div>
                                            <div className="badge bg-primary text-white badge-md">Figma</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300 p-6">
                            <input type="radio" name="my-accordion-4" checked={selectedOption === 3} onChange={handleRadioChange} value={3}/> 
                                <div className="collapse-title text-xl font-medium text-white">
                                Himpunan Mahasiswa Ilmu Komputer
                                </div>
                                <div className="collapse-content">
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-slate-200 text-sm'>August 2019 - July 2020</p>
                                        <h3 className='text-primary text-xl'>Interests and Talents Division - University of Gadjah Mada</h3>
                                        <ul className="list-disc text-white">
                                            <li>Responsible for conceptualizing and arranging multiple charity events</li>  
                                        </ul>
                                        <div className="badge bg-primary text-white badge-md mt-6">Event Organizing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-1/6">
                </div>
            </div>
        </>
    )
}