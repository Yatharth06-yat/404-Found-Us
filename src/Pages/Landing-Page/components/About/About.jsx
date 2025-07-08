import "./Story_and_mission.css"
import "./About.css"
import topDoctors from "../../../../assets/topDoctors.json";

const About = () => {
    return (
        <>
            <div className="flex justify-center items-start min-h-screen pb-20 font-inter">
                <div className="w-full max-w-6xl space-y-12">

                    <div className=" bg-white rounded-3xl shadow-md p-8 transition-transform duration-200 hover:translate-y-[-5px]">
                        <h2 className="text-3xl font-bold text-blue-700 mb-6 pb-2">
                            Our Story
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            CityCare Hospital began with a vision: to provide compassionate, world-class healthcare to everyone in our community. Over the decades, we've grown from a small clinic to a multi-specialty hospital, always putting patients first.
                        </p>

                        <div className="relative pl-6">
                            <ul className="timeline space-y-6">
                                <div className="heigh"></div>
                                <li className="text-gray-700 text-lg relative">
                                    <strong className="text-blue-700">1999:</strong> CityCare founded as a 20-bed community clinic.
                                </li>
                                <li className="text-gray-700 text-lg relative">
                                    <strong className="text-blue-700">2007:</strong> Expanded to include advanced diagnostic and surgical facilities.
                                </li>
                                <li className="text-gray-700 text-lg relative">
                                    <strong className="text-blue-700">2015:</strong> Accredited as a leading multi-specialty hospital in the region.
                                </li>
                                <li className="text-gray-700 text-lg relative">
                                    <strong className="text-blue-700">2022:</strong> Launched telemedicine and digital health services.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-md p-8 transition-transform duration-200 hover:translate-y-[-5px]">
                        <h2 className="text-3xl font-bold text-blue-700 mb-6 pb-2 inline-block">
                            Our Mission & Values
                        </h2>
                        <p className="text-gray-700 text-lg mb-4">
                            <strong className="text-blue-700">Mission:</strong> To heal, comfort, and serve with the highest standards of medical excellence and compassion.
                        </p>
                        <p className="text-gray-700 text-lg">
                            <strong className="text-blue-700">Values:</strong> Integrity, empathy, innovation, teamwork, and respect for every individual.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-md p-8 transition-transform duration-200 hover:translate-y-[-5px]">
                        <h2 className="text-3xl font-bold text-blue-700 mb-8 pb-2 inline-block ">
                            Meet Our Team
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {topDoctors.map(doctor => (
                                <div
                                    key={doctor.id || doctor.name} // Use id if available, fallback to name
                                    className="bg-gray-50 rounded-2xl border-blue-300 border-2 border-solid shadow-sm p-5 flex flex-col items-center text-center transition-transform duration-200 hover:translate-y-[-5px]"
                                >
                                    <img
                                        src={doctor.img || "https://placehold.co/150x150/cccccc/white?text=Doctor"}
                                        alt={doctor.name}
                                        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/cccccc/white?text=Error"; }}
                                    />
                                    <h1 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h1>
                                    <p className="text-blue-600 text-md mb-1">{doctor.degree}</p>
                                    <p className="text-gray-600 text-sm">{doctor.experience}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose CityCare? Section */}
                    <div className="bg-white rounded-3xl shadow-md p-8 transition-transform duration-200 hover:translate-y-[-5px]">
                        <h2 className="text-3xl font-bold text-blue-700 mb-6 pb-2 inline-block">
                            Why Choose CityCare?
                        </h2>
                        <ul className="list-none space-y-3 pl-0">
                            <li className="text-gray-700 text-lg flex items-start">
                                <span className="text-blue-600 mr-3 text-xl">✔️</span>
                                State-of-the-art facilities and cutting-edge technology
                            </li>
                            <li className="text-gray-700 text-lg flex items-start">
                                <span className="text-blue-600 mr-3 text-xl">✔️</span>
                                24/7 emergency and critical care services
                            </li>
                            <li className="text-gray-700 text-lg flex items-start">
                                <span className="text-blue-600 mr-3 text-xl">✔️</span>
                                Personalized patient care and support
                            </li>
                            <li className="text-gray-700 text-lg flex items-start">
                                <span className="text-blue-600 mr-3 text-xl">✔️</span>
                                Comprehensive specialties under one roof
                            </li>
                            <li className="text-gray-700 text-lg flex items-start">
                                <span className="text-blue-600 mr-3 text-xl">✔️</span>
                                Trusted by thousands of families
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;