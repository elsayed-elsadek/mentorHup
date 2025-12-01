import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../../utils/constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0f3b4b] text-white max-h-full lg:max-h-[750px]">

      <div className="flex items-center justify-center mb-6">
        <span className="px-5 py-2 bg-yellow-100 font-bold text-[#CF9B1D] rounded-full text-sm">
          Our Services
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-10">
          <h3 className="text-white text-2xl md:text-3xl font-bold m-auto w-2/3">We provide tailored solutions for students and mentors to make the most out of their learning journey</h3>
        </div>





        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          {/* Mentors column */}
          <div>

            <div className="flex items-center justify-start mb-6  flex-col">
              <span className="mentor px-5 py-2 bg-yellow-100 font-bold text-[#CF9B1D] rounded-full text-sm">For Mentors</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.mentors.map((s, idx) => (
                <ServiceCard key={idx} title={s.title} description={s.desc} />
              ))}
            </div>
          </div>

          {/* Students column */}
          <div>
            <div className="flex items-center justify-end mb-6 flex-col">
              <span className="px-5 py-2 mentor bg-yellow-100 font-bold text-[#CF9B1D] rounded-full text-sm">For Students</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.students.map((s, idx) => (
                <ServiceCard key={idx} title={s.title} description={s.desc} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(ServicesSection);
