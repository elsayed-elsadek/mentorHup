import React from 'react';
import { useHomeImages } from '../hooks/useHomeImages';
import LogoStrip from '../components/common/LogoStrip';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import MentorshipsSection from '../components/home/MentorshipsSection';
import AboutSection from '../components/home/AboutSection';
import { ABOUT_IMAGES, ABOUT_STATS, MENTORSHIPS } from '../utils/constants';

const Home: React.FC = () => {
  const img = useHomeImages();

  return (
    <div className="min-h-screen bg-white">


      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left content */}
          <div className="z-10">
            <h1 className="blueTextColor text-4xl md:text-6xl font-extrabold  leading-tight">
              Learn.Mentor. Grow
              <br />
              <span className="block">All in one place.</span>
            </h1>

            <p className="mt-6 text-gray-500 max-w-xl">
              Join a community where mentors share experience and students grow with real-world guidance
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 blueBGColor text-white rounded-full font-medium">Become a mentor</button>
              <button className="px-6 py-3 border border-[#bcd7ee] rounded-full blueTextColor font-medium">Join now</button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="-space-x-2 flex items-center">
                {img.persons.map((personImg, index) => (
                  <img key={index} src={personImg} alt={`avatar-${index}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">Join 1,000 mentors and students</span>
            </div>

          </div>

          {/* Right composition */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[540px] h-[480px] rounded-[40px] bg-gradient-to-br from-orange-50/75 via-white/40 to-blue-50/60 backdrop-blur-sm relative flex items-center justify-center">

              {/* decorative floating cards */}

              <div className="absolute left-10 z-10 -top-20 ">
                <img src={img.book || ''} alt="book" className="w-32 h-40 rounded-lg" />
              </div>

              <div className="absolute -left-16 z-10 top-20 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
                <img src={img.person3 || ''} alt="m" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">100+</div>


                  <div className="text-xs text-gray-400">mentors</div>
                </div>
              </div>

              <div className="absolute z-10 -left-12 bottom-20 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-amber-100 flex items-center justify-center">⭐</div>
                <div>
                  <div className="text-sm font-semibold">4.9/5.00</div>
                  <div className="text-xs text-gray-400">Trusted by student</div>
                </div>
              </div>

              <div className="absolute -right-4 z-10 top-10 ">
                <img src={img.stars || ''} alt="stars" className="w-25 h-20 rounded-lg opacity-75" />
              </div>

              {/* main image */}
              <div className="relative w-[360px] h-[400px]">
                {img.img1 ? (
                  <img src={img.img1} alt="students" className="w-full h-full object-cover rounded-[30px] shadow-2xl" />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-[30px]" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* bottom logo strip */}
        <LogoStrip />

      </section>

      {/* Services section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* why choose us section */}
      <section id="why-us">
        <WhyChooseUsSection />
      </section>

      {/* Mentorships section */}
      <section id="mentorships">
        <MentorshipsSection mentorships={MENTORSHIPS} />
      </section>

      {/* About section */}
      <section id="about">
        <AboutSection images={ABOUT_IMAGES} stats={ABOUT_STATS} />
      </section>
    </div>
  );
};

export default Home;
