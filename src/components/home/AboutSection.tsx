import React from 'react';

type StatCard = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

type Props = {
  images: string[];
  stats: StatCard[];
};

const AboutSection: React.FC<Props> = ({ images, stats }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Images collage */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#fff6e9] via-white to-[#e0f0ff] p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
          {/* primary image */}
          <div className="flex-1 min-h-[320px]">
            {images[0] ? (
              <img
                src={images[0]}
                alt="about-primary"
                className="w-full h-full object-cover rounded-[32px]"
              />
            ) : (
              <div className="w-full h-full rounded-[32px] bg-gray-200" />
            )}
          </div>

          {/* stacked images */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 min-h-[150px] flex items-center justify-center">
              {images[1] ? (
                <div className="w-full h-full rounded-full border-[3px] border-dashed border-[#e4a918] flex items-center justify-center ">
                  <img
                    src={images[1]}
                    alt="about-secondary"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full border-4 border-dashed border-[#e4a918] bg-white" />
              )}
            </div>

            <div className="flex-1 min-h-[150px]">
              {images[2] ? (
                <img
                  src={images[2]}
                  alt="about-tertiary"
                  className="w-full h-[18rem] object-cover rounded-[24px]"
                />
              ) : (
                <div className="w-full h-full rounded-[24px] bg-gray-200" />
              )}
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h3 className="text-[#0f5e8b] font-semibold mb-2">About Us</h3>
          <h4 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering Students & Mentors<br />
            to Grow Together
          </h4>

          <p className="text-gray-600 mb-6">
            EduNest was created to connect passionate IT students with experienced mentors, who can guide them toward real-world success. Our mission is to make learning more practical, personal, and inspiring.
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded mb-8">
            <p className="text-sm text-gray-700">
              <strong>With personalized mentorship and hands-on learning,</strong> EduNest helps learners gain real-world experience and grow with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
