'use client';

import { useState } from 'react';
import { phoneNumber } from '@/utils/phoneNumber';

const TechFixContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our support team',
      contact: phoneNumber,
      action: `tel:${phoneNumber}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp',
      contact: phoneNumber,
      action: `https://wa.me/${phoneNumber.replace('+', '')}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us your detailed inquiry',
      contact: 'info@techfix.ae',
      action: 'mailto:info@techfix.ae',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Our main service center',
      contact: 'Dubai, UAE',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const serviceAreas = [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'
  ];

  const services = [
    'Refrigerator Repair',
    'Washing Machine Repair',
    'Dishwasher Repair',
    'AC Repair',
    'Oven Repair',
    'TV Installation',
    'Dryer Repair',
    'Microwave Repair',
    'Other'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-heading text-gray-900 mb-4 sm:mb-6">
            Ready to Fix Your
            <span className="block gradient-text">Appliance?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-body text-gray-600 max-w-3xl mx-auto px-4">
            Contact us today for professional appliance repair services. We're here to help 
            with same-day service across the UAE. Get your free quote now!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="card-modern p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-modern text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-modern text-sm sm:text-base"
                      placeholder={phoneNumber}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-modern text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="input-modern text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="textarea-modern text-sm sm:text-base"
                    placeholder="Describe your appliance issue..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 sm:py-4 text-sm sm:text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Service Areas */}
            <div className="card-modern p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="card-modern p-4 sm:p-6 group hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl sm:text-2xl">{method.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{method.title}</h4>
                      <p className="text-xs sm:text-sm text-white mb-2">{method.description}</p>
                      <p className="text-xs sm:text-sm font-medium text-blue-600 break-all">{method.contact}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="card-modern p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Business Hours</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-white">Monday - Friday</span>
                  <span className="font-medium text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-white">Saturday</span>
                  <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-white">Sunday</span>
                  <span className="font-medium text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 text-sm sm:text-base">
                  <span className="text-blue-600 font-medium">Emergency Service</span>
                  <span className="font-medium text-blue-600">24/7</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card-modern p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Need Immediate Help?</h4>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                For urgent appliance repairs, call us now for same-day service.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary w-full text-center block text-sm sm:text-base py-3 sm:py-4"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="break-all">Call Now: {phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFixContact;
