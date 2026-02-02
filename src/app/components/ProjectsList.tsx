import Link from 'next/link'
import { Project } from '@/types'

export default function ProjectsList() {
    const projects: Project[] = [
        {
            id: 1,
            name: 'Autosave Website',
            route: '/autosave',
            link: '',
            link_name: '-',
            description: 'Responsible for the fullstack development of a media company website that allows users to see various of articles related to all things pop culture; anime and games',
            href: '#',
        },
        {
            id: 2,
            name: 'TPMS Modena',
            route: '/tpmsmodena',
            link: 'https://tpms.modena.com',
            link_name: 'tpms.modena.com',
            description: 'Responsible for the fullstack development of an agile sprint planner web application, similar to JIRA, for project management. Key features include; Sprint Milestones: Users can add tasks with effort measured in story points and manage tasks through drag-and-drop functionality, transitioning tasks from "In Progress" to "Ready to Test," "Defect," and "Done. Timesheet Management: Users can input the number of hours spent on tasks to record progress accurately. QA Integration: Allows testers to add test cases to each task. Developers can view task-specific bugs/defects and detailed bug information for efficient resolution.',
            href: '#',
        },
        {
            id: 3,
            name: 'B2B Modena',
            route: '/b2bmodena',
            link: 'https://partner.modena.com',
            link_name: 'partner.modena.com',
            description: 'Responsible for the fullstack development of Modena B2B, a comprehensive web application designed to streamline and automate business processes between dealers and vendors. The application facilitates various critical operations including but not limited to; purchase request, purchase order, goods receipt, asset validation, invoice, payment, etc. The application behaves as a mini-ERP and some processes are integrated with SAP.',
            href: '#',
        },
        {
            id: 4,
            name: 'Modena Website',
            route: '/modena',
            link: 'https://modena.com/id_id',
            link_name: 'modena.com',
            description: 'Responsible for the fullstack development of a number of features and pages of the Modena website, a comprehensive web application designed showcases Modena\'s products and services. The website allows users to buy products, book services, and access information about Modena\'s products and services.',
        },
        {
            id: 5,
            name: 'Splitbill AI',
            route: '/splitbill',
            link: 'https://splitbill.aebroyx.dev',
            link_name: 'splitbill.aebroyx.dev',
            description: 'An AI app to split bills by scanning receipts using an LLM-based OCR.',
        },
        {
            id: 6,
            name: 'Supply Chain Management Part',
            route: '/scmp',
            link: 'https://portal.modena.com/scmp',
            link_name: 'portal.modena.com/scmp',
            description: 'A comprehensive supply chain management system for spare parts procurement, featuring intelligent order suggestions, purchase workflow automation, and inventory management.',
        }
      ]
    return(
        <>
            <div className="max-h-[36rem] min-h-[36rem] overflow-y-auto overflow-x-hidden w-full max-w-4xl scrollbar-hide">
                <ul role="list" className="">
                    {projects.sort((a, b) => b.id - a.id).map((project) => (
                        <li key={project.id} className="py-4 opacity-0 translate-y-[60px]">
                            <div className="text-center">
                                <Link href={`/projects/${project.route}`}>
                                    <h1 className="text-3xl text-white font-semibold transition duration-300 ease-in-out transform hover:text-primary hover:scale-110 cursor-pointer">
                                        {project.name}
                                    </h1>
                                </Link>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                                    {project.link_name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}