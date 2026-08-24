import React from 'react';
import H from '../components/common/H.jsx';
import Carousel from '../components/common/Carousel.jsx';
import ImageTextSection from '../components/common/ImageTextSection.jsx';
import { useNavigate } from 'react-router-dom';
const WhoWeServe = () => {
    const navigate = useNavigate();
    const countriesServed = [
        { name: 'United States', image: 'https://flagcdn.com/w320/us.png' },
        { name: 'Canada', image: 'https://flagcdn.com/w320/ca.png' },
        { name: 'United Kingdom', image: 'https://flagcdn.com/w320/gb.png' },
        { name: 'Australia', image: 'https://flagcdn.com/w320/au.png' },
        { name: 'Germany', image: 'https://flagcdn.com/w320/de.png' },
        { name: 'France', image: 'https://flagcdn.com/w320/fr.png' },
        { name: 'Spain', image: 'https://flagcdn.com/w320/es.png' },
        { name: 'Italy', image: 'https://flagcdn.com/w320/it.png' },
        { name: 'Netherlands', image: 'https://flagcdn.com/w320/nl.png' },
        { name: 'Sweden', image: 'https://flagcdn.com/w320/se.png' },
        { name: 'Norway', image: 'https://flagcdn.com/w320/no.png' },
        { name: 'Denmark', image: 'https://flagcdn.com/w320/dk.png' },
        { name: 'Finland', image: 'https://flagcdn.com/w320/fi.png' },
        { name: 'Belgium', image: 'https://flagcdn.com/w320/be.png' },
        { name: 'Switzerland', image: 'https://flagcdn.com/w320/ch.png' },
        { name: 'Austria', image: 'https://flagcdn.com/w320/at.png' },
        { name: 'Poland', image: 'https://flagcdn.com/w320/pl.png' },
        { name: 'Ireland', image: 'https://flagcdn.com/w320/ie.png' },
        { name: 'New Zealand', image: 'https://flagcdn.com/w320/nz.png' },
        { name: 'Japan', image: 'https://flagcdn.com/w320/jp.png' },
        { name: 'South Korea', image: 'https://flagcdn.com/w320/kr.png' },
        { name: 'Singapore', image: 'https://flagcdn.com/w320/sg.png' },
        { name: 'India', image: 'https://flagcdn.com/w320/in.png' },
        { name: 'Brazil', image: 'https://flagcdn.com/w320/br.png' },
        { name: 'Mexico', image: 'https://flagcdn.com/w320/mx.png' },
        { name: 'Argentina', image: 'https://flagcdn.com/w320/ar.png' },
        { name: 'South Africa', image: 'https://flagcdn.com/w320/za.png' },
        { name: 'Nigeria', image: 'https://flagcdn.com/w320/ng.png' },
        { name: 'Kenya', image: 'https://flagcdn.com/w320/ke.png' },
        { name: 'Egypt', image: 'https://flagcdn.com/w320/eg.png' },
    ];

    const data = [
        {
            title: 'Community',
            description: 'Human Health Project (HHP) is a growing community of patients, caregivers, health advocates, donors, and volunteers. HHP was created "of the people, by the people, and for the people." Listening to the community is central to our mission, and we value communication and the exchange of information in all that we do.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/08/Community-e1539922397469.webp',
        },
        {
            title: 'Stakeholders',
            description: 'Our primary stakeholders are individuals struggling with health issues and seeking unbiased information, education, and support for themselves and those in their care.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Stakeholders.webp',
        },
        {
            title: 'Local & Global',
            description: 'We realize achieving long-term success requires sacrifice, innovation, and sustained effort. To maximize our impact, we hold ourselves accountable to our local communities with whom we strive to achieve meaningful and measurable outcomes.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Local-and-Global-1.webp',
        },
        {
            title: 'Equality',
            description: 'HHP provides health information, education, and support to people around the world, regardless of financial status or geographic location, with a special focus on the underserved. Through our programs, our goal is to advance fairness, inclusion, and opportunity for all.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2021/07/Equality.webp',
        },
    ]

    return (
        <div className="section">
            <div className="container">
                <section>
                    <div className="relative text-center py-8">
                        <img src="https://humanhealthproject.org/wp-content/uploads/2023/09/Who-We-Serve-Cover-2.webp" alt="Who We Serve Cover" />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <H level={1} className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white!">
                            WHO WE SERVE
                        </H>
                    </div>
                </section>

                {/* Who We Serve Section */}
                <section>
                    <div>
                        {data.map((item, index) => (
                            <ImageTextSection
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                imageAlt={item.title}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Countries Section */}
                <section>
                    <div className="text-center py-8">
                        <H level={2} className="text-center">
                            Countries Served
                        </H>
                    </div>
                    <div className="py-8">
                        <Carousel
                            items={countriesServed}
                            autoPlay={true}
                            autoPlayInterval={3000}
                        />
                    </div>
                </section>


                {/* Support HHP Section */}
                <section>
                    <div className="text-center py-8">
                        <H level={2} className="text-center">
                            Support HHP
                        </H>
                    </div>
                    <div>
                        <div className="flex flex-col lg:flex-row overflow-hidden">
                        {/* Left - Donate Content */}
                        <div className="lg:w-1/2 bg-linear-to-b from-slate-100 to-blue-50 px-8 md:px-16 py-16 flex flex-col items-center justify-center text-center">
                            <H level={3} className="font-bold tracking-widest text-center">
                            DONATE TODAY
                            </H>
                            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
                            We rely on your donations to pay for servers, bandwidth, maintenance,
                            and development of the Human Health Project platform including
                            salaries. We need a small paid staff of 5 to work with a volunteer team of
                            80 people. Your financial gift will help people across the globe.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-200 shadow-md hover:shadow-lg"
                            onClick={()=> navigate('/donate')}>
                            GIVE NOW
                            </button>
                        </div>

                        {/* Right - Heart Image */}
                        <div className="lg:w-1/2">
                            <img
                            src="https://humanhealthproject.org/wp-content/uploads/2023/09/donate-giving-heart.webp"
                            alt="Hands holding a red heart"
                            className="w-full h-64 lg:h-full object-cover"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 py-10 px-8">
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-gray-700 text-lg">
                            Our project is growing and we want you to be a part of it.
                            </p>
                            <p className="text-gray-600 italic text-lg">
                            More People. More Information. Better Health.
                            </p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap" 
                            onClick={()=> navigate('/signup')}>
                            JOIN US!
                        </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default React.memo(WhoWeServe);
