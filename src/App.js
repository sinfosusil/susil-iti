import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Sparkles, Phone, Mail, MapPin, Award, Users, BookOpen, Wrench, Cpu, Settings, GraduationCap, Monitor, BatteryCharging, Image } from 'lucide-react';

function App() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    's (16).jpeg', 's (17).jpeg', 's (18).jpeg', 's (19).jpeg', 's (20).jpeg',
    's (21).jpeg', 's (22).jpeg', 's (23).jpeg', 's (24).jpeg', 's (25).jpeg'
  ];

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
    { id: 'service', label: 'Sales and Service', icon: <Settings className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-5 h-5" /> }
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
    { number: "25+", label: "Years Experience" },
    { number: "1000+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" }
  ];

  const allProducts = [
    // Restoring original picture order: s2, s3, s4, s5, s15, s16, s17, s6, s7, s8, s9, s10, s11, s12, s13, s14
    {
      id: 's17', name: 'Amplifier System', description: 'Audiophile grade stereo setup', image: 's (17).jpg', price: 'Rs. 22,000',
    },
    {
      id: 's2', name: '2 Way Speaker',
      description: `The SUSIL is a compact and reliable 2-way speaker system designed to deliver clear, balanced audio reproduction across a wide frequency range. Crafted with a focus on durability and performance, this speaker features a sturdy rectangular enclosure wrapped in black textured fabric, providing a classic, understated aesthetic that blends seamlessly into home entertainment setups, small studios, or portable audio applications.

The front facade is dominated by a protective metal grille with a distinctive hexagon perforated pattern, which safeguards the internal components while promoting efficient sound projection and minimizing acoustic interference. Positioned above the main grille is a dedicated circular port for high-frequency output, ensuring crisp highs that integrate smoothly with the overall sound profile for an engaging listening experience.

Built for versatility, the SUSIL operates as a passive speaker, making it easy to pair with standard amplifiers or receivers. It excels in rendering detailed vocals, instruments, and effects with low distortion, whether used for music playback, movie soundtracks, or light reinforcement in casual events. The enclosure's solid construction includes reinforced corners and mounting points for secure installation on shelves, walls, or stands.

Key highlights:
• Robust fabric-covered cabinet for vibration resistance and longevity
• Hexagon mesh grille for optimal driver protection and airflow
• 2-way design for comprehensive full-range coverage
• Suitable for stereo pairs, surround sound systems, or standalone use

This model emphasizes affordability without compromising on essential audio quality, making it a practical choice for enthusiasts seeking dependable performance in everyday scenarios.`,
      image: 's (2).jpeg', price: 'Rs. 4,500' // specs removed
    },
    {
      id: 's3', name: '2 Way Woofer', description: 'High-fidelity sound reproduction', image: 's (3).jpeg', price: 'Rs. 6,800',
    },
    {
      id: 's4', name: '3 Way Woofer', description: 'Floor-standing premium audio', image: 's (4).jpeg', price: 'Rs. 8,500',
    },
    {
      id: 's5', name: '3 Way Tower Speakers', description: 'Unique acoustic design', image: 's (5).jpeg', price: 'Rs. 12,000',
    },
    {
      id: 's15', name: 'Subwoofer Amplifier', description: 'Pure sound in a small footprint', image: 's (15).jpeg', price: 'Rs. 7,500',
    },
    {
      id: 's16', name: 'Dolby Atmos Pre Amplifier', description: 'Perfect for patio and poolside', image: 's (16).jpeg', price: 'Rs. 18,500',
    },
    {
      id: 'a1', name: 'Slope Speaker', description: 'With 3 Band equalizer', image: 's (6).jpeg', price: 'Rs. 5,500',
    },
    {
      id: 'a2', name: 'Subwoofer', description: '2.1/4.1 Channel support', image: 's (7).jpeg', price: 'Rs. 6,200',
    },
    {
      id: 'a3', name: 'Stereo Player', description: 'High power input support', image: 's (8).jpeg', price: 'Rs. 4,800',
    },
    {
      id: 'a4', name: '12v Car Player', description: 'Crystal clear surround sound', image: 's (9).jpeg', price: 'Rs. 3,500',
    },
    {
      id: 'a5', name: '24v Bus Player', description: 'Theater system | Home DTS', image: 's (10).jpeg', price: 'Rs. 8,500',
    },
    {
      id: 'a6', name: 'Digital 5.1 Home DTS', description: 'LED Level Home DTS', image: 's (11).jpeg', price: 'Rs. 15,500',
    },
    {
      id: 'a7', name: 'Digital 5.1 Home Cinema Théâtre DTS', description: 'Ultimate power amplifier', image: 's (12).jpeg', price: 'Rs. 18,000',
    },
    {
      id: 'a8', name: 'Digital 5.1 Home Cinema Theatre DTS with LED Level indicators', description: 'Dedicated bass amplification', image: 's (13).jpeg', price: 'Rs. 21,500',
    },
    {
      id: 'a9', name: 'Digital Dolby Atmos 13.1 Channel Home DTS', description: 'Precision signal processing', image: 's (14).jpeg', price: 'Rs. 45,000',
    },
    {
      id: 'p18', name: 'Robot', description: 'Advanced robotics kit', image: 's (18).jpeg', price: 'Rs. 12,500',
    },
    {
      id: 'p19', name: 'Solar Panel', description: 'High efficiency solar module', image: 's (19).jpeg', price: 'Rs. 8,000',
    },
    {
      id: 'p20', name: 'Isolated Stablizer', description: 'Voltage fluctuation protection', image: 's (20).jpeg', price: 'Rs. 3,500',
    },
    {
      id: 'p21', name: 'Induction / IR Stove', description: 'Smart cooking solution', image: 's (21).jpeg', price: 'Rs. 4,200',
    },
    {
      id: 'p22', name: 'LED TV', description: 'High definition display', image: 's (22).jpeg', price: 'Rs. 10,500',
    },
    {
      id: 'p23', name: 'Inverter/UPS', description: 'Uninterrupted power supply', image: 's (23).jpeg', price: 'Rs. 15,000',
    },
    {
      id: 'p24', name: 'Walkie Talkie', description: 'Long range communication', image: 's (24).jpeg', price: 'Rs. 5,500',
    },
    {
      id: 'p25', name: 'Airgrid', description: 'Network connectivity', image: 's (25).jpeg', price: 'Rs. 4,500',
    },
    {
      id: 'p26', name: 'Dolby Atmos', description: 'Immersive sound experience', image: 's (26).jpeg', price: 'Rs. 35,000',
    },
    {
      id: 'p27', name: 'Dolby 5.1 Systems', description: 'Surround sound system', image: 's (27).jpeg', price: 'Rs. 25,000',
    },
    {
      id: 'p28', name: '2.1 Sound Bar', description: 'Compact audio enhancement', image: 's (28).jpeg', price: 'Rs. 8,500',
    },
    {
      id: 'p29', name: 'PA System', description: 'Public address solution', image: 's (29).jpeg', price: 'Rs. 18,000',
    },
    {
      id: 'p30', name: 'CCTV', description: 'Security surveillance', image: 's (30).jpeg', price: 'Rs. 12,000',
    },
    {
      id: 'p31', name: 'Cordless Telephone', description: 'Wireless communication', image: 's (31).jpeg', price: 'Rs. 2,500',
    },
    {
      id: 'p32', name: 'Drone', description: 'Aerial photography & surveillance', image: 's (32).jpeg', price: 'Rs. 45,000',
    },
    {
      id: 'p33', name: 'EPABX', description: 'Intercom exchange system', image: 's (33).jpeg', price: 'Rs. 8,500',
    },
    {
      id: 'p34', name: 'Lithium Iron Battery', description: 'Long lasting power storage', image: 's (34).jpeg', price: 'Rs. 6,500',
    },
    {
      id: 'p35', name: 'Solar MPPT Controller', description: 'Maximum power point tracking', image: 's (35).jpeg', price: 'Rs. 3,500',
    },
    {
      id: 'p36', name: '2Way Intercom', description: 'Instant two-way communication', image: 's (36).jpeg', price: 'Rs. 1,800',
    },
    {
      id: 'p37', name: 'Telephone', description: 'Standard landline phone', image: 's (37).jpeg', price: 'Rs. 850',
    },
    {
      id: 'p38', name: 'Powerline Intercom', description: 'Communication over power lines', image: 's (38).jpeg', price: 'Rs. 2,200',
    },
    {
      id: 'p39', name: 'Educational Project', description: 'Learning kit for students', image: 's (39).jpeg', price: 'Rs. 1,500',
    },
    {
      id: 'p40', name: 'HAM Transceiver', description: 'Amateur radio equipment', image: 's (40).jpeg', price: 'Rs. 12,000',
    },
    {
      id: 'p41', name: 'DLP/3LCD/3D Projector', description: 'High quality projection', image: 's (41).jpeg', price: 'Rs. 28,000',
    },
    {
      id: 'p42', name: 'IP Phone', description: 'VoIP communication device', image: 's (42).jpeg', price: 'Rs. 4,500',
    },
    {
      id: 'p43', name: 'IP EPABX', description: 'IP-based PBX system', image: 's (43).jpeg', price: 'Rs. 15,000',
    },
    {
      id: 'p44', name: 'LED Screen & Video Splicer', description: 'Large display solutions', image: 's (44).jpeg', price: 'Rs. 65,000',
    },
    {
      id: 'p45', name: 'Motion Sensor Units', description: 'Automated detection system', image: 's (45).jpeg', price: 'Rs. 1,200',
    },
    {
      id: 'p46', name: 'Biometric Unit', description: 'Access control system', image: 's (46).jpeg', price: 'Rs. 6,500',
    },
    {
      id: 'p47', name: 'Door Security System', description: 'Enhanced premises security', image: 's (47).jpeg', price: 'Rs. 8,500',
    },
    {
      id: 'p48', name: 'Remote Switch Control', description: 'Wireless automation', image: 's (48).jpeg', price: 'Rs. 2,500',
    }
  ];

  const showroomPrices = {
    tvs: [
      {
        category: "NORMAL LED TV",
        icon: <Monitor className="w-6 h-6 text-blue-600" />,
        items: [
          { size: "24” TV", price: "Rs. 8,500" },
          { size: "32” TV", price: "Rs. 10,500" }
        ]
      },
      {
        category: "SMART LED TV",
        icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
        items: [
          { size: "24” TV", price: "Rs. 10,500" },
          { size: "32” TV", price: "Rs. 12,000" },
          { size: "40” TV", price: "Rs. 18,000" },
          { size: "43” TV", price: "Rs. 19,500" }
        ]
      },
      {
        category: "SMART 4K / UHD DOLBY",
        icon: <Award className="w-6 h-6 text-purple-600" />,
        items: [
          { size: "43” TV", price: "Rs. 26,500" },
          { size: "50” TV", price: "Rs. 36,000" },
          { size: "55” TV", price: "Rs. 42,000" },
          { size: "65” TV", price: "Rs. 60,000" },
          { size: "75” Touch Screen", price: "Rs. 1,10,000" }
        ]
      }
    ],
    stabilizers: [
      {
        category: "ISOLATED STABILIZER",
        icon: <BatteryCharging className="w-6 h-6 text-amber-600" />,
        items: [
          { size: "IS30", price: "Rs. 3,000" },
          { size: "IS60", price: "Rs. 4,000" },
          { size: "IS100", price: "Rs. 4,500" },
          { size: "IS200", price: "Rs. 5,500" }
        ]
      }
    ]
  };

  const audioPackages = [
    { model: "SA021 – 30", modelPrice: "Rs. 6,000", speaker: "8” / 20W × 2 No’s – Rs. 3,000", total: "Rs. 9,000" },
    { model: "SA022 – 100", modelPrice: "Rs. 9,000", speaker: "8” / 40W 3-Way × 2 No’s – Rs. 8,500", total: "Rs. 17,500" },
    { model: "SA022 – 100", modelPrice: "Rs. 9,000", speaker: "8” / 40W 2-Way × 2 No’s – Rs. 4,500", total: "Rs. 13,500" },
    { model: "SA023 – 200", modelPrice: "Rs. 11,000", speaker: "8” / 100W × 2 No’s – Rs. 6,500", total: "Rs. 17,500" },
    { model: "SA023 – 200", modelPrice: "Rs. 11,000", speaker: "12” / 100W × 2 No’s – Rs. 8,500", total: "Rs. 19,500" }
  ];

  const subwooferPackages = [
    { model: "SA011 – 200", modelPrice: "Rs. 12,000", speaker: "—", sub: "12” SA12200 – Rs. 6,000", total: "Rs. 18,000" },
    { model: "SA011 – 200", modelPrice: "Rs. 12,000", speaker: "—", sub: "12” SD12200 – Rs. 7,500", total: "Rs. 19,500" },
    { model: "SA011 – 200", modelPrice: "Rs. 12,000", speaker: "—", sub: "12” SJ12300 – Rs. 10,000", total: "Rs. 22,000" },
    { model: "SA012 – 1600", modelPrice: "Rs. 24,000", speaker: "—", sub: "12” SJ12500 (2 No’s) – Rs. 22,000", total: "Rs. 46,000" },
    { model: "SA012 – 1600", modelPrice: "Rs. 24,000", speaker: "—", sub: "15” SA15500 – Rs. 18,000", total: "Rs. 42,000" }
  ];

  const homeTheaterPackages = [
    { model: "SA031 – 80", modelPrice: "Rs. 8,500", speaker: "4” / 10W × 2 No’s – Rs. 2,000", sub: "8” SA08280 – Rs. 4,000", total: "Rs. 14,500" },
    { model: "SA031 – 80", modelPrice: "Rs. 8,500", speaker: "4” / 10W × 2 No’s – Rs. 2,000", sub: "8” SD08250 – Rs. 5,000", total: "Rs. 15,500" },
    { model: "SA031 – 80", modelPrice: "Rs. 8,500", speaker: "4” / 10W × 2 No’s – Rs. 2,000", sub: "10” SA10250 – Rs. 5,000", total: "Rs. 15,500" },
    { model: "SA031 – 80", modelPrice: "Rs. 8,500", speaker: "4” / 10W × 2 No’s – Rs. 2,000", sub: "10” SD10250 – Rs. 6,000", total: "Rs. 16,500" },
    { model: "SA032 – 300", modelPrice: "Rs. 12,000", speaker: "8” / 40W × 2 No’s – Rs. 5,000", sub: "12” SD12200 – Rs. 7,500", total: "Rs. 24,500" },
    { model: "SA032 – 300", modelPrice: "Rs. 12,000", speaker: "8” / 40W × 2 No’s – Rs. 5,000", sub: "12” SJ12300 – Rs. 10,000", total: "Rs. 27,000" }
  ];

  const homeTheaterPackages51 = [
    { model: "SA061 – 120", modelPrice: "Rs. 10,000", speaker: "4” / 10W × 5 No’s – Rs. 5,500", sub: "8” SA08280 – Rs. 4,000", total: "Rs. 19,500" },
    { model: "SA061 – 120", modelPrice: "Rs. 10,000", speaker: "4” / 10W × 5 No’s – Rs. 5,500", sub: "8” SD08250 – Rs. 5,000", total: "Rs. 20,500" },
    { model: "SA061 – 120", modelPrice: "Rs. 10,000", speaker: "4” / 10W × 5 No’s – Rs. 5,500", sub: "10” SA10250 – Rs. 5,000", total: "Rs. 20,500" },
    { model: "SA061 – 120", modelPrice: "Rs. 10,000", speaker: "4” / 10W × 5 No’s – Rs. 5,500", sub: "10” SD10250 – Rs. 6,000", total: "Rs. 21,500" }
  ];

  const homeTheaterPackagesDigital51 = [
    { model: "SD061", power: "170", ampPrice: "Rs. 18,000", speaker: "4” / 10W × 5 Nos", speakerPrice: "Rs. 5,500", sub: "10” SA 10250", subPrice: "Rs. 5,000", total: "Rs. 28,500" },
    { model: "SD061", power: "170", ampPrice: "Rs. 18,000", speaker: "4” / 10W × 5 Nos", speakerPrice: "Rs. 5,500", sub: "10” SD 10250", subPrice: "Rs. 6,000", total: "Rs. 29,500" },
    { model: "SD062", power: "300", ampPrice: "Rs. 20,500", speaker: "8” / 20W × 5 Nos", speakerPrice: "Rs. 10,500", sub: "12” SD 12200", subPrice: "Rs. 7,500", total: "Rs. 38,500" },
    { model: "SD062", power: "300", ampPrice: "Rs. 20,500", speaker: "8” / 20W × 5 Nos", speakerPrice: "Rs. 10,500", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 41,000" },
    { model: "SD063", power: "350", ampPrice: "Rs. 24,000", speaker: "8” / 40W × 5 Nos", speakerPrice: "Rs. 11,000", sub: "12” SD 12200", subPrice: "Rs. 7,500", total: "Rs. 42,500" },
    { model: "SD063", power: "350", ampPrice: "Rs. 24,000", speaker: "8” / 40W × 5 Nos", speakerPrice: "Rs. 11,000", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 45,000" },
    { model: "SD064", power: "470", ampPrice: "Rs. 28,000", speaker: "4” / 10W × 5 Nos", speakerPrice: "Rs. 5,500", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 43,500" },
    { model: "SD065", power: "550", ampPrice: "Rs. 30,000", speaker: "8” / 40W × 5 Nos", speakerPrice: "Rs. 11,000", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 51,000" }
  ];

  const homeTheaterPackagesAtmos = [
    { model: "SD066", power: "350R", ampPrice: "Rs. 42,000", speaker: "8” / 40W × 5 Nos", speakerPrice: "Rs. 11,000", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 63,000" },
    { model: "SD067", power: "470LR", ampPrice: "Rs. 44,500", speaker: "4” / 10W × 5 Nos", speakerPrice: "Rs. 5,500", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 60,000" },
    { model: "SD067", power: "550R", ampPrice: "Rs. 48,000", speaker: "8” / 40W × 5 Nos", speakerPrice: "Rs. 11,000", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 69,000" }
  ];

  const ultimateAVRSystems = [
    { config: "7.1 Channel", model: "SD081 – 600R", modelPrice: "Rs. 60,000", speaker: "8” / 40W × 7 Nos", speakerPrice: "Rs. 14,500", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 84,500" },
    { config: "9.1 Dolby Atmos", model: "SD101 – 850R", modelPrice: "Rs. 1,80,000", speaker: "8” / 40W × 9 Nos", speakerPrice: "Rs. 18,000", sub: "12” SJ 12300", subPrice: "Rs. 10,000", total: "Rs. 2,08,000" },
    { config: "11.2 Dolby Atmos", model: "SD121 – 850R", modelPrice: "Rs. 2,10,000", speaker: "8” / 40W × 11 Nos", speakerPrice: "Rs. 22,000", sub: "12” SJ 12300 / 2 No's", subPrice: "Rs. 19,500", total: "Rs. 2,51,500" },
    { config: "13.2 Dolby Atmos", model: "SD141 – 950R", modelPrice: "Rs. 3,30,000", speaker: "8” / 40W × 13 Nos", speakerPrice: "Rs. 25,500", sub: "12” SJ 12300 / 2 No's", subPrice: "Rs. 19,500", total: "Rs. 3,75,000" }
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
              <span>susilitirjpm@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white'
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
                  SUSIL ELECTRONICS & I.T.I
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
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${activeMenu === item.id
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
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 ${activeMenu === item.id
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
          <div className="relative bg-white overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                  <div className="sm:text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
                      <Award className="w-5 h-5" />
                      <span>Government Recognized Institution</span>
                    </div>
                    <h2 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-7xl">
                      <span className="block">Building Careers in</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        Modern Electronics
                      </span>
                    </h2>
                    <p className="mt-6 text-base text-slate-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 leading-relaxed font-light">
                      Join SUSIL ELECTRONICS & I.T.I, Rajapalayam's premier destination for technical excellence.
                      We provide the skills, certification, and industry connections you need to excel
                      in the fast-paced world of electronics.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                      <button
                        onClick={() => setActiveMenu('electronics')}
                        className="flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:px-12 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-200"
                      >
                        Explore Courses
                      </button>
                      <button className="flex items-center justify-center px-10 py-4 border-2 border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:px-12 transition-all duration-300">
                        Contact Us
                      </button>
                    </div>

                    <div className="mt-12 flex items-center space-x-8 text-slate-400 border-t border-slate-100 pt-8">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-slate-900">25+</span>
                        <span className="text-xs uppercase tracking-wider font-semibold">Years Excellence</span>
                      </div>
                      <div className="w-px h-8 bg-slate-200"></div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-slate-900">100%</span>
                        <span className="text-xs uppercase tracking-wider font-semibold">Job Support</span>
                      </div>
                      <div className="w-px h-8 bg-slate-200"></div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-slate-900">1000+</span>
                        <span className="text-xs uppercase tracking-wider font-semibold">Alumni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={`${process.env.PUBLIC_URL}/hero-bg.png`}
                alt="SUSIL I.T.I Campus Building"
              />
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Why Choose SUSIL ELECTRONICS & I.T.I ?</h3>
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

      {/* Other sections */}
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

      {/* Assembled Products Section */}
      {activeMenu === 'products' && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Premium Hero Section */}
            <div className="text-center mb-16 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              <div className="inline-flex items-center space-x-2 px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                <Sparkles className="w-5 h-5" />
                <span>Susil Premium Audio Labs</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                Assembled <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Products</span>
              </h2>
            </div>

            {/* Unified Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 bg-white"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <img
                      src={`${process.env.PUBLIC_URL}/products/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-slate-50 flex flex-col gap-2">
                    <h3 className="text-sm font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] leading-tight group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-end">
                      <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all scale-90 group-hover:scale-100">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {activeMenu === 'service' && (
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide mb-4">
                <ShoppingCart className="w-5 h-5" />
                <span>Susil Showroom</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Showroom Price List – 2026</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Premium LED TVs and power solutions at factory-direct prices. Professional installation and lifetime support guaranteed.
              </p>
            </div>

            {/* LED TV Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-blue-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">LED TV Solutions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showroomPrices.tvs.map((group, idx) => (
                  <div key={idx} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                        {group.icon}
                      </div>
                      <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase">{group.category}</h4>
                    </div>
                    <div className="space-y-4">
                      {group.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 group-hover:border-blue-100 transition-colors">
                          <span className="text-slate-700 font-bold">{item.size}</span>
                          <span className="text-blue-600 font-black text-lg">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stabilizer Section */}
            <div>
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-amber-500 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Stabilizer Solutions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showroomPrices.stabilizers.map((group, idx) => (
                  <div key={idx} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                        {group.icon}
                      </div>
                      <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase">{group.category}</h4>
                    </div>
                    <div className="space-y-4">
                      {group.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 group-hover:border-orange-100 transition-colors">
                          <span className="text-slate-700 font-bold">{item.size}</span>
                          <span className="text-orange-600 font-black text-lg">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audio System Packages Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-indigo-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Audio System Packages</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model Price</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Speakers Configuration</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider text-right">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {audioPackages.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                          <td className="px-8 py-6">
                            <span className="font-black text-slate-900 group-hover:text-blue-600 transition-colors">{pkg.model}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 font-bold">{pkg.modelPrice}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 italic">{pkg.speaker}</span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-2xl font-black text-blue-600">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sub-woofer System Packages Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-purple-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Sub-woofer System Packages</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model Price</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Sub-Woofer Detail</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider text-right">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {subwooferPackages.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-purple-50/50 transition-colors group">
                          <td className="px-8 py-6">
                            <span className="font-black text-slate-900 group-hover:text-purple-600 transition-colors">{pkg.model}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 font-bold">{pkg.modelPrice}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 italic">{pkg.sub}</span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-2xl font-black text-purple-600">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Home Theater Packages Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-rose-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Home Theater System Packages 2.1 CHANNEL HOME DTS</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model Price</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Speakers</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Sub-Woofer</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider text-right">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {homeTheaterPackages.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-rose-50/50 transition-colors group">
                          <td className="px-8 py-6">
                            <span className="font-black text-slate-900 group-hover:text-rose-600 transition-colors">{pkg.model}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 font-bold">{pkg.modelPrice}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 text-sm">{pkg.speaker}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 italic text-sm">{pkg.sub}</span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-2xl font-black text-rose-600">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Home Theater Packages 5.1 Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-emerald-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Home Theater System Packages 5.1 CHANNEL ANALOG HOME DTS</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Model Price</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Speakers (5 No's)</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider">Sub-Woofer</th>
                        <th className="px-8 py-6 font-black uppercase tracking-wider text-right">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {homeTheaterPackages51.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-emerald-50/50 transition-colors group">
                          <td className="px-8 py-6">
                            <span className="font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{pkg.model}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 font-bold">{pkg.modelPrice}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 text-sm">{pkg.speaker}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-slate-600 italic text-sm">{pkg.sub}</span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-2xl font-black text-emerald-600">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Home Theater Packages Digital 5.1 Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-blue-700 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Home Theater System Packages 5.1 CHANNEL DIGITAL DOLBY HOME DTS</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Model/Power</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Amp Price</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Speakers</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Spk Price</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Sub-Woofer</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Sub Price</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {homeTheaterPackagesDigital51.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                          <td className="px-6 py-5">
                            <div className="font-black text-slate-900 group-hover:text-blue-700">{pkg.model}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{pkg.power} Watts</div>
                          </td>
                          <td className="px-6 py-5 text-slate-600 font-bold text-sm whitespace-nowrap">{pkg.ampPrice}</td>
                          <td className="px-6 py-5 text-slate-600 text-[11px] leading-tight font-medium">{pkg.speaker}</td>
                          <td className="px-6 py-5 text-slate-600 font-bold text-sm whitespace-nowrap">{pkg.speakerPrice}</td>
                          <td className="px-6 py-5 text-slate-600 text-[11px] italic font-medium">{pkg.sub}</td>
                          <td className="px-6 py-5 text-slate-600 font-bold text-sm whitespace-nowrap">{pkg.subPrice}</td>
                          <td className="px-6 py-5 text-right">
                            <span className="text-xl font-black text-blue-700 whitespace-nowrap">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Home Theater Packages Atmos Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-indigo-900 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Home Theater System Packages 5.1 Channel Digital Cinema Theatre – Dolby Home DTS</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Model/Power</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Amp Price</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Speakers</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Spk Price</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Sub-Woofer</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs">Sub Price</th>
                        <th className="px-6 py-5 font-black uppercase tracking-wider text-xs text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {homeTheaterPackagesAtmos.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-indigo-50/50 transition-colors group">
                          <td className="px-6 py-5">
                            <div className="font-black text-slate-900 group-hover:text-indigo-900">{pkg.model}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{pkg.power} Specs</div>
                          </td>
                          <td className="px-6 py-5 text-slate-600 font-bold text-sm whitespace-nowrap">{pkg.ampPrice}</td>
                          <td className="px-6 py-5 text-slate-600 text-[11px] leading-tight font-medium">{pkg.speaker}</td>
                          <td className="px-6 py-5 text-slate-600 font-bold text-sm whitespace-nowrap">{pkg.speakerPrice}</td>
                          <td className="px-6 py-5 text-slate-600 text-[11px] italic font-medium">{pkg.sub}</td>
                          <td className="px-6 py-5 text-slate-600 font-bold text-sm whitespace-nowrap">{pkg.subPrice}</td>
                          <td className="px-6 py-5 text-right">
                            <span className="text-xl font-black text-indigo-900 whitespace-nowrap">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Ultimate AVR Systems Section */}
            <div className="mb-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-12 w-2 bg-amber-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-slate-900">Ultimate Flagship AVR Dolby Atmos Systems</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-[2.5rem] border-2 border-amber-100 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <div className="overflow-x-auto relative z-10">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-900 to-amber-950 text-white">
                        <th className="px-6 py-6 font-black uppercase tracking-wider text-xs">Configuration</th>
                        <th className="px-6 py-6 font-black uppercase tracking-wider text-xs">Model / AVR Price</th>
                        <th className="px-6 py-6 font-black uppercase tracking-wider text-xs">Speakers Detail</th>
                        <th className="px-6 py-6 font-black uppercase tracking-wider text-xs">Subwoofer Detail</th>
                        <th className="px-6 py-6 font-black uppercase tracking-wider text-xs text-right">Ultimate Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-50">
                      {ultimateAVRSystems.map((pkg, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/30 transition-colors group">
                          <td className="px-6 py-6">
                            <span className="font-black text-amber-700">{pkg.config}</span>
                          </td>
                          <td className="px-6 py-6">
                            <div className="font-black text-slate-900">{pkg.model}</div>
                            <div className="text-sm font-bold text-amber-600">{pkg.modelPrice}</div>
                          </td>
                          <td className="px-6 py-6 text-slate-600 text-sm font-medium">
                            <div>{pkg.speaker}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{pkg.speakerPrice}</div>
                          </td>
                          <td className="px-6 py-6 text-slate-600 text-sm italic">
                            <div>{pkg.sub}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{pkg.subPrice}</div>
                          </td>
                          <td className="px-6 py-6 text-right">
                            <span className="text-2xl font-black text-amber-700 drop-shadow-sm">{pkg.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-20 p-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] text-white overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
                  <p className="text-blue-100 text-lg opacity-80">We offer specialized sales and service for all electronic appliances.</p>
                </div>
                <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-black hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap">
                  Contact Sales Team
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'gallery' && (
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide mb-4">
                <Image className="w-5 h-5" />
                <span>Our Gallery</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Visual Journey</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Explore our campus, labs, and the vibrant life at SUSIL I.T.I.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(`/gallery/${img}`)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-slate-100 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <img
                      src={`${process.env.PUBLIC_URL}/gallery/${img}`}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white w-full max-w-6xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 bg-slate-50 p-8 md:p-12 flex items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/products/${selectedProduct.image}`}
                alt={selectedProduct.name}
                className="max-w-full max-h-[50vh] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">{selectedProduct.name}</h2>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">In Stock</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 mb-8 flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Enquire Now</span>
                </button>
              </div>

              {/* Tabs Section for Specs */}
              <div>
                <div className="border-b border-slate-200 mb-6">
                  <div className="flex space-x-8">
                    <button className="pb-4 border-b-2 border-blue-600 text-blue-600 font-bold">
                      {selectedProduct.specs ? "Specifications" : "Description"}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedProduct.specs ? (
                    <table className="w-full text-left">
                      <tbody>
                        {Object.entries(selectedProduct.specs).map(([key, value], idx) => (
                          <tr key={idx} className="border-b border-slate-100 last:border-0">
                            <td className="py-3 text-slate-500 font-medium w-1/3">{key}</td>
                            <td className="py-3 text-slate-900 font-semibold">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed text-sm">
                      {selectedProduct.description || "Detailed specifications coming soon..."}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">SUSIL ELECTRONICS & I.T.I</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering the next generation of skilled electronics technicians through quality education and practical training.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => { setActiveMenu('home'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => { setActiveMenu('home'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Admissions</button></li>
                <li><button onClick={() => setActiveMenu('electronics')} className="hover:text-white transition-colors">Courses</button></li>
                <li><button onClick={() => { setActiveMenu('home'); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Contact</button></li>
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
            <p>&copy; 2026 SUSIL ELECTRONICS & I.T.I - Run by R.M Charitable Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
