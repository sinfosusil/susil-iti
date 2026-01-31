import React from 'react';
import { ShoppingCart, Menu, X, Sparkles, Phone, Mail, MapPin, Award, Users, BookOpen, Wrench, Cpu, Settings, GraduationCap, Monitor, BatteryCharging, Image } from 'lucide-react';

export const galleryImages = [
    's (16).jpeg', 's (17).jpeg', 's (18).jpeg', 's (19).jpeg', 's (20).jpeg',
    's (21).jpeg', 's (22).jpeg', 's (23).jpeg', 's (24).jpeg', 's (25).jpeg'
];

export const menuItems = [
    { id: 'home', label: 'Home', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'electronics', label: 'Institute for Electronics', icon: <Cpu className="w-5 h-5" /> },
    { id: 'research', label: 'Research and Development', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'products', label: 'Our Brand', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'authorized', label: 'Authorized Brands', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'service', label: 'Price List', icon: <Settings className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-5 h-5" /> }
];

export const features = [
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

export const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "1000+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" }
];

export const allProducts = [
    {
        id: 's17', name: 'Amplifier System',
        description: `Immersive Audio Excellence: Experience the pinnacle of sound engineering with Susil Professional Amplifier Systems...`, // Truncated for token limit in write_to_file, I'll copy the real values carefully
        image: 's (17).jpg', price: 'Rs. 22,000', category: 'assembled'
    },
    // ... I'll fill this in with a script or more calls if needed, 
    // but actually it's better to move it all in one go if I can.
    // Wait, I can't easily "move" without seeing it all.
];
