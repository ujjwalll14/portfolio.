import React from 'react'; // Import React library for creating the component
import homeimg from '../image/web-development-png-download-the-datasheet-557.png'; // Import image for home section
import Typed from 'typed.js'; // Import the Typed.js library to create typewriter effect for text
import '../style/Main.css'; // Import the CSS file for styling
import skillimg from '../image/webdev.webp'; // Import image for skills section
import logo1 from '../image/icons8-react-100.png'; // Import logo images for skills section
import logo3 from '../image/details-icon-javascript.png'; // Import JavaScript logo
import logo4 from '../image/details-icon-illustrator.png'; // Import Illustrator logo
import logo5 from '../image/details-icon-html.png'; // Import HTML logo
import logo6 from '../image/details-icon-css.png'; // Import CSS logo
import logo7 from '../image/details-icon-bootstrap.png'; // Import Bootstrap logo
import pro1 from '../image/pro1.png'; // Import image for project 1
import pro2 from '../image/pro2.png'; // Import image for project 2
import pro3 from '../image/pro3.jpg'; // Import image for project 3

const Main = () => {
    // Create a reference for the element to use with Typed.js
    const el = React.useRef(null);

    // Effect hook for initializing Typed.js when the component mounts
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['HTML &amp; CSS.', 'JavaScript &amp; Python.', 'Bootstrap &amp; Tailwind CSS.', 'React.'], // Array of strings for the typewriter effect
            typeSpeed: 50, // Speed at which each character is typed
            loop: true, // Loop the typing effect infinitely
        });

        return () => {
            typed.destroy(); // Cleanup the Typed instance when the component unmounts
        };
    }, []); // Empty dependency array, ensuring this runs only once when the component is mounted

    return (
        <>
            {/* Home Section */}
            <div id='home' className='flex justify-around mt-30 scroll-mt-20'>
                <div className='flex justify-around items-center'>
                    {/* Text Section */}
                    <div className='ml-10'>
                        <span className='text-[50px] text-white'>
                            Hi,<br />
                            <span id='yellow'> My name is <span className='text-blue-800'>Ujjwal</span></span>
                            <div>and I am a</div>
                            <div id='blue' className='mt-4'>
                                {/* Typewriter effect for this line */}
                                <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-white'>
                                    <span className='relative text-white dark:text-blue-900'>Full Stack Developer</span>
                                </span>
                            </div>
                        </span>
                    </div>
                    {/* Image Section */}
                    <div className='mt-8'>
                        <img src={homeimg} alt="Profile" className='w-[600px] h-auto ml-50' />
                    </div>
                </div>
            </div>

            {/* Download Resume Button */}
            <div className='text-center mt-30'>
                <button className='text-white hover:text-blue-700 h-15 w-50 rounded-full text-[20px]'>
                    <a href="image/cv.pdf" download="sample.pdf">.Download_Resume()</a>
                </button>
            </div>

            {/* About Section */}
            <div id='about' className='mt-25 text-center scroll-mt-20'>
                <div>
                    <h1 className='text-[60px]'>Why Work With Me</h1>
                    <p className='text-[20px] text-gray-500'>
                        I am a great communicator and love to invest the necessary time to understand the customer's problem very well
                    </p>
                </div>
                <div className='text-center justify-around flex p-20'>
                    <div className=''>
                        <img src={skillimg} alt="" />
                    </div>
                    <div>
                        {/* Development Skills Section */}
                        <div className='mr-20 ml-8'>
                            <h1 className='text-[45px] mt-10 text-yellow-300'>DEVELOPMENT SKILLS</h1>
                            <p className='text-[30px] mt-2'>
                                I am familiar and work on a daily basis with
                                <br />
                                <span ref={el} className='text-purple-500' /> {/* Typed.js will replace this with skills */}
                            </p>
                        </div>
                        {/* Logos for Skills Section */}
                        <div className='flex mt-20 justify-between h-21'>
                            <img src={logo1} alt="" />
                            <img src={logo3} alt="" />
                            <img src={logo4} alt="" />
                            <img src={logo5} alt="" />
                            <img src={logo6} alt="" />
                            <img src={logo7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div id='project'>
                <div id="projects" className="py-20 bg-black text-white scroll-mt-20">
                    <h1 className="text-[60px] text-center">My Projects</h1>
                    <p className="text-[20px] text-gray-400 text-center max-w-2xl mx-auto">
                        Here are some of the projects I have worked on recently.
                    </p>

                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 px-10 mt-10">
                        {/* Project 1 */}
                        <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src={pro1} alt="Project 1" className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-[25px] mt-4">E-Commerce Website</h2>
                            <p className="text-gray-400 mt-2">A full-stack e-commerce platform with payment integration.</p>
                            <div className="mt-4 flex justify-between">
                                <a href="" target="_blank" className="text-blue-500 hover:text-blue-300">View Demo</a>
                                <a href="" target="_blank" className="text-blue-500 hover:text-blue-300">Source Code</a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src={pro3} alt="Project 3" className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-[25px] mt-4">Weather App</h2>
                            <p className="text-gray-400 mt-2">A real-time weather application using OpenWeather API.</p>
                            <div className="mt-4 flex justify-between">
                                <a href="" target="_blank" className="text-blue-500 hover:text-blue-300">View Demo</a>
                                <a href="" target="_blank" className="text-blue-500 hover:text-blue-300">Source Code</a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src={pro2} alt="Project 2" className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-[25px] mt-4">Portfolio Website</h2>
                            <p className="text-gray-400 mt-2">A responsive portfolio website built using React and Tailwind CSS.</p>
                            <div className="mt-4 flex justify-between">
                                <a href="" target="_blank" className="text-blue-500 hover:text-blue-300">View Demo</a>
                                <a href="" target="_blank" className="text-blue-500 hover:text-blue-300">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id='contact' className='mt-25 text-center scroll-mt-20'>
                <div className='mt-20'>
                    <h1 className='text-[45px]'>Contact details</h1>
                    <p className='text-gray-500 text-[20px] mt-10'>
                        For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email 
                        <button className='text-blue-500 hover:text-blue-900'>ujjwalgautam1426@gmail.com</button>
                    </p>
                </div>
                <div className='flex justify-center mt-10'>
                    {/* Contact Form */}
                    <form action="" className=' justify-between'>
                        <input type="text" placeholder=' Name' className='h-10 w-96 border rounded-md' />
                        <input type="text" placeholder=' Email' className='h-10 w-96 border mt-2 rounded-md ml-2' />
                        <br />
                        <textarea type="text" placeholder=' Project details' className='h-40 w-[776px] border mt-3 rounded-md' />
                        <br />
                        <br />
                        <input type="submit" className='text-blue-500 hover:text-blue-900 text-[25px]' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Main;
