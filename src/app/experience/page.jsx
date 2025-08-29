"use client"
import React, { useState, useRef } from 'react';
import { useGSAPAnimations } from '../components/useGSAPAnimations';

export default function Experience() {
    const [selectedOption, setSelectedOption] = useState(1);
    
    // Refs for GSAP animations
    const titleRef = useRef(null);
    const accordionRef = useRef(null);
    const accordionItemsRef = useRef(null);

    const handleRadioChange = (event) => {
      setSelectedOption(parseInt(event.target.value, 10));
    };

    // Use the custom hook for GSAP animations
    useGSAPAnimations({ titleRef, accordionRef, accordionItemsRef });

    return(
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
                <div className="flex-1 flex justify-center items-center">
                    <section className="w-full max-w-4xl">
                        <h1 className="text-3xl text-white font-bold pb-5 text-center lg:text-left" ref={titleRef}>
                            Work Experience
                        </h1>
                        <div className="join join-vertical w-full" ref={accordionRef}>
                            <div className="collapse collapse-arrow join-item border border-white p-4 lg:p-6" ref={accordionItemsRef}>
                                <input type="radio" name="my-accordion-4" checked={selectedOption === 1} onChange={handleRadioChange} value={1}/> 
                                <div className="collapse-title text-xl font-medium text-white">
                                    Modena
                                </div>
                                <div className="collapse-content">
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-slate-200 text-sm'>March 2024 - Present</p>
                                        <h3 className='text-primary text-xl'>Fullstack Developer</h3>
                                        <ul className="list-disc text-white">
                                            <li>Responsible for the development of fullstack internal projects that accommodate users to directly interact with SAP database and its business processes.</li>  
                                        </ul>
                                        <div className='flex flex-wrap gap-2 mt-6'>
                                            <div className="badge bg-primary text-white badge-md">Javascript</div>
                                            <div className="badge bg-primary text-white badge-md">PHP</div>
                                            <div className="badge bg-primary text-white badge-md">HTML</div>
                                            <div className="badge bg-primary text-white badge-md">CSS</div>
                                            <div className="badge bg-primary text-white badge-md">React JS</div>
                                            <div className="badge bg-primary text-white badge-md">Laravel</div>
                                            <div className="badge bg-primary text-white badge-md">Hyperf</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-white p-4 lg:p-6" ref={accordionItemsRef}>
                                <input type="radio" name="my-accordion-4" checked={selectedOption === 2} onChange={handleRadioChange} value={2}/> 
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
                                        <div className='flex flex-wrap gap-2 mt-6'>
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
                            <div className="collapse collapse-arrow join-item border border-white p-4 lg:p-6" ref={accordionItemsRef}>
                                <input type="radio" name="my-accordion-4" checked={selectedOption === 3} onChange={handleRadioChange} value={3}/>  
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
                                        <div className='flex flex-wrap gap-2 mt-6'>
                                            <div className="badge bg-primary text-white badge-md">Javascript</div>
                                            <div className="badge bg-primary text-white badge-md">HTML</div>
                                            <div className="badge bg-primary text-white badge-md">CSS</div>
                                            <div className="badge bg-primary text-white badge-md">PHP Wordpress</div>
                                            <div className="badge bg-primary text-white badge-md">Figma</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}