import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Award, Users, BookOpen, Wrench, Cpu, ShoppingCart, Settings, GraduationCap, ChevronDown } from 'lucide-react';

const SusilITI = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'electronics', label: 'Institute for Electronics', icon: <Cpu className="w-5 h-5" /> },
    { id: 'research', label: 'Research and Development', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'spares', label: 'Electronic Spares', icon: <Wrench className="w-5 h-5" /> },
    { id: 'products', label: 'Assembled Products', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'service', label: 'Sales and Service', icon: <Settings className="w-5 h-5" /> }
  ];

  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certified Training",
      description: "Government recognized ITI certification programs"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Faculty",
      description: "Experienced instructors with industry expertise"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Hands-on Learning",
      description: "Practical training with modern equipment"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Latest Technology",
      description: "Training in current electronics technologies"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm gap-4">
            <div className="flex items-center space-x-6">
              <a href="tel:9245288900" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>92452 88900</span>
              </a>
              <a href="tel:9566516737" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>95665 16737</span>
              </a>
              <a href="tel:9150543673" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>91505 43673</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@susiliti.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SUSIL I.T.I
                </h1>
                <p className="text-xs text-slate-600">Run by R.M Charitable Trust</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeMenu === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 ${
                    activeMenu === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Home */}
      {activeMenu === 'home' && (
        <div>
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-24">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                  We Educate and Develop<br />
                  <span className="text-blue-300">Certified Skilled Technicians</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Premier electronics training institute in Rajapalayam, offering industry-recognized certification and comprehensive technical education
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setActiveMenu('electronics')}
                    className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
                  >
                    <span>Explore Courses</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Why Choose SUSIL I.T.I?</h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Empowering students with practical skills and industry-recognized certifications
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-2xl font-bold mb-3">Visit Our Campus</h4>
                      <p className="text-blue-100 leading-relaxed">
                        96A7, North Andalpuram, PACR Salai<br />
                        RAJAPALAYAM – 626 108<br />
                        Virudhunagar District, Tamilnadu, India
                      </p>
                    </div>
                  </div>
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder sections for other menus */}
      {activeMenu === 'electronics' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-12 rounded-3xl">
                <Cpu className="w-24 h-24 mx-auto text-blue-600 mb-6" />
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Institute for Electronics</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Content section ready for your courses, programs, and curriculum details
                </p>
                <div className="inline-block bg-blue-50 px-6 py-3 rounded-full text-blue-600 font-medium">
                  Add your content here
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'research' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-12 rounded-3xl">
                <BookOpen className="w-24 h-24 mx-auto text-purple-600 mb-6" />
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Research and Development</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Content section ready for your R&D projects and innovations
                </p>
                <div className="inline-block bg-purple-50 px-6 py-3 rounded-full text-purple-600 font-medium">
                  Add your content here
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'spares' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-12 rounded-3xl">
                <Wrench className="w-24 h-24 mx-auto text-green-600 mb-6" />
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Electronic Spares</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Content section ready for your spare parts catalog and inventory
                </p>
                <div className="inline-block bg-green-50 px-6 py-3 rounded-full text-green-600 font-medium">
                  Add your content here
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'products' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-12 rounded-3xl">
                <ShoppingCart className="w-24 h-24 mx-auto text-orange-600 mb-6" />
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Assembled Products</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Content section ready for your assembled electronics products
                </p>
                <div className="inline-block bg-orange-50 px-6 py-3 rounded-full text-orange-600 font-medium">
                  Add your content here
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'service' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-12 rounded-3xl">
                <Settings className="w-24 h-24 mx-auto text-cyan-600 mb-6" />
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Sales and Service</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Content section ready for your sales and service offerings
                </p>
                <div className="inline-block bg-cyan-50 px-6 py-3 rounded-full text-cyan-600 font-medium">
                  Add your content here
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">SUSIL I.T.I</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering the next generation of skilled electronics technicians through quality education and practical training.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>92452 88900</div>
                    <div>95665 16737</div>
                    <div>91505 43673</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>96A7, North Andalpuram, Rajapalayam</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 SUSIL I.T.I - Run by R.M Charitable Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SusilITI;