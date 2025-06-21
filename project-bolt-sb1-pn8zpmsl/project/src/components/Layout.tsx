import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ExternalLink, Menu, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const topNavItems = ['Personal', 'Select', 'Private', 'Business', 'Corporate'];
  
  const mainNavItems = [
    { name: 'Current accounts', path: '/current-accounts' },
    { name: 'Credit cards', path: '/credit-cards' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Loans', path: '/loans' },
    { name: 'Mortgages', path: '/mortgages' },
    { name: 'Savings', path: '/savings' },
    { name: 'Investments', path: '/investments' },
    { name: 'Digital Banking', path: '/digital-banking' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <nav className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-8">
              {topNavItems.map((item, index) => (
                <button
                  key={item}
                  className={`text-sm font-medium hover:text-red-200 transition-colors duration-200 ${index === 0 ? 'font-bold' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium hover:text-red-200 transition-colors duration-200 flex items-center">
                Register
                <ExternalLink className="ml-1 h-3 w-3" />
              </button>
              <button className="bg-white text-red-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-red-50 transition-colors duration-200 flex items-center">
                Log on
                <ExternalLink className="ml-1 h-3 w-3" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-700 border-t border-red-500">
            <div className="px-4 py-2 space-y-2">
              {topNavItems.map((item) => (
                <button
                  key={item}
                  className="block w-full text-left text-sm font-medium hover:text-red-200 py-1"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Header */}
      <Header />

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8 overflow-x-auto">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`whitespace-nowrap py-4 text-sm font-medium ${
                    location.pathname === item.path 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-700 hover:text-red-600 border-b-2 border-transparent hover:border-red-600'
                  } transition-all duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;