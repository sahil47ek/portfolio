import { projectData } from '../../data/projects';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Image from 'next/image';
import Link from 'next/link';
import { RiGitlabLine, RiExternalLinkLine } from 'react-icons/ri';

// Get static paths for all projects
export async function getStaticPaths() {
    const paths = projectData.map((project) => ({
        params: { id: project.id },
    }));

    return { paths, fallback: false };
}

// Get static props for specific project
export async function getStaticProps({ params }) {
    const project = projectData.find((p) => p.id === params.id);
    return { props: { project } };
}

const ProjectDetail = ({ project }) => {
    return (
        <div className='min-h-screen bg-primary/30 py-16 md:py-24'>
            <div className='container mx-auto px-4 md:px-8'>
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='max-w-6xl mx-auto'
                >
                    {/* Project Title */}
                    <h2 className='h2 text-center mb-8 md:mb-12'>{project.title}</h2>

                    {/* Main Content Grid */}
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-start'>
                        {/* Image Section */}
                        <div className='w-full'>
                            <div className='relative aspect-video'>
                                <Image
                                    src={project.fullImage}
                                    fill
                                    alt={project.title}
                                    className='rounded-2xl object-cover object-center'
                                    priority
                                />
                            </div>
                            <div className='mt-16 text-center'>
                                <Link
                                    href='/work'
                                    className='btn rounded-full border border-white/50 px-8 py-3 transition-all duration-300 inline-flex items-center gap-x-2 hover:border-accent group'
                                >
                                    <span>Back to Projects</span>
                                </Link>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className='space-y-6'>
                            {/* Description */}
                            <div>
                                <h3 className='h3 text-accent mb-4'>Project Overview</h3>
                                <p className='text-md leading-relaxed'>{project.description}</p>
                            </div>

                            {/* Links */}
                            <div className='flex flex-wrap gap-4'>
                                <Link
                                    href={project.websiteLink}
                                    target='_blank'
                                    className='btn h-10 rounded-full border border-white/50 px-6 py-3 transition-all duration-300 flex items-center gap-x-2 hover:border-accent group'
                                >
                                    <span className='text-sm'>Visit Website</span>
                                    <RiExternalLinkLine className='text-md group-hover:text-accent' />
                                </Link>
                                <Link
                                    href={project.gitlabLink}
                                    target='_blank'
                                    className='btn h-10 rounded-full border border-white/50 px-8 py-3 transition-all duration-300 flex items-center gap-x-2 hover:border-accent group'
                                >
                                    <span className='text-sm'>View Code</span>
                                    <RiGitlabLine className='text-md group-hover:text-accent' />
                                </Link>
                            </div>

                            {/* Project Details Grid */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='bg-white/5 rounded-2xl p-6'>
                                    <h3 className='h3 text-accent mb-3'>Timeline</h3>
                                    <p className='text-white/80'>{project.timeline}</p>
                                </div>
                                <div className='bg-white/5 rounded-2xl p-6'>
                                    <h3 className='h3 text-accent mb-3'>Role</h3>
                                    <p className='text-white/80'>{project.role}</p>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className='h3 text-accent mb-4'>Technologies Used</h3>
                                <div className='flex flex-wrap gap-3'>
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className='px-5 py-2.5 bg-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-300'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Back Button */}

                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail; 