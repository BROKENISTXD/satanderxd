import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 z-10"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Homepage Banner.jpg"
            alt="Banking background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                  Flip the switch.
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  Give your money a fresh start.
                </h2>
              </div>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Get £180 when you switch to an eligible current account using the 
                Current Account Switch Service.
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Switch your account
              </button>

              <div className="text-sm text-gray-300 leading-relaxed max-w-3xl pt-4">
                <p>
                  Within 60 days, complete the full switch, set up 2 Household Direct Debits and pay in £1,500. 
                  Sorry we can't offer this if you held a current account with Santander on 1 January 2025 or if you've 
                  previously received a Santander switcher incentive. Offer may be withdrawn at any time. T&Cs apply.
                </p>
              </div>
            </div>

            {/* Image and Badge */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Person using mobile banking"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Switch Guarantee Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-2xl shadow-2xl border-4 border-gray-100">
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-600 mb-1 tracking-wide">CURRENT ACCOUNT</div>
                    <div className="text-lg font-bold text-gray-900">SWITCH</div>
                    <div className="text-lg font-bold text-gray-900 mb-2">GUARANTEE</div>
                    <div className="text-3xl transform rotate-45">↗</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need help buying your first home?</h3>
              <p className="text-gray-600 mb-6">Take a look at our 5% deposit mortgages.</p>
              <Link to="/mortgages" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                First time buyers →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/Loans.jpg" 
                alt="Loans" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Something big on the horizon?</h3>
              <p className="text-gray-600 mb-6">New car, home improvements or another big expense?</p>
              <p className="text-gray-600 mb-6">We have loans from £1,000 to £25,000. See if you're eligible using our checker in as little as 5 minutes.</p>
              <Link to="/loans" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                Check eligibility →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Santander Edge credit card</h3>
              <p className="text-gray-600 mb-6">Got a personal current account with us? Earn up to £15 a month cashback by spending on our Edge credit card.</p>
              <p className="text-gray-600 mb-6">Monthly fee applies. <strong>29.8% APR representative (variable)</strong>. Credit is subject to status.</p>
              <Link to="/credit-cards" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                Explore credit card →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Support for Personal customers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex flex-col items-center mb-6">
                <svg className="w-16 h-16 text-red-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.5C12 5.12 13.12 4 14.5 4C15.88 4 17 5.12 17 6.5C17 7.88 15.88 9 14.5 9C13.12 9 12 7.88 12 6.5Z" fill="currentColor"/>
                  <path d="M16.5 11H12.5C11.67 11 11 11.67 11 12.5V17.41L16.5 11Z" fill="currentColor"/>
                  <path d="M7 20H11V14.41L5.5 20H7Z" fill="currentColor"/>
                  <path d="M22 20V7L12 3L2 7V20H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl font-semibold text-center">Unlock your potential</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">Your potential. It's big. Let's not keep it locked up. Explore Santander Open Academy, our free online learning platform.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex flex-col items-center mb-6">
                <svg className="w-16 h-16 text-red-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 5H13V5.01H11V5Z" fill="currentColor"/>
                </svg>
                <h3 className="text-xl font-semibold text-center">Safe in your hands</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">Dive into the new features of our award-winning app. It's quick, easy and above all secure.</p>
              <div className="flex justify-center">
                <Link to="/digital-banking" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                  Learn how
                </Link>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex flex-col items-center mb-6">
                <svg className="w-16 h-16 text-red-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5C13.6569 5 15 3.65685 15 2H9C9 3.65685 10.3431 5 12 5Z" fill="currentColor"/>
                </svg>
                <h3 className="text-xl font-semibold text-center">Feel more secure in your finances</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">Get support if you've missed a payment, are struggling to keep up, or need tips on budgeting.</p>
              <div className="flex justify-center">
                <Link to="/support" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                  Get help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access to Cash Banner */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cash and coins" 
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-2xl font-bold mb-4">Access to cash</h2>
                <p className="text-gray-700">Find out how you can <Link to="/support" className="text-red-600 hover:underline">access cash in your local area</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;