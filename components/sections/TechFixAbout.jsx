'use client';

import { phoneNumber } from '@/utils/phoneNumber';

const TechFixAbout = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: '👥' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
    { number: '99.8%', label: 'Success Rate', icon: '🎯' },
    { number: '24/7', label: 'Emergency Service', icon: '🚨' },
  ];

  const features = [
    {
      icon: '🛠️',
      title: 'Certified Technicians',
      description: 'All our technicians are certified and trained on the latest appliance technologies.'
    },
    {
      icon: '⚡',
      title: 'Same-Day Service',
      description: 'Most repairs completed on the same day. Emergency services available 24/7.'
    },
    {
      icon: '🛡️',
      title: 'Warranty Included',
      description: 'All repairs come with comprehensive warranty coverage for your peace of mind.'
    },
    {
      icon: '💰',
      title: 'Fair Service',
      description: 'Transparent service with no hidden fees. Free estimates for all services.'
    },
    {
      icon: '🏠',
      title: 'Home Service',
      description: 'We come to you! No need to transport heavy appliances to repair shops.'
    },
    {
      icon: '🔧',
      title: 'Quality Parts',
      description: 'We use only genuine and high-quality replacement parts for all repairs.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              About Swift Repairs UAE
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-heading text-gray-900">
                Your Trusted Appliance
                <span className="block gradient-text">Repair Partner</span>
              </h2>
              <p className="text-body text-gray-600">
                With over 15 years of experience in the UAE, Swift Repairs UAE has become the leading 
                appliance repair service provider. We combine technical expertise with exceptional 
                customer service to deliver reliable solutions for all your appliance needs.
              </p>
            </div>

            {/* Story */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
              <p className="text-gray-600">
                Founded in 2008, Swift Repairs UAE started as a small family business with a simple mission: 
                to provide honest, reliable, and affordable appliance repair services. Today, we've grown 
                to serve thousands of customers across the UAE, maintaining our commitment to quality and 
                customer satisfaction.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get Free Quote
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="btn-outline"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-modern p-6 text-center group hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Team Card */}
            <div className="card-modern p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">
                    Our team of 50+ certified technicians brings years of experience and 
                    specialized training to every repair job.
                  </p>
                </div>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              {features.slice(4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFixAbout;
