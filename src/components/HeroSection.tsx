import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  imageAlt?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image,
  imageAlt = '',
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-beach overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue-light/30 via-transparent to-sand-beige/50"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-ocean rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-sunset rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-medium text-ocean-blue-dark">
              <MapPin className="w-4 h-4" />
              <span>Tampa Bay's Premier Guide</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-sunset-orange text-sunset-orange" />
                ))}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-night-navy leading-tight">
              <span className="text-gradient">{title.split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="text-night-navy">{title.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed font-light">
              {subtitle}
            </p>

            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryButtonText && primaryButtonLink && (
                  <Link to={primaryButtonLink}>
                    <Button className="group bg-gradient-ocean hover:shadow-xl text-cloud-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                      {primaryButtonText}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <Link to={secondaryButtonLink}>
                    <Button variant="outline" className="glass border-ocean-blue/20 text-ocean-blue-dark hover:bg-ocean-blue-light font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </div>
            )}

            {/* Stats preview */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-night-navy">50+</div>
                <div className="text-sm text-warm-gray">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-night-navy">15+</div>
                <div className="text-sm text-warm-gray">Beaches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-night-navy">4</div>
                <div className="text-sm text-warm-gray">Cities</div>
              </div>
            </div>
          </div>
          
          {/* Updated image section */}
          {image ? (
            <div className="relative lg:animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="aspect-[3/4] glass rounded-3xl p-8 hover-lift overflow-hidden">
                <img 
                  src={image} 
                  alt={imageAlt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-sunset rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-palm-green rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          ) : (
            <div className="relative lg:animate-scale-in" style={{animationDelay: '0.3s'}}>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-sunset rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-palm-green rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;