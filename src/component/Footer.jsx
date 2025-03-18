import React from 'react'

// The Footer component is a functional React component
const Footer = () => {
    return (
        <div>
            {/* Wrapper div for the footer content */}
            <div className="text-center py-4 mt-20 text-white text-sm">
                {/* Copyright notice and year */}
                <p>© 2025 UJJWAL GAUTAM. All Rights Reserved.</p>
                
                {/* Section for social media links */}
                <div className="mt-2">
                    {/* GitHub link, with styling for spacing, text color, and hover effect */}
                    <a 
                        href="" 
                        className="mx-2 text-blue-400 hover:text-blue-900"
                    >
                        GitHub
                    </a>
                    
                    {/* LinkedIn link, with styling for spacing, text color, and hover effect */}
                    <a 
                        href="https://www.linkedin.com/in/ujjwal-gautam-97ba10319" 
                        className="mx-2 text-blue-400 hover:text-blue-900"
                    >
                        LinkedIn
                    </a>
                    
                    {/* Email link, with styling for spacing, text color, and hover effect */}
                    <a 
                        href="" 
                        className="mx-2 text-blue-400 hover:text-blue-900"
                    >
                        Email
                    </a>
                </div>
            </div>
        </div>
    )
}

// Exporting the Footer component so it can be used elsewhere in the app
export default Footer
