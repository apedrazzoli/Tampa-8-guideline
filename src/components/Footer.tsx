
import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-night-navy text-cloud-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-gradient">
              Fun and The City 
            </h3>
            <p className="text-warm-gray leading-relaxed">
              Discovering Tampa Bay's best 18+ experiences, one adventure at a time. 
              Your trusted guide to unforgettable moments.
            </p>
            <div className="flex items-center space-x-2 text-sunset-orange">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Made with love in Tampa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Explore</h4>
            <div className="grid grid-cols-2 gap-2">
<a href="/restaurants" className="text-warm-gray hover:text-ocean-blue transition-colors duration-200">
  Restaurants
</a>
<a href="/beaches" className="text-warm-gray hover:text-ocean-blue transition-colors duration-200">
  Beaches
</a>
<a href="/nightlife" className="text-warm-gray hover:text-ocean-blue transition-colors duration-200">
  Nightlife
</a>
<a href="/activities" className="text-warm-gray hover:text-ocean-blue transition-colors duration-200">
  Activities
</a>


            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-ocean-blue" />
                <span className="text-warm-gray">Tampa Bay, Florida</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-blue" />
                <span className="text-warm-gray">hello@funandthecity.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-blue" />
                <span className="text-warm-gray">(813) FUN-CITY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-gray/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-warm-gray text-sm mb-4 md:mb-0">
            © 2025 Fun and The City. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
       
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
