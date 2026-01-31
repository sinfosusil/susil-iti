import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Sparkles, Phone, Mail, MapPin, Award, Users, BookOpen, Wrench, Cpu, Settings, GraduationCap, Monitor, BatteryCharging, Image } from 'lucide-react';

function App() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [supportCategory, setSupportCategory] = useState('Our Brand');

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

  const handleWhatsAppEnquiry = (productName) => {
    const message = `I am interested in ${productName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919566516737?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'electronics', label: 'Institute for Electronics', icon: <Cpu className="w-5 h-5" /> },
    { id: 'research', label: 'Research and Development', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'products', label: 'Our Brand', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'authorized', label: 'Authorized Brands', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'service', label: 'Price List', icon: <Settings className="w-5 h-5" /> },
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
    {
      id: 's17', name: 'Amplifier System',
      description: `Immersive Audio Excellence: Experience the pinnacle of sound engineering with Susil Professional Amplifier Systems. Designed for audiophiles and professional setups, our amplifiers bridge the gap between raw power and delicate musicality, delivering clarity, depth, and punch.

Engineering Sound Perfection:
• Multi-Channel Surround Sound: Advanced decoding for Dolby Surround and DTS Digital Sound for 360-degree immersion.
• Precision Equalization: Integrated multi-band equalizers with dedicated knobs for bass, treble, and mid-range adjustments.
• High-Fidelity Components: Premium capacitors and heavy-duty transformers ensure minimal distortion even at high volumes.
• Versatile Connectivity: Bluetooth, USB, SD Card slots, and traditional RCA inputs for DVD/CD players or TVs.
• Visual Monitoring: Integrated LED Level Meters provide real-time visual feedback of your audio output.

The Susil Lineup:
Series include Compact Stereo (small rooms), Home Theater (cinematic movies/gaming), and Professional PA (large halls/events).

Pro-Tip:
Amplifiers are high-current devices sensitive to voltage fluctuations. Sags can cause audio to "clip" (blowing tweeters), while surges can destroy processing chips. To ensure absolute silence and longevity, we recommend the SUSIL IS-200 Isolated Stabilizer. It eliminates the "60Hz hum" and ensures harmonic purity by isolating your system from grid distortion.`,
      image: 's (17).jpg', price: 'Rs. 22,000', category: 'assembled'
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
      image: 's (2).jpeg', price: 'Rs. 4,500', category: 'assembled' // specs removed
    },
    {
      id: 's3', name: '2 Way Woofer',
      description: `Experience powerful sound in a compact design with the SUSIL 2-Way Woofer Speaker Box. This speaker features a high-performance woofer for deep bass and a tweeter for clear high frequencies, delivering balanced and rich audio output.

Key Features:
• 2-Way Speaker System – Separate woofer and tweeter for full-range sound
• Deep Bass Output – Strong low-frequency performance
• Clear Treble – Sharp, distortion-free highs
• Heavy-Duty Metal Grill – Protects the woofer from damage
• Premium Carpet Finish Cabinet – Reduces vibration and enhances sound quality
• Compact & Stylish Design – Perfect for home, shop, car audio & DIY systems

Ideal For:
• Home audio systems
• Shop & office sound setups
• Car audio enclosures
• Custom 2.1 / PA speaker systems

SUSIL 2-Way Woofer delivers powerful performance, durability, and premium sound — all in one compact speaker box.`,
      image: 's (3).jpeg', price: 'Rs. 6,800', category: 'assembled'
    },
    {
      id: 's4', name: '3 Way Woofer',
      description: `Powerful Bass • Clear Vocals • Sharp Highs

Upgrade your sound system with the SUSIL 3-Way Woofer Speaker Box, designed to deliver rich, room-filling audio with powerful bass, clear midrange, and crisp high frequencies. Built with a strong cabinet and premium drivers, this speaker is perfect for homes, shops, parties, and professional audio setups.

Key Features:
• 3-Way Speaker System – Dedicated woofer, mid-range driver, and tweeter for full-range, balanced sound.
• Deep Bass Performance – Large high-power woofer produces strong, punchy low frequencies.
• Clear Mids & Crisp Highs – Separate mid and tweeter drivers ensure clean vocals and sharp treble.
• Dual Front Bass Ports – Enhances bass output and reduces air distortion.
• Heavy-Duty Metal Grills – Protects all speakers while giving a professional look.
• Premium Carpet-Finish Cabinet – Reduces vibration and improves sound clarity.
• Stable Anti-Slip Feet – Prevents movement and unwanted resonance.

Ideal For:
• Home audio systems
• DJ & party setups
• Shops, offices & showrooms
• Small PA systems
• Custom audio projects

Why Choose SUSIL?
SUSIL speakers are built for power, clarity, and long-lasting performance. This 3-way woofer delivers premium sound in a rugged, stylish enclosure—perfect for anyone who wants big sound in a compact design.`,
      image: 's (4).jpeg', price: 'Rs. 8,500', category: 'assembled'
    },
    {
      id: 's5', name: '3 Way Tower Speakers',
      description: `Powerful Bass • Clear Vocals • Premium Design

Fill your space with rich, powerful sound using the SUSIL 3-Way Tower Speaker. Designed with a vertical tower structure and multiple high-performance drivers, this speaker delivers deep bass, clear mids, and crisp highs—perfect for home, shop, and party audio systems.

Key Features:
• 3-Way Tower Speaker System – Triple driver setup with dedicated woofer, mid-range, and tweeter for full-range sound.
• Deep & Punchy Bass – High-power woofers provide strong low-frequency impact.
• Clear Midrange & Crisp Highs – Balanced sound for vocals, instruments, and movies.
• Front Bass Reflex Port – Enhances low-end performance and reduces distortion.
• Heavy Metal Honeycomb Grills – Protects all drivers and gives a premium professional look.
• Premium Carpet Finish Cabinet – Minimizes vibration and improves sound clarity.
• Tall & Space-Saving Design – Vertical tower form saves floor space while delivering powerful output.

Ideal For:
• Home theater systems
• DJ & party setups
• Shops & showrooms
• Small PA systems

Why Choose SUSIL?
SUSIL tower speakers combine power, clarity, durability, and style. This 3-way tower speaker delivers immersive sound with strong bass and elegant design—perfect for any premium audio setup.`,
      image: 's (5).jpeg', price: 'Rs. 12,000', category: 'assembled'
    },
    {
      id: 's15', name: 'Subwoofer Amplifier',
      description: `Deep Bass • Clean Power • Total Control

Experience powerful low-frequency sound with the SUSIL Dolby Digital Subwoofer Power Amplifier, designed to drive subwoofers with clarity, control, and punch. Perfect for home theaters, DJ setups, and custom audio systems, this amplifier delivers strong, distortion-free bass with easy front-panel controls.

Key Features:
• Dolby Digital Audio Support – Enhanced audio processing for clear, powerful bass output.
• Dedicated Subwoofer Controls – Includes Sub-Bass adjustment, Sub-Frequency control, and Master Volume settings.
• High-Power Output – Drives subwoofers with clean, stable performance.
• Front LED Power Indicator – Easy status monitoring at a glance.
• Heavy Metal Body – Durable black chassis with premium finish for long-lasting use.
• Anti-Vibration Feet – Ensures stable placement and reduces noise.

Ideal For:
• Home theater subwoofer systems
• DJ & party sound setups
• Custom 2.1 / 5.1 audio systems
• Professional audio applications

Why Choose SUSIL?
SUSIL amplifiers are built for reliability, power, and performance. This subwoofer amplifier delivers deep, controlled bass and simple operation in a strong, professional design.`,
      image: 's (15).jpeg', price: 'Rs. 7,500', category: 'assembled'
    },
    {
      id: 's16', name: 'Dolby Atmos Pre Amplifier',
      description: `Immersive 3D Sound • Precision Control • Premium Design

Step into cinematic sound with the SUSIL Dolby Atmos Pre-Amplifier, engineered to deliver breathtaking 3D audio with crystal clarity and full control. Designed for high-end home theaters and professional audio setups, this preamp brings out every detail with powerful processing and elegant styling.

Key Features:
• Dolby Atmos Surround Processing – Creates a true 3D soundstage for a cinema-like audio experience.
• High-Precision Audio Circuitry – Low noise, low distortion signal processing for studio-quality sound.
• Large Front Display Panel – Shows volume, input mode, and sound status clearly.
• Dual Premium Control Knobs – Smooth, accurate control for volume, inputs, and tuning.
• Multi-Input Compatibility – Supports Blu-ray players, TVs, media players, set-top boxes, and more.
• Elegant Metal Front Panel – Sleek, modern design that matches premium home theater systems.
• High-Quality Audio Output – Clean signal output to connect with power amplifiers and active speakers.

Ideal For:
• Home theater systems
• Dolby Atmos surround setups
• Professional audio racks
• Premium entertainment rooms

Why Choose SUSIL?
SUSIL delivers cinema-grade performance, modern design, and reliable audio engineering. This Dolby Atmos Pre-Amplifier is the perfect heart of your high-end sound system.`,
      image: 's (16).jpeg', price: 'Rs. 18,500', category: 'assembled'
    },
    {
      id: 'a1', name: 'Slope Speaker',
      description: `Directional Sound • Deep Bass • Compact Design

The SUSIL Slope Speaker is specially designed with an angled cabinet to project sound in the right direction. It delivers powerful bass, clear vocals, and crisp highs, making it perfect for stage monitoring, DJ setups, shops, and home audio systems.

Key Features:
• Angled Slope Cabinet – Designed to direct sound upward for better listening and monitoring.
• 2-Way Speaker System – Built with a woofer and tweeter for balanced, full-range audio.
• Deep Bass Performance – Strong low-frequency output in a compact enclosure.
• Clear Mid & High Frequencies – Sharp vocals and detailed treble.
• Dual Bass Reflex Ports – Improves airflow and enhances bass response.
• Heavy-Duty Metal Grill – Protects the speaker from impact and dust.
• Durable Carpet-Finish Cabinet – Reduces vibration and improves sound clarity.

Ideal For:
• Stage monitor speakers
• DJ & live performance setups
• Shops & showrooms
• Home audio systems
• PA systems

Why Choose SUSIL?
SUSIL slope speakers are built for clarity, power, and durability. The angled design ensures the sound reaches you directly, making it the perfect choice for monitoring and focused audio environments.`,
      image: 's (6).jpeg', price: 'Rs. 5,500', category: 'assembled'
    },
    {
      id: 'a2', name: 'Subwoofer',
      description: `Nobal Audio Ported Subwoofer

Enhance your audio experience with this robust Nobal Audio subwoofer, designed for deep, resonant bass that brings music, movies, and games to life. Encased in a durable gray carpeted enclosure, this compact unit features a prominent round perforated metal grille protecting the high-performance woofer with a vibrant red cone for optimal sound projection. The dual bass reflex ports at the base ensure efficient airflow, delivering powerful low-frequency response with minimal distortion.

Key Features:
• Design: Sleek, carpeted box construction for easy integration into car audio systems, home theaters, or custom setups.
• Woofer: Single large-diameter driver for punchy bass.
• Ports: Twin tuned ports to amplify low-end frequencies and improve overall efficiency.
• Build Quality: Sturdy materials with a professional finish, ideal for both enthusiasts and everyday users.
• Connectivity: Standard speaker terminals for seamless hookup to amplifiers.

Perfect for upgrading your sound system without taking up too much space. Whether you're a bass lover or seeking immersive audio, this Nobal Audio subwoofer delivers reliable performance at an affordable price. Contact us for specifications, pricing, or customization options!`,
      image: 's (7).jpeg', price: 'Rs. 6,200', category: 'assembled'
    },
    {
      id: 'a3', name: 'Stereo Player',
      description: `Boost your audio setup with the SUSIL SA0521-100, a compact stereo player engineered for versatile music playback and customizable sound. This all-in-one unit features a sleek black chassis with gold branding, integrating a 3-band equalizer for precise audio tuning. Ideal for car dashboards, home entertainment, or portable rigs, it offers multi-source connectivity and intuitive controls to deliver clear, balanced sound for music enthusiasts on a budget.

Key Features:
• Model: SA0521-100
• Design: Durable black panel with ergonomic knobs and a central master volume for easy adjustments.
• Connectivity: USB port for flash drives, microSD card slot, built-in FM radio tuner, and Bluetooth for wireless streaming from devices.
• Equalizer: 3-band EQ (Bass, Voice/Mid, Treble) with dedicated knobs for left and right channels, allowing independent customization of sound profiles.
• Controls: Power ON/OFF switch with LED indicator, master volume knob, and channel-specific volume, bass, voice, and treble adjustments.
• Display: Bright red LED screen displaying mode, track info, or frequency.
• Versatility: Supports music playback, radio, and hands-free calls via Bluetooth; compact size for seamless installation in vehicles or desktops.

Reliable and affordable, the SUSIL SA0521-100 transforms ordinary listening into an immersive experience. Inquire for full specs, compatibility, pricing, or bundle deals!`,
      image: 's (8).jpeg', price: 'Rs. 4,800', category: 'assembled'
    },
    {
      id: 'a4', name: '12v Car Player',
      description: `Elevate your audio setup with the SUSIL 4.1 Channel Auto DTS Amplifier, a versatile stereo player perfect for car installations, home theaters, or portable sound systems. This compact unit combines multi-channel amplification with modern connectivity options, delivering immersive surround sound with dedicated controls for fine-tuning your listening experience. Featuring a sleek black panel with intuitive knobs and a bright LED display, it's designed for easy operation and seamless integration into any environment.

Key Features:
• Channels: 4.1 configuration for front left/right, surround left/right, and subwoofer output, supporting DTS audio for cinematic depth.
• Connectivity: Bluetooth for wireless streaming, USB port, microSD card slot, AUX input, and built-in FM radio tuner.
• Controls: Individual volume knobs for FL VOL, FR VOL, SL VOL, SR VOL, SUB VOL, and SUB BASS, plus a MASTER VOL for overall adjustment. Additional buttons include VOL-, SCAN, VOL+, and MODE for effortless navigation.
• Display: Digital LED screen showing mode, frequency, or track info.
• Build: Durable construction with a power ON/OFF switch and Bluetooth ID: GEESTAR for reliable pairing.
• Versatility: Ideal for enhancing music, movies, or calls in vehicles or at home, with auto DTS processing for superior sound quality.

Compact, powerful, and user-friendly, the SUSIL SA0051-7312V model is your go-to solution for high-fidelity audio on a budget. Reach out for detailed specs, pricing, or pairing recommendations!`,
      image: 's (9).jpeg', price: 'Rs. 3,500', category: 'assembled'
    },
    {
      id: 'a5', name: '24v Bus Player',
      description: `Power up your vehicle's audio system with the SUSIL SA021-30/24V, a robust 24V stereo player tailored for buses, trucks, or heavy-duty installations. This compact unit boasts a sleek black finish with gold accents, offering multi-source playback and adjustable sound controls for crystal-clear audio on the go. Whether for public transport entertainment or long-haul journeys, it delivers reliable performance with easy-to-use features to keep passengers engaged.

Key Features:
• Power Supply: 24V operation, ideal for commercial vehicles like buses and trucks.
• Connectivity: USB port for MP3 playback, FM radio tuner, Bluetooth for wireless streaming, and auxiliary inputs.
• Controls: Master volume knob, separate left/right volume adjustments, bass, and treble knobs for customized sound balancing.
• Display: Digital LED screen showing mode, track, or frequency information.
• Inputs/Outputs: SP-IN and SP-EXT ports for speaker connections, plus a power ON/OFF switch with LED indicator.
• Build: Durable construction suited for rugged environments, with a focus on simplicity and efficiency.

Affordable and versatile, the SUSIL 24V Stereo USB Player is perfect for upgrading fleet audio without complexity. Get in touch for specs, pricing, or installation tips!`,
      image: 's (10).jpeg', price: 'Rs. 8,500', category: 'assembled'
    },
    {
      id: 'a6', name: 'Digital 5.1 Home DTS',
      description: `Transform your home entertainment with the SUSIL Model 1000-5.1/2V, a powerful digital surround amplifier designed for immersive 5.1 channel audio. This sleek black unit features HD digital processing and DTS sound technology, perfect for home theaters, music systems, or multimedia setups. With intuitive controls and multiple connectivity options, it delivers crystal-clear, multi-dimensional sound that elevates movies, games, and tunes. In stock and ready to ship!

Key Features:
• Channels: 5.1 surround configuration with dedicated volume controls for front left/right, surround left/right, and subwoofer.
• Connectivity: USB port, microSD card slot, FM radio tuner, Bluetooth for wireless streaming, and auxiliary inputs.
• Controls: Master volume knob, individual channel adjustments (FL VOL, FR VOL, SL VOL, SR VOL, SUB VOL), power ON/OFF with LED indicator, and mode selectors.
• Display: Integrated digital display for mode, frequency, or track information.
• Build: Compact, durable design with a glossy black finish, suitable for tabletop or rack mounting.
• Versatility: Supports DTS decoding for high-fidelity audio, ideal for home use with easy setup.

Upgrade your sound system today with this affordable, feature-packed amplifier. Contact us for specs, pricing, or compatibility details!`,
      image: 's (11).jpeg', price: 'Rs. 15,500', category: 'assembled'
    },
    {
      id: 'a7', name: 'Digital 5.1 Home Cinema Théâtre DTS',
      description: `Immerse yourself in cinematic audio with the SUSIL Model 5005-250P, a high-performance digital 5.1 surround sound amplifier crafted for home cinema and theater setups. This sleek black unit integrates DTS technology for rich, multi-channel sound, featuring a glossy finish with gold branding and precise controls to customize your listening experience. Perfect for movies, music, or gaming, it brings professional-grade audio to your living room with easy connectivity and robust build quality.

Key Features:
• Channels: 5.1 configuration including front left/right, center, surround left/right, and subwoofer for true surround sound.
• Connectivity: USB port, FM radio tuner, Bluetooth for wireless streaming, and auxiliary inputs to connect various devices.
• Controls: Dedicated knobs for FL VOL, FR VOL, CEN VOL, SL VOL, SR VOL, SUB VOL, plus a master volume for balanced audio tuning.
• Display: Bright digital LED screen displaying mode, track, or frequency details.
• Build: Compact and durable design with power ON/OFF switch and LED indicators, ideal for home entertainment systems.
• Versatility: Supports DTS decoding for enhanced clarity and depth, suitable for integration with TVs, projectors, or speakers.

Elevate your home audio with this affordable, feature-rich amplifier. Inquire for specifications, pricing, or setup guidance!`,
      image: 's (12).jpeg', price: 'Rs. 18,000', category: 'assembled'
    },
    {
      id: 'a8', name: 'Digital 5.1 Home Cinema Theatre DTS with LED Level indicators',
      description: `Dive into a world of cinematic sound with the SUSIL FM-1800 Bluetooth, a sophisticated digital 5.1 channel amplifier engineered for home cinema and theater enthusiasts. Featuring DTS surround processing and eye-catching LED level indicators that visualize audio dynamics in real-time, this unit delivers powerful, multi-dimensional audio with precise control. Its sleek black rack-mount design includes intuitive knobs and a central display, making it an ideal centerpiece for immersive entertainment setups.

Key Features:
• Channels: 5.1 DTS configuration for front, center, surround, and subwoofer channels, providing theater-quality surround sound.
• LED Indicators: Multi-bar audio level LEDs (green to red gradient) for dynamic visual feedback on sound intensity and balance.
• Connectivity: Bluetooth for wireless streaming, USB port, FM radio tuner, and auxiliary inputs for versatile media playback.
• Controls: Dedicated knobs for MASTER VOL, MIC VOL, ECHO, BASS, TREBLE, and more, plus buttons for mode selection and scanning.
• Display: Bright digital LED screen showing track info, frequency, or operational modes.
• Build: Robust, professional-grade construction with power switch and microphone inputs, suitable for home or event use.
• Versatility: Supports high-fidelity audio for movies, music, and calls, with real-time LED spectrum analysis for an engaging experience.

This feature-packed amplifier brings professional audio to your space at an accessible price. Reach out for detailed specifications, pricing, or integration advice!`,
      image: 's (13).jpeg', price: 'Rs. 21,500', category: 'assembled'
    },
    {
      id: 'a9', name: 'Digital Dolby Atmos 13.1 Channel Home DTS',
      description: `Experience unparalleled immersive audio with the SUSIL Model 501-13.1-500, a cutting-edge 13.1 channel power amplifier featuring Dolby Atmos and DTS technology for true three-dimensional sound. This professional-grade unit is designed for home cinema enthusiasts, delivering expansive surround sound with height channels that elevate movies, music, and games to new heights. Its sleek black chassis with multi-colored knobs and LED indicators offers precise control over every audio element, making it a powerhouse for custom home theater setups.

Key Features:
• Channels: Advanced 13.1 configuration including front, center, surround, subwoofer, and multiple height channels (front height, rear height, etc.) for full Dolby Atmos immersion.
• Technology: Integrated Dolby Digital Atmos and DTS decoding for high-resolution, spatial audio playback.
• Controls: Dedicated knobs for Front Left/Right, Center, Subwoofer, Surround Left/Right, Front Height Left/Right, Rear Height Left/Right, and master volume, plus switches for power and mode selection.
• Display: Built-in LED indicators for power and signal status.
• Build: Robust rack-mountable design with a glossy black finish, ideal for integration into AV systems.
• Versatility: Supports a wide range of inputs for seamless connectivity with Blu-ray players, gaming consoles, and streaming devices.

Bring cinema-quality sound to your home with this high-performance amplifier. Contact us for full specifications, pricing, or expert installation advice!`,
      image: 's (14).jpeg', price: 'Rs. 45,000', category: 'assembled'
    },
    {
      id: 'p18', name: 'Robot',
      description: `Precision in Motion: Advanced Robotics Solutions. Step into the future with our cutting-edge Robotics Solutions, designed to bridge the gap between human imagination and mechanical precision. Whether for industrial automation, healthcare assistance, or STEM education, our robots are engineered to perform complex tasks with tireless accuracy.

Core Capabilities:
• Autonomous Navigation: Uses LiDAR and computer vision to navigate safely in real-time.
• High-Precision Actuation: Robotic arms with advanced servo motors for micrometer-level accuracy.
• Intelligent Perception: Advanced sensors allow robots to "see" and "feel" for delicate tasks.
• Collaborative AI: "Cobots" designed to work safely alongside humans in hazardous workflows.

Industry Applications:
• Manufacturing: High-speed assembly, welding, and 24/7 quality inspection.
• Logistics: Autonomous warehouse sorting and heavy-pallet transportation.
• Healthcare: Minimally invasive surgery assistance and patient rehabilitation.
• Education: Hands-on STEM learning for coding, logic, and mechanical design.

Power Stability & Maintenance:
Robots are high-performance computers with sensitive sensors and motors. A voltage spike can fry motherboards, while a brownout can cause calibration loss. Using a SUSIL Isolated Stabilizer eliminates electrical noise and protects motor drivers from grid instability.`,
      image: 's (18).jpeg', price: 'Rs. 12,500', category: 'authorized'
    },
    {
      id: 'p19', name: 'Solar Panel',
      description: `Harness the Power of the Sun: Turn your rooftop into a private power station with our High-Performance Solar Panels. Designed to capture maximum sunlight, these panels are the cornerstone of a sustainable energy strategy for homes and businesses alike.

Key Performance Features:
• Advanced Cell Technology: High-purity silicon ensures superior electron flow even in low-light conditions.
• Weather-Resistant Durability: Heavy-duty anodized aluminum frame with tempered glass withstands hail and high winds.
• Low Degradation Rate: Engineered to maintain high output levels for 25+ years.
• Optimized Temp Coefficient: Stays efficient even in high-heat environments.

Specifications & Benefits:
• High Efficiency: Generates more power in a smaller footprint.
• Anti-Reflective Coating: Captures more light at various angles throughout the day.
• Bypass Diodes: Minimizes power drops caused by shade.

Building Your Solar Ecosystem:
A solar panel is only as good as the system supporting it. Create a robust setup by pairing with:
• SUSIL Solar MPPT Controller for peak energy harvesting.
• SUSIL Lithium Iron (LiFePO4) Battery for long-lasting storage.
• SUSIL IS-200 Isolated Stabilizer to protect sensitive appliances when switching between solar and grid power.`,
      image: 's (19).jpeg', price: 'Rs. 8,000', category: 'authorized'
    },
    {
      id: 'p20', name: 'Isolated Stablizer',
      description: `The SUSIL IS-200 is a compact, high-performance isolated voltage stabilizer engineered to protect your valuable home entertainment and security equipment from voltage fluctuations, surges, and electrical noise. Specially designed for sensitive electronics like LED TVs and CCTV systems, it provides a physical electrical barrier that significantly reduces the risk of damage from power spikes and ground loops.

Key Features:
• Isolation Technology: Provides a physical electrical barrier between the input power and your devices.
• Optimized for LED TVs & CCTV: Calibrated to handle delicate circuitry in smart TVs and surveillance DVRs/NVRs.
• Status Indicators: Features clear LED indicators for "Power" status and "Output" confirmation.
• Durable Design: Sleek, high-impact black chassis with heat-dissipation vents for long-term reliability.

Why Use an Isolated Stabilizer?
Standard stabilizers regulate voltage, but isolated stabilizers go a step further by using an internal transformer to "clean" the electricity. This is crucial for CCTV systems to prevent "rolling lines" on video feeds and for LED TVs to prevent motherboard burnout during lightning strikes or grid instability.`,
      image: 's (20).jpeg', price: 'Rs. 3,500', category: 'assembled'
    },
    {
      id: 'p21', name: 'Induction / IR Stove',
      description: `The Future of Cooking: Revolutionize your kitchen with the next generation of stovetop technology. Whether you choose the magnetic precision of Induction or the versatile heat of Infrared (IR), these cooktops offer a faster, safer, and more energy-efficient alternative to traditional gas stoves.

Induction vs. Infrared:
• Induction: Uses magnetic fields to heat the pan directly; ultra-fast and surface stays cool.
• Infrared (IR): Uses radiant coils to heat any heat-resistant cookware (Glass, Ceramic, Clay).

Key Highlights:
• Precision Temperature Control: Digital touch sensors for instant heat adjustment.
• Safety First: Auto-Pan Detection and Overheat Protection for peace of mind.
• Easy-Clean Glass Surface: Toughened ceramic glass wipes clean in seconds.
• Programmable Timers: Prevents overcooking or burnt meals.

Maximize Performance:
Modern stoves use sophisticated microprocessors sensitive to voltage spikes. To protect your investment and prevent error codes, we recommend using a heavy-duty SUSIL Isolated Stabilizer. This ensures "clean" electricity for the internal high-power IGBT circuits.

Smart Cooking Tips:
• Use cookware with a flat, smooth base for maximum heat transfer.
• Keep ventilation vents clear to allow the internal cooling fan to work efficiently.`,
      image: 's (21).jpeg', price: 'Rs. 4,200', category: 'authorized'
    },
    {
      id: 'p22', name: 'LED TV',
      description: `Experience cinematic immersion with the SUSIL Modern Ultra-Slim LED TV, featuring a near-borderless display and a sophisticated black finish that complements any contemporary living space. This LED-backlit flat screen is designed for high-end home entertainment with an emphasis on minimalist aesthetics.

Key Features:
• Bezel-Less Design: Ultra-thin frame to maximize your viewing area for a truly edge-to-edge experience.
• Minimalist Stand: Supported by low-profile, angular "v-shape" feet for stability with a small footprint.
• Sleek Profile: Slim depth ideal for both tabletop placement and seamless wall mounting.
• Matte Black Finish: Premium obsidian black texture that reduces reflections.

Perfect Compatibility:
To ensure your premium display remains protected from power surges and voltage fluctuations, we recommend pairing this television with an Isolated Stabilizer (such as the Susil IS-200). This helps maintain picture clarity and extends the lifespan of the internal LED components.`,
      image: 's (22).jpeg', price: 'Rs. 10,500', category: 'assembled'
    },
    {
      id: 'p23', name: 'Inverter/UPS',
      description: `Uninterrupted Power: Never let a power cut interrupt your life again. Our Inverter and UPS (Uninterrupted Power Supply) Systems provide a seamless transition to backup power. While a UPS is optimized for instant switching for computers, an Inverter is designed to run home appliances for extended durations.

Key Features:
• Instantaneous Switching: UPS systems transition in milliseconds, preventing restarts for LED TVs or PCs.
• Pure Sine Wave Output: Delivers "clean" electricity identical to the grid, crucial for sensitive Induction Stoves.
• Smart Battery Charging: Multi-stage technology optimized for both Lead-Acid and Lithium Iron (LiFePO4).
• Comprehensive Protection: Intelligent sensors for overload and short circuit safety.

Choosing the Right System:
• Home Inverter: Best for Lights, Fans, TVs, and Refrigerators with extended runtime.
• Online/Offline UPS: Best for Computers and servers with ultra-fast switching under 10ms.

The Ultimate Protection Trio:
To ensure your backup system lasts for years, we recommend:
1. The Source: High-efficiency Solar Panels for free charging.
2. The Storage: SUSIL Lithium Iron Batteries for long life and fast charging.
3. The Guard: A SUSIL IS-200 Isolated Stabilizer to filter out harmonic distortion during battery conversion.`,
      image: 's (23).jpeg', price: 'Rs. 15,000', category: 'authorized'
    },
    {
      id: 'p24', name: 'Walkie Talkie',
      description: `Clear Communication, Anywhere: Professional Walkie Talkies for crystal-clear, long-range communication. Reliable in environments where cell networks fail, these two-way radios keep your team in sync at construction sites, security events, or outdoor adventures.

Key Features & Capabilities:
• Long-Range Clarity: High-gain antennas provide a stable signal over several kilometers.
• Noise-Cancellation: Advanced audio processing filters out background wind and machinery noise.
• Durable & Weather-Resistant: Impact-resistant and protected against dust and water splashes.
• Extended Battery Life: Rechargeable cells ensure a full day of operation.
• Multiple Channel Support: 16+ programmable channels with privacy codes to prevent cross-talk.

Ideal For:
• Security Teams: Instant coordination for patrolling and emergency response.
• Event Management: Managing stage crews and técnicos.
• Hospitality: Seamless communication between reception and housekeeping.
• Outdoor Adventure: Reliable contact in areas with weak cellular signal.

Technical Specifications: UHF/VHF dual-band support, Push-To-Talk (PTT), Hands-Free (VOX) mode, and Emergency Alarm.

Pro-Tip:
Protect your comms gear by plugging your multi-charger station into a SUSIL IS-200 Isolated Stabilizer. This prevents surges from damaging sensitive battery regulators during overnight charging.`,
      image: 's (24).jpeg', price: 'Rs. 5,500', category: 'authorized'
    },
    {
      id: 'p25', name: 'Airgrid',
      description: `Long-Range Wireless Excellence: The Ubiquiti AirGrid M5 is a high-performance broadband wireless device that combines antenna and radio system integration. Utilizing InnerFeed technology, it provides incredible range and throughput in a lightweight, cost-effective package.

Key Technical Features:
• InnerFeed™ Technology: Radio is integrated directly into the feedhorn, eliminating cable loss and improving link reliability.
• AirMax® Protocol: High-speed TDMA protocol maximizes airtime efficiency and eliminates collisions.
• High-Gain Grid Antenna: Mesh design provides excellent wind-loading for stable alignment in high winds.
• Plug-and-Play: Integrated LED signal indicators for easy installation and alignment.

Performance Specs:
• Frequency Band: 5 GHz (Low interference).
• Throughput: 100+ Mbps real-world outdoor output.
• Range: 30+ km (Depends on line-of-sight).

Ideal For:
Remote Internet Access, CCTV Backhaul without trenching, Building-to-Building links, and ISP Infrastructure (WISP).

Pro-Tip:
Outdoor wireless equipment is highly susceptible to static and surges. To protect the delicate radio from burnout, power your network switch and PoE injectors through a SUSIL IS-200 Isolated Stabilizer. This isolates your gear from voltage spikes and ensuring a stable wireless link.`,
      image: 's (25).jpeg', price: 'Rs. 4,500', category: 'authorized'
    },
    {
      id: 'p26', name: 'Dolby Atmos',
      description: `Elevate your home entertainment with Dolby Atmos, the industry-standard spatial audio technology that transforms a traditional viewing experience into a multi-dimensional soundscape. By moving beyond simple channels to "audio objects," Dolby Atmos allows sound to move all around you—including overhead—with incredible precision.

Key Features:
• 360-Degree Spatial Audio: Creates a dome of audio that immerses the listener.
• Object-Based Sound: Audio treated as individual objects for pinpoint accuracy.
• Enhanced Clarity and Depth: Makes dialogue crisper and action visceral.
• Adaptive Playback: Optimizes output for speakers, soundbars, or headphones.

Benefits for Your Setup:
• Overhead Dimension: Adds a vertical layer of sound for realistic effects like rain.
• Cinematic Realism: Brings the theater-quality audio directly into your home.
• Gaming Immersion: Hear the exact direction of in-game movements.

Total Protection:
To maintain high-performance components like LED TVs and audio receivers, consistent power is essential. Using an Isolated Stabilizer like the Susil IS-200 protects these sensitive circuits from voltage spikes and electrical noise.`,
      image: 's (26).jpeg', price: 'Rs. 35,000', category: 'assembled'
    },
    {
      id: 'p27', name: 'Dolby 5.1 Systems',
      description: `Dolby 5.1 remains the industry standard and most popular choice for home theaters worldwide. It provides a proven, high-fidelity "horizontal" surround sound experience that places you right in the center of the action with its specific configuration of 5 full-range speakers and 1 dedicated subwoofer.

The 5.1 Channel Breakdown:
• Center Channel: Dedicated to dialogue, ensuring voices are crisp and anchored to the screen.
• Front Left & Right: Handle the bulk of the soundtrack, music, and primary sound effects.
• Rear (Surround) Left & Right: Provide ambient sounds to create a 360-degree environment.
• The ".1" Subwoofer: Dedicated solely to Low-Frequency Effects (LFE) for deep, room-shaking bass.

Key Benefits:
• Wide Compatibility: Natively supported by almost all streaming services and physical media.
• Space Efficient: Ideal for small to medium-sized rooms.
• Crisp Dialogue: Separating voices into the center channel improves clarity significantly.
• Cinematic Precision: Provides a massive 360-degree upgrade over standard stereo.

Pro-Tip:
High-end 5.1 receivers and subwoofers are sensitive to power quality. To prevent humming and protect digital processors, we recommend using an Isolated Stabilizer like the Susil IS-200.`,
      image: 's (27).jpeg', price: 'Rs. 25,000', category: 'assembled'
    },
    {
      id: 'p28', name: '2.1 Sound Bar',
      description: `Upgrade your TV’s built-in speakers with the SUSIL 2.1 Channel Soundbar System. This setup offers the perfect balance between high-quality audio and minimalist design, delivering a massive boost in clarity and bass without the clutter of multiple speakers.

Key Features:
• 2.1 Configuration: 2 main speakers in a sleek bar + 1 dedicated subwoofer for deep bass.
• Crystal Clear Dialogue: Dedicated channels separate vocals from background noise.
• Deep, Thumping Bass: Separate subwoofer handles low-end frequencies with "punch."
• Minimalist Aesthetics: Designed to sit beneath your TV or be wall-mounted.
• Bluetooth Connectivity: Stream high-quality music directly from your phone.
• Preset Sound Modes: Switch between Movie, Music, and News modes to optimize audio.

Performance Features:
• Integrated Tweeters for crisp high-frequency sound effects.
• Plug-and-Play Simplicity via HDMI (ARC) or Optical cable.

Protect Your Investment:
To ensure your 2.1 system delivers hiss-free audio and lasts for years, pair it with a dedicated Isolated Stabilizer like the Susil IS-200. It filters out electrical interference and protects sensitive digital amplifiers from power surges.`,
      image: 's (28).jpeg', price: 'Rs. 8,500', category: 'assembled'
    },
    {
      id: 'p29', name: 'PA System',
      description: `A Public Address (PA) System is designed to amplify voices, instruments, and recorded music to reach large audiences clearly. Whether for a corporate seminar, house of worship, or live performance, a high-quality PA system ensures your message is heard without distortion.

Key Features:
• High-Output Speakers: Engineered to project sound over long distances with vocal clarity.
• Integrated Mixer: Balance multiple inputs like microphones and instruments for a pro mix.
• Versatile Connectivity: XLR, 1/4" Jack, and Bluetooth inputs for all your devices.
• Rugged Durability: Heavy-duty cabinets and reinforced grilles for frequent transport.

Ideal For:
• Corporate/Offices: Announcements, presentations, and meetings.
• Retail & Malls: Background music and promotional announcements.
• Houses of Worship: Sermons and choir music in large halls.
• Outdoor Events: High-decibel projection in open-air environments.

Why Power Stability is Critical:
PA systems are high-draw devices. Sudden voltage drops cause clipping, while surges can damage expensive amplifier circuits. Using an Isolated Stabilizer like the Susil IS-200 provides clean, regulated power, eliminating speaker "buzz" and protecting your equipment.`,
      image: 's (29).jpeg', price: 'Rs. 18,000', category: 'assembled'
    },
    {
      id: 'p30', name: 'CCTV',
      description: `24/7 Vigilance: Secure your home or business with our high-definition CCTV Surveillance Systems. From standalone cameras to multi-channel networked arrays, our systems provide crystal-clear imaging and remote monitoring, ensuring you never miss a moment.

Core Security Features:
• Ultra-High Definition (UHD): Capture critical details with 4MP, 5MP, or 4K sensor technology.
• Smart Night Vision: IR LEDs or "Full-Color Night Vision" for clear footage in total darkness.
• Remote Mobile Access: View live feeds, playback footage, and receive alerts on your smartphone.
• Weatherproof Protection: IP66/IP67 rated housings for reliable outdoor operation.
• Wide-Angle Coverage: Advanced lenses reduce blind spots in large areas.

DVR vs. NVR Systems:
• DVR (Digital Video Recorder): Uses Analog/BNC cables; reliable and cost-effective.
• NVR (Network Video Recorder): Uses IP Cameras/Ethernet with PoE support; 4K ready.

Why Power Quality is Critical:
CCTV systems are sensitive to electrical interference, which causes "rolling lines" or "snow." To ensure jitter-free video and protect your hard drive, we recommend using a SUSIL IS-200 Isolated Stabilizer. This filters out "hum," prevents HDD crashes during sags, and guards sensors against lightning spikes.`,
      image: 's (30).jpeg', price: 'Rs. 12,000', category: 'authorized'
    },
    {
      id: 'p31', name: 'Cordless Telephone',
      description: `Wireless Freedom: Experience the perfect blend of mobility and vocal clarity with our Digital Cordless Telephone Systems. Utilizing DECT technology, our phones provide a secure, interference-free connection that traditional analog cordless phones simply can't match.

Key Features & Comfort:
• Superior Range: Roam up to 50 meters indoors and up to 300 meters outdoors from the base station.
• Crystal Clear Audio: Digital signal processing eliminates static and "hiss" common in older wireless models.
• Backlit Display & Keypad: High-contrast screens for easy reading of Caller ID and menus.
• Long Battery Life: High-efficiency power management for 10+ hours of talk time.
• Expandable System: Supports multiple handsets without needing extra telephone jacks.

Professional & Home Functionality:
• Phonebook Memory for instant speed-dialing.
• High-quality Speakerphone for hands-free multitasking.
• Intercom & Call Transfer between handsets.
• Integrated Digital Answering Machine.

Pro-Tip:
The base station is the "brain" of the system, containing sensitive radio transmitters. Power surges can cause it to lose pairing or damage internal components. We recommend plugging the base station into a SUSIL IS-200 Isolated Stabilizer to ensure a steady charging current and hum-free radio signal.`,
      image: 's (31).jpeg', price: 'Rs. 2,500', category: 'authorized'
    },
    {
      id: 'p32', name: 'Drone',
      description: `The Sky Is No Longer The Limit: Take your perspective to new heights with our range of High-Performance Drones. These Unmanned Aerial Vehicles (UAVs) combine sophisticated flight stability with professional-grade imaging technology for photography, industrial inspections, and agricultural mapping.

Cutting-Edge Aerial Technology:
• 4K Ultra-HD Imaging: Integrated stabilized gimbals ensure silky-smooth video and razor-sharp photos.
• Intelligent Flight Modes: "Follow Me," "Waypoints," and "Point of Interest" allow for autonomous flight.
• Omnidirectional Obstacle Sensing: Multi-directional sensors prevent collisions during complex maneuvers.
• Extended Flight Time: High-energy batteries provide 30-45 minutes of airtime per charge.
• GPS-Assisted Precision: Rock-solid hovering and automatic "Return to Home" (RTH) features.

Versatile Applications:
• Photography/Film: Capturing cinematic sweeping shots.
• Agriculture: Monitoring crop health and precision spraying.
• Real Estate: Showcasing properties from unique aerial angles.
• Search & Rescue: Using thermal imaging to locate missing persons.

Battery Care & Safety:
Drones rely on sensitive LiPo or LiFePO4 battery packs that require precise, stable charging. To protect your flight controller and ensure battery safety, always connect your charging hub to a SUSIL IS-200 Isolated Stabilizer. This prevents firmware corruption and overheating caused by voltage spikes.`,
      image: 's (32).jpeg', price: 'Rs. 45,000', category: 'authorized'
    },
    {
      id: 'p33', name: 'EPABX',
      description: `Seamless Connectivity: A Professional EPABX (Electronic Private Automatic Branch Exchange) is the heart of modern business communication. It manages multiple lines while allowing free internal communication through extensions, streamlining your workflow and projecting a professional image.

Key Features:
• Auto-Attendant: Automated voice menus (e.g., "Press 1 for Sales") to direct callers instantly.
• Internal Intercom: Free and instant communication between desks, departments, or floors.
• Direct Inward Dialing (DID): Allows callers to reach specific extensions without an operator.
• Call Transfer & Forwarding: Seamlessly move calls to another desk or mobile phone.
• Conference Calling: Facilitates multi-party discussions for effortless collaboration.

Business Benefits:
• Cost Savings: Reduces the number of physical lines needed from providers.
• Scalability: Easily add new extensions as your team grows.
• Professionalism: Features like "Music on Hold" enhance the caller experience.

Pro-Tip:
An EPABX is an "always-on" device with sensitive digital switching circuits. It is highly susceptible to line noise and voltage surges. To guarantee 100% uptime and crystal-clear voice, we recommend powering your EPABX through a SUSIL IS-200 Isolated Stabilizer to shield it from electrical interference.`,
      image: 's (33).jpeg', price: 'Rs. 8,500', category: 'authorized'
    },
    {
      id: 'p34', name: 'Lithium Iron Battery',
      description: `Switch to the safest, most durable, and most efficient battery technology available today. Lithium Iron Phosphate (LiFePO4) batteries are a significant upgrade over traditional Lead-Acid and Gel batteries, offering superior performance for solar storage, UPS systems, and high-demand electronics.

Key Benefits:
• Ultra-Long Lifespan: Lasts up to 10 times longer (2,000 to 5,000+ cycles).
• Superior Safety: LiFePO4 chemistry is thermally and chemically stable and virtually non-combustible.
• Consistent Power Delivery: Maintains steady voltage throughout the entire discharge cycle.
• Lightweight & Compact: Weighs about 50% less than equivalent lead-acid batteries.

Performance Comparison (Lithium vs Lead-Acid):
• Service Life: 10+ Years vs 2–3 Years.
• Weight: Very Light vs Very Heavy.
• Depth of Discharge: Up to 90–100% vs 50% rec.

Ideal For:
• Solar Energy Storage, CCTV & Security systems, High-End Home Entertainment, and Electric Vehicles.

Pro-Tip:
To maximize efficiency and protect the BMS internal circuitry, ensure the charging source is stable. Pair with a SUSIL Isolated Stabilizer to ensure "clean" electricity for your charging system.`,
      image: 's (34).jpeg', price: 'Rs. 6,500', category: 'assembled'
    },
    {
      id: 'p35', name: 'Solar MPPT Controller',
      description: `Maximize your energy harvest with the SUSIL Maximum Power Point Tracking (MPPT) Controller. Unlike traditional regulators, MPPT acts like a "smart transmission" for your solar array, increasing energy harvest by up to 30% — even on cloudy or cold days.

Key Features:
• Active Tracking: Real-time sun intensity tracking for peak performance.
• Superior Low Light Efficiency: Converts low-voltage input into usable charging current when overcast.
• Cold Weather Boost: Captures "bonus" voltage produced in cold conditions for extra amperage.
• Flexible Panel Configurations: Allows high-voltage arrays to charge lower-voltage battery banks.

Technical Benefits:
• Efficient DC-to-DC Conversion to step down panel voltage.
• 3-Stage Intelligent Charging (Bulk, Absorption, Float) for maximum battery life.
• Advanced Protection: Built-in safeguards against reverse polarity, short circuits, and over-temp.

Ideal For:
• Off-Grid Living, RV & Marine setups, and Critical Battery Backup systems.

Pro-Tip:
While the MPPT controller optimizes energy in, sensitive electronics need protection on the way out. Pair with a SUSIL Isolated Stabilizer to keep your LED TV and PA Systems safe from voltage spikes during high solar production or battery switching.`,
      image: 's (35).jpeg', price: 'Rs. 3,500', category: 'assembled'
    },
    {
      id: 'p36', name: '2Way Intercom',
      description: `Instant Clarity: Hands-free 2-Way Intercom Systems for seamless communication between two locations. Whether it's a front gate and a kitchen or an office reception area, these systems bridge the gap with real-time conversation at the push of a button or via voice activation.

Key Features & Functionality:
• Crystal-Clear Audio: High-sensitivity microphones and optimized speakers for loud and clear sound.
• Hands-Free Operation: Optional VOX (Voice-Operated Exchange) mode for busy workspaces.
• Robust Range: Reliable signal transmission across different rooms, floors, or outdoor gates.
• Adjustable Volume: Independent settings for both master and substation units.
• Secure Privacy: Shielded wiring ensures conversations stay within your walls.

Common Applications:
Home Security (vetting visitors), Medical Clinics (reception to consultation), Retail/Drive-Thru, and Elderly Care.

Pro-Tip:
Intercom systems can pick up "mains hum" (buzzing) caused by electrical interference. To ensure whisper-quiet communication, power your intercom hub through a SUSIL IS-200 Isolated Stabilizer. It filters out electrical noise and protects sensitive audio amplifiers from surges.`,
      image: 's (36).jpeg', price: 'Rs. 1,800', category: 'authorized'
    },
    {
      id: 'p37', name: 'Telephone',
      description: `The Reliable Standard: Professional Analog & Desktop Telephones. Despite the rise of mobile technology, the Landline Telephone remains the gold standard for reliable, high-quality communication. Our telephones offer a stable connection that isn't dependent on cellular signal or battery life.

Why the Landline Matters:
• Crystal-Clear Voice Quality: Wired connections eliminate "robotic" voices and dropped words.
• Always Ready: Corded telephones work even during power outages by drawing power from the line.
• Ergonomic Design: Contoured handsets for long conversations without ear fatigue.
• Security & Privacy: Significantly harder to intercept than wireless or internet-based tools.

Features for Efficiency:
• Caller ID Display: Instantly see who is calling.
• Speakerphone: Built-in speakers for hands-free conferencing.
• Speed Dial Keys: Program most-used contacts for one-touch dialing.
• Essential Functions: Redial and Mute for professional call management.

Ideal For:
Offices & EPABX Extension networks, Hospitality (guest rooms), Emergency Hubs, and Home Use for families and seniors.

Pro-Tip:
Sensitive electronic components in modern telephones can be affected by "line noise." To ensure 100% noise-free conversations, we recommend using a SUSIL IS-200 Isolated Stabilizer to power your central exchange and desktop bases. This maintains premium audio fidelity and protects against voltage spikes.`,
      image: 's (37).jpeg', price: 'Rs. 850', category: 'authorized'
    },
    {
      id: 'p38', name: 'Powerline Intercom',
      description: `Plug & Talk: Transform your existing electrical wiring into a sophisticated communication network with our Powerline Intercom Systems. This "No-Wires" technology establishes instant communication between rooms without drilling or extra data cables.

How It Works:
• Zero Installation: Just plug-and-play into any standard wall outlet.
• Circuit-Based: Works across rooms on the same electrical transformer/phase.
• Private & Secure: Advanced filtering prevents signal "bleeding" to neighbors.

Key Features:
• Multi-Channel: 2 to 4 distinct channels for simultaneous independent conversations.
• Lock/Monitor: Ideal for baby monitoring or elder care with continuous transmission mode.
• Call Tone Alert: Gentle chime alerts the other party before you speak.
• Total Portability: Unplug and move to any outlet (garage, bedroom, office) to stay connected.

Ideal For:
Large Homes (kitchen to upstairs), Small Offices (reception to warehouse), Nurseries, and Elderly Care.

Pro-Tip:
Powerline Intercoms can be sensitive to "line noise" from motors or LED bulbs. For the clearest audio, plug your units into a SUSIL IS-200 Isolated Stabilizer. It acts as a massive filter, scrubbing away "electrical pollution" and providing a silent background for crystal-clear communication.`,
      image: 's (38).jpeg', price: 'Rs. 2,200', category: 'authorized'
    },
    {
      id: 'p39', name: 'Educational Project',
      description: `Empowering Innovation: Our Educational Project Kits are designed to bridge the gap between classroom theory and real-world application. Whether you are a student, hobbyist, or aspiring engineer, these projects provide hands-on experience in electronics, renewable energy, and sound engineering.

Key Educational Pillars:
• STEM Learning: Encourages Science, Technology, Engineering, and Math problem-solving.
• Discovery-Based: Comprehensive guides explain not just how to connect, but why it works.
• Scalable Difficulty: Projects range from basic LED circuits to advanced digital signal processing.
• Reusable Components: High-quality boards and sensors built for disassembly and rebuilding.

Popular Project Categories:
• Renewable Energy: Solar & Battery tech (Mini Solar Chargers, LiFePO4 storage).
• Audio Engineering: Frequency and sound experiments (Creating 2.1 speaker systems).
• Power Management: Understanding voltage regulation and isolated stabilization.
• Automation: Robotics and logic programming with smart sensors.

Safety First:
When working on power electronics, safety is paramount. We recommend using a SUSIL IS-200 Isolated Stabilizer at your workstation to prevent accidental power surges from damaging your delicate prototypes or testing equipment.`,
      image: 's (39).jpeg', price: 'Rs. 1,500', category: 'assembled'
    },
    {
      id: 'p40', name: 'HAM Transceiver',
      description: `Connect Beyond Borders: Enter the elite world of global communication with our high-performance Amateur (HAM) Radio Transceivers. These units are the gold standard for long-distance, off-grid communication, relying only on the atmosphere and your skill to talk across the street or across an ocean.

Key Capabilities:
• Broad Spectrum Access: Operates across multiple bands (HF, VHF, UHF) for local chatter or global "DXing."
• Multiple Modulation Modes: Supports SSB for long-range efficiency, FM for clear local audio, and CW (Morse Code).
• Advanced DSP Filtering: Digital Signal Processing helps "dig out" faint voices from background static.
• Large Digital Interface: High-contrast displays for visualizing the radio spectrum in real-time.
• External Antenna Support: Standard SO-239/N-type connectors for specialized dipole or Yagi antennas.

Applications:
Emergency Comms during grid failures, DXing distant foreign stations, and Technical Hobbies like satellite tracking.

Pro-Tip:
HAM Transceivers are sensitive to RFI (Radio Frequency Interference) and power surges. To ensure peak performance and protect delicate transistors, a SUSIL IS-200 Isolated Stabilizer is essential. It provides "clean" power to remove electrical hum and keeps your 13.8V supply steady to prevent frequency drift during voltage sags.`,
      image: 's (40).jpeg', price: 'Rs. 12,000', category: 'authorized'
    },
    {
      id: 'p41', name: 'DLP/3LCD/3D Projector',
      description: `Cinematic Brilliance: Bring the magic of the big screen to your home, classroom, or boardroom with our high-performance Projection Systems. Whether you demand the contrast of DLP, the color accuracy of 3LCD, or the depth of 3D, our projectors deliver theater-quality visuals.

Technology Comparison:
• DLP: Best for Home Theater; high contrast, deep blacks, and jitter-free motion.
• 3LCD: Best for Bright Rooms; 3x brighter colors and no "rainbow effect."
• 3D Projection: Immersive depth with active/passive 3D support.

Key Performance Features:
• Ultra-High Brightness (Lumens) for clear visuals in ambient light.
• 4K & HDR Compatibility for breathtaking detail and lifelike color.
• Flexible Connectivity: HDMI, USB, and Wireless casting for all your devices.
• Long Lamp Life: Advanced cooling and eco-modes for thousands of hours of use.
• Keystone Correction: Easily square the image even at extreme angles.

Ideal For:
Home Cinema (with 5.1 Surround), Business Boardrooms, Education hubs, and Outdoor backyard cinema.

Pro-Tip:
Projectors are electrically sensitive. High-intensity lamps and cooling fans must stay running to prevent heat damage. A surge or flicker can blow an expensive lamp or corrupt the mainboard. To ensure your projector stays cool and functional, we highly recommend a SUSIL Isolated Stabilizer to prevent flickering and protect delicate DLP/LCD optics from power spikes and grid noise.`,
      image: 's (41).jpeg', price: 'Rs. 28,000', category: 'authorized'
    },
    {
      id: 'p42', name: 'IP Phone',
      description: `Smart Communication: Step into the era of digital voice with our high-performance IP (Internet Protocol) Telephones. Designed for the modern workspace, these phones transmit your voice over your office’s data network or the internet (VoIP), offering superior sound quality and advanced features.

Why Choose IP Telephony?
• High-Definition (HD) Voice: HD voice clarity makes conversations feel more natural.
• Seamless Integration: Works with your existing EPABX or cloud-based PBX system.
• PoE (Power over Ethernet): Draws power directly from the network cable, reducing clutter.
• Multi-Line Management: Handle hold queues and three-way conferencing with ease.
• Built-in Security: Enterprise-grade encryption (TLS/SRTP) for private conversations.

Features for Productivity:
Programmable keys for speed dial, dual Ethernet ports to save on office wiring, and high-resolution color LCD displays.

Ideal For:
Corporate Offices, Call Centers (compatible with headsets), and Home Offices.

Pro-Tip:
IP phones are specialized computers sensitive to "dirty" power and network interference. Unstable voltage can cause reboots mid-call or corrupt firmware during updates. To ensure 100% uptime, we recommend powering your network switches and VoIP gateways through a SUSIL IS-200 Isolated Stabilizer. This filters out electrical noise that causes voice "jitter" and protects your hardware from voltage spikes.`,
      image: 's (42).jpeg', price: 'Rs. 4,500', category: 'authorized'
    },
    {
      id: 'p43', name: 'IP EPABX',
      description: `The Unified Communication Hub: Elevate your business connectivity with our next-generation IP EPABX systems. Leveraging your existing data network and the internet, it provides a seamless communication suite for modern businesses seeking scalability, cost-efficiency, and mobility.

Why Move to IP EPABX?
• Limitless Scalability: Add new users or extensions instantly without laying a single new cable.
• Significant Cost Savings: Drastically reduce long-distance charges using VoIP trunks.
• Remote Connectivity: Use office extensions on smartphones or laptops from anywhere.
• Unified Messaging: Receive voicemails as audio files in your email inbox.
• Video & Collaboration: Supports video conferencing and instant messaging between staff.

Core Business Features:
• IVR (Interactive Voice Response): Multi-level menus to direct callers automatically.
• CRM Integration: Sync with Salesforce or Zoho to see customer details during calls.
• Call Recording: Built-in digital recording for quality assurance and compliance.
• Presence Status: See if colleagues are available before transferring calls.

Protecting Your Digital Nerve Center:
As a 24/7 server connected to both power and data grids, an IP EPABX is twice as vulnerable. To ensure your business never goes silent, we strongly recommend a dual-protection strategy: use a high-quality Inverter/UPS for backup and power the system through a SUSIL Isolated Stabilizer to prevent logic errors and provide a barrier against voltage spikes.`,
      image: 's (43).jpeg', price: 'Rs. 15,000', category: 'authorized'
    },
    {
      id: 'p44', name: 'LED Screen & Video Splicer',
      description: `Transform any space into a high-impact visual experience with our professional LED Screen and Video Splicing technology. Designed for seamless, large-scale displays for advertising, broadcasting, or live events, our modular screens and splicers are built for commercial "big-picture" environments.

High-Definition LED Screens:
• Modular Versatility: Interlocking cabinets allow for screens of any size or aspect ratio.
• Superior Brightness: Visible even in high-ambient light with vivid color playback.
• Seamless Edges: Zero-bezel design creates a single, uninterrupted giant canvas.
• High Refresh Rate: Flicker-free motion, ideal for live sports and high-speed video.

The Power of Video Splicing:
• Multi-Window Display: Show multiple simultaneous video feeds (Picture-in-Picture).
• Seamless Switching: Zero-delay transitions between laptops, cameras, and media players.
• Resolution Scaling: Automatically fits low-res content to the high-res LED wall.
• Edge Blending: Ensures uniform color and brightness across every specific panel.

Common Applications:
• Control Rooms, Retail & Digital Signage, Concerts, Houses of Worship, and Corporate Boardrooms.

24/7 Reliability:
Sensitive internal processors in large-scale visual setups are vulnerable to power drops. To guarantee uptime and protect your investment, we recommend integrating a SUSIL Isolated Stabilizer to isolate the video processor from noise and spikes.`,
      image: 's (44).jpeg', price: 'Rs. 65,000', category: 'assembled'
    },
    {
      id: 'p45', name: 'Motion Sensor Units',
      description: `Smart Automation: Intelligent Motion Sensor Units act as the "eyes" of your smart home. Using advanced PIR (Passive Infrared) technology, they detect heat signatures to trigger lights, alarms, or appliances, ensuring energy conservation and enhanced security.

Key Features & Intelligent Control:
• 360° & Wide-Angle Coverage: Ceiling or wall-mounted options for full room or driveway coverage.
• Adjustable Time Delay: Customize deactivation from 10 seconds up to 15 minutes.
• Lux Control: Built-in light sensors for automated night-only activation to save power.
• High Load Capacity: Robust internal relays handle multiple bulbs, fans, or sirens.
• Detection Tuning: Ignore small pets while reliably detecting human movement.

Ideal For:
Hallways & Stairs (hands-free safety), Bathrooms (energy saving), Security Zones, and Public Restrooms.

Pro-Tip:
Motion sensors use delicate infrared elements sensitive to electrical noise. Unstable power can lead to "false triggering" or failure to reset. To ensure reliable automation and protect internal relays, we recommend connecting your lighting circuit through a SUSIL IS-200 Isolated Stabilizer. It filters electrical spikes and protects against "kickback" voltage during switching.`,
      image: 's (45).jpeg', price: 'Rs. 1,200', category: 'authorized'
    },
    {
      id: 'p46', name: 'Biometric Unit',
      description: `Secure Access, Simplified: Professional Biometric Units replace vulnerable keys and passwords with unique physical traits. Whether for employee attendance or securing high-risk areas, our units provide a "fraud-proof" solution for modern access control.

Key Technologies:
• Advanced Fingerprint Recognition: Identifies unique ridge patterns, even on dry or worn fingers.
• AI-Powered Face Recognition: Hygienic "hands-free" identification in less than a second.
• RFID & PIN Backup: Proximity card readers and tactile keypads for dual-layer authentication.
• Live Finger Detection: Prevents "spoofing" attempts using fake prints or photos.

Business Efficiency:
Time & Attendance tracking (eliminates "buddy punching"), real-time entry logging, and seamless Door Access Control integration with electronic locks.

Ideal Applications:
Corporate Offices, Industrial Warehouses (certified personnel only), Gyms/Clubs, and Residential Complexes.

Pro-Tip:
Biometric units are sophisticated microcomputers sensitive to power spikes and noise. Electrical hazards can cause data corruption or "logic errors" in recognition. To ensure 100% security uptime, we recommend connecting your unit to a UPS for continuous power and using a SUSIL IS-200 Isolated Stabilizer to shield the expensive optical sensors and internal database from grid-borne interference.`,
      image: 's (46).jpeg', price: 'Rs. 6,500', category: 'authorized'
    },
    {
      id: 'p47', name: 'Door Security System',
      description: `Ultimate Access Control: Professional Door Security Systems transition your property to a multi-layered digital fortress. By integrating electronic locks, smart controllers, and real-time monitoring, we provide total control over who enters your premises—and when.

Comprehensive Security Layers:
• Electronic Locking Solutions: Heavy-duty Maglocks for high-traffic or Electric Strikes for existing hardware.
• Smart Entry Methods: Access via Biometric Units, RFID key cards, secure PIN codes, or smartphone apps.
• Video Intercom Integration: See and speak with visitors before unlocking the door.
• Tamper Alerts: Built-in sensors trigger alarms if a door is forced or the panel is tampered with.
• Emergency Fail-Safe: Locks can release automatically in the event of a fire for safe exit.

Ideal For:
Residential (keyless entry), Corporate Offices (server room access), Retail Stores (auto-locking), and Apartment Complexes.

Pro-Tip:
Electronic locks rely on constant, clean DC power. A voltage spike can "fry" the controller board, while a power sag might cause a Maglock to lose its "holding force." To guarantee that your doors stay locked and your system stays smart, we recommend powering your security hub through a SUSIL IS-200 Isolated Stabilizer. It protects the microprocessor from surges and prevents electrical interference from causing malfunctions or false alarms.`,
      image: 's (47).jpeg', price: 'Rs. 8,500', category: 'authorized'
    },
    {
      id: 'p48', name: 'Remote Switch Control',
      description: `Smart Living Simplified: Upgrade your lifestyle with the SUSIL Remote Switch Control System. Manage your home’s lighting and appliances from the palm of your hand, eliminating the need to manually toggle switches while enhancing energy management.

Key Features & Benefits:
• Multi-Device Management: Control up to four independent light circuits and a ceiling fan from one central unit.
• Digital Status Display: The main hub features a clear digital display indicating active channels or fan speeds.
• Wireless Accessibility: Adjust your environment from your sofa or bed using the compact RF remote.
• Energy Efficiency: Reduce bills by easily turning off forgotten lights or appliances remotely.
• Straightforward Installation: Features color-coded wiring for easy maintenance.

Technical Breakdown:
• Control Hub: Compact unit with a digital 7-segment display and home-icon branding.
• Connectivity: Wireless RF for reliable operation through walls.
• Compatibility: Works with LED bulbs, incandescent lamps, and standard ceiling fans.

Ideal Applications:
• Bedrooms, Living Rooms, Accessibility for elderly individuals, and Commercial Offices.

Protect Your Automation:
Sensitive microprocessors in home automation systems are vulnerable to surges. To ensure reliability, we recommend powering your control hub through a SUSIL Isolated Stabilizer to filter out electrical noise.`,
      image: 's (48).jpeg', price: 'Rs. 2,500', category: 'assembled'
    },
    {
      id: 'adv-led', name: 'Advertising LED',
      description: `Capture Attention: Make your message impossible to miss with our high-visibility SUSIL Advertising LED Displays. Engineered for clarity and impact, these programmable digital signs are the ultimate tool for storefronts, reception areas, and commercial spaces.

Key Features & Visual Impact:
• Vibrant Red LED Output: High-intensity red LEDs provide a sharp, glowing message that cuts through visual clutter.
• Programmable Messaging: Easily update text for sales, hours, or greetings — a dynamic alternative to posters.
• High-Contrast Design: LEDs set against a deeb black, textured frame to maximize readability.
• Plug-and-Play: Standard power cord for easy installation on any window or wall.

Technical Specifications:
• Display Tech: Dot Matrix LED.
• Primary Color: High-Brightness Red.
• Enclosure: Durable Matte Black Chassis.
• Orientation: Landscape / Horizontal.

Commercial Applications:
• Retail Stores, Hotels & Hospitality, Corporate Offices, and Event Centers.

Protect Your Digital Signage:
Advertising LED boards contain thousands of individual diodes vulnerable to unstable power. To prevent flickering, dead pixels, or circuit failure, we highly recommend pairing your display with a SUSIL IS-200 Isolated Stabilizer to extend the life of every LED.`,
      image: 'Advertising LED.jpeg', price: 'Contact for Price', category: 'assembled'
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
                      <a
                        href="tel:9245288900"
                        className="flex items-center justify-center px-10 py-4 border-2 border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:px-12 transition-all duration-300"
                      >
                        Contact Us
                      </a>
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
                  <a
                    href="https://www.google.com/maps/dir//Susil+Electronics+%26+I.T.I+96A7+North+Andalpuram+Rajapalayam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap text-center"
                  >
                    Get Directions
                  </a>
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
                <h2 className="text-4xl font-black text-slate-900 mb-6">Institute for Electronics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                  {[
                    { title: "Industrial Electronics", desc: "Covers automation, PLC, and industrial control systems." },
                    { title: "Audio Engineering", desc: "Specialized training in amplifier design and sound acoustics." },
                    { title: "Smart Solutions", desc: "Embedded systems and IoT-based consumer electronics." }
                  ].map((course, i) => (
                    <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-200">
                      <h3 className="font-bold text-blue-900 mb-2">{course.title}</h3>
                      <p className="text-sm text-slate-600">{course.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="inline-block bg-blue-600 px-8 py-3 rounded-full text-white font-bold shadow-lg hover:bg-blue-700 transition-colors">
                  Inquire for Admission
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
                <h2 className="text-4xl font-black text-slate-900 mb-6">Research & Development</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
                  {[
                    { title: "High-Fidelity Audio", desc: "Innovating lossless audio transmission and custom amplifier circuits for professional sound." },
                    { title: "Power Management", desc: "Developing advanced isolated stabilization technologies to protect sensitive electronics." }
                  ].map((project, i) => (
                    <div key={i} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-200 shadow-sm">
                      <h3 className="font-bold text-purple-900 mb-3">{project.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{project.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="inline-block bg-purple-600 px-8 py-3 rounded-full text-white font-bold shadow-lg hover:bg-purple-700 transition-colors">
                  Collaborate with Us
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
                <ShoppingCart className="w-5 h-5" />
                <span>Susil Premium Audio Labs</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Brand</span>
              </h2>
            </div>

            {/* Unified Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {allProducts.filter(p => p.category === 'assembled').map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 bg-white"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <img
                      src={`${process.env.PUBLIC_URL}/products/${product.image}`}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-slate-50 flex flex-col gap-2">
                    <h3 className="text-sm font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] leading-tight group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppEnquiry(product.name);
                        }}
                        className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all scale-90 group-hover:scale-100 flex items-center space-x-2"
                        title="Enquire on WhatsApp"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Authorized Brands Section */}
      {activeMenu === 'authorized' && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Premium Hero Section */}
            <div className="text-center mb-16 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              <div className="inline-flex items-center space-x-2 px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                <Sparkles className="w-5 h-5" />
                <span>Premium Authorized Sales</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                Authorized <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Brands</span>
              </h2>
            </div>

            {/* Unified Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {allProducts.filter(p => p.category === 'authorized').map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 bg-white"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <img
                      src={`${process.env.PUBLIC_URL}/products/${product.image}`}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-slate-50 flex flex-col gap-2">
                    <h3 className="text-sm font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] leading-tight group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppEnquiry(product.name);
                        }}
                        className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all scale-90 group-hover:scale-100 flex items-center space-x-2"
                        title="Enquire on WhatsApp"
                      >
                        <Phone className="w-4 h-4" />
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
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[120] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors z-[130]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={`${process.env.PUBLIC_URL}${selectedImage}`}
            alt="Gallery FullView"
            className="max-w-full max-h-full rounded-2xl shadow-2xl animate-in zoom-in duration-500"
          />
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
                <button
                  onClick={() => handleWhatsAppEnquiry(selectedProduct.name)}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 mb-8 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
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
      {/* Support Floating Button */}
      <button
        onClick={() => setIsSupportModalOpen(true)}
        className="fixed bottom-8 right-8 z-[90] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-3 group animate-bounce-subtle"
        title="Get Support"
      >
        <Settings className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
        <span className="font-black tracking-tight">SUPPORT</span>
      </button>

      {/* Support Request Modal */}
      {isSupportModalOpen && (
        <div
          className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300 overflow-y-auto"
          onClick={() => setIsSupportModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 text-white relative">
              <button
                onClick={() => setIsSupportModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-4 mb-2">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-black">Service Support</h2>
              </div>
              <p className="text-blue-100/60 font-medium">Please fill out the form for service or technical assistance.</p>
            </div>

            {/* Form */}
            <form
              action="https://formsubmit.co/susilitirjpm@gmail.com"
              method="POST"
              className="p-8 md:p-10 space-y-6"
            >
              <input type="hidden" name="_subject" value="New Support Request - Susil ITI" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Brand Category</label>
                  <select
                    name="Category"
                    required
                    onChange={(e) => setSupportCategory(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="Our Brand">Our Brand</option>
                    <option value="Authorized Brands">Authorized Brands</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Product</label>
                  <select
                    name="Product"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="">Select Product</option>
                    {allProducts
                      .filter(p => supportCategory === 'Our Brand' ? p.category === 'assembled' : p.category === 'authorized')
                      .map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))
                    }
                    <option value="Other">Other / Not Listed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="Phone"
                    required
                    placeholder="10-digit mobile"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Description of Issue</label>
                <textarea
                  name="Issue"
                  required
                  rows="4"
                  placeholder="Please describe the problem or service requirement..."
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-[1.5rem] font-black text-xl hover:shadow-2xl hover:shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-3"
              >
                <span>SUBMIT REQUEST</span>
              </button>
            </form>
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
