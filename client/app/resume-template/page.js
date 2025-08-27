// client/app/resume-template/page.js

export const metadata = {
    title: 'Editable Resume Template | GetInterviewConfidence',
    description: 'A professional, clean resume template for job seekers. Copy and paste to create a standout resume that gets noticed by recruiters.',
};

const ResumeTemplatePage = () => {
    return (
        <div className="bg-primary py-12 sm:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-light-text">Professional Resume Template</h1>
                    <p className="text-dark-text mt-2">Simply copy the text below and paste it into your favorite document editor.</p>
                </div>

                {/* Resume Container */}
                <div className="bg-white text-gray-800 p-8 sm:p-12 rounded-lg max-w-4xl mx-auto font-sans">

                    {/* Header */}
                    <div className="text-center border-b pb-4 mb-6">
                        <h2 className="text-4xl font-bold">Your Name</h2>
                        <p className="text-md text-gray-600 mt-2">
                            City, State, Pin Code | (123) 456-7890 | your.email@example.com | linkedin.com/in/yourprofile
                        </p>
                    </div>

                    {/* Professional Summary */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-sky-700 border-b-2 border-sky-700 pb-1 mb-2">Professional Summary</h3>
                        <p className="text-gray-700">
                            A highly motivated and results-oriented [Your Profession/Title] with [Number] years of experience in [Your Industry]. Proven ability to [Mention a Key Skill or Achievement, e.g., drive project success, increase sales]. Seeking to leverage my skills in [Mention another key skill] to contribute to a dynamic team at your company.
                        </p>
                    </div>

                    {/* Work Experience */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-sky-700 border-b-2 border-sky-700 pb-1 mb-2">Work Experience</h3>
                        <div className="mb-4">
                            <p className="font-bold">Your Job Title | Company Name</p>
                            <p className="text-sm text-gray-500 italic">Month Year – Month Year</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Quantifiable Achievement 1: e.g., Increased team efficiency by 15% by implementing a new project management software.</li>
                                <li>Responsibility 1: e.g., Led a team of 5 developers in an agile environment to deliver a new client-facing web application.</li>
                                <li>Responsibility 2: e.g., Collaborated with the product team to define feature requirements and project timelines.</li>
                            </ul>
                        </div>
                        {/* Add more job experiences here */}
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-sky-700 border-b-2 border-sky-700 pb-1 mb-2">Skills</h3>
                        <p className="text-gray-700">
                            <span className="font-semibold">Technical Skills:</span> JavaScript, React, Node.js, MongoDB, HTML5, CSS3, Git
                        </p>
                        <p className="text-gray-700 mt-1">
                            <span className="font-semibold">Soft Skills:</span> Team Leadership, Agile Methodologies, Problem Solving, Communication
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-bold text-sky-700 border-b-2 border-sky-700 pb-1 mb-2">Education</h3>
                        <div >
                            <p className="font-bold">Your Degree | University Name</p>
                            <p className="text-sm text-gray-500 italic">Month Year – Month Year</p>
                            <p className="text-gray-700 mt-1">Relevant coursework: [List 1-2 relevant courses]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplatePage;