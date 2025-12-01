import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBook, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUsSection = () => {

  // بيانات الأقسام
  const features = [
    {
      title: 'Why Choose us?',
      description: 'We provide you with the best digital learning experience',
      icon: faLaptop,
      isIntro: true,
    },
    {
      title: 'Diverse Courses',
      description: 'Access the best training courses in various technical and creative fields',
      icon: faBook,
    },
    {
      title: 'Professional Instructors',
      description: 'Learn from specialized experts with extensive practical experience',
      icon: faUsers,
    },
    {
      title: 'Certified Programs',
      description: 'Earn recognized certificates upon successful completion of courses',
      icon: faTrophy,
    },
  ];

  return (
    <div className="flex justify-center px-4 py-12 sm:px-6 lg:px-8 mt-40">
      {/* الـ Div الرئيسي الأزرق الداكن */}
      <div className="flex w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden bg-[#0f3b4b] text-white flex-col lg:flex-row">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex-1 px-8 py-10 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start justify-center min-h-[220px]
                        ${index < features.length - 1 ? 'lg:border-r lg:border-white/20' : ''} border-b border-white/10 last:border-b-0 lg:border-b-0`}
          >
            {feature.icon && (
              <div className="text-4xl text-amber-400">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
            )}

            <div className="space-y-2">
              {/* العنوان */}
              <h3 className="text-xl font-bold tracking-wide">
                {feature.title}
              </h3>

              {/* الوصف */}
              <p className="text-sm opacity-80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;