
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin } from 'lucide-react';

const CitiesSection = () => {
  const cities = [
    {
      name: 'Tampa',
      description: 'The heart of the bay with vibrant dining and nightlife scene',
      imagePlaceholder: 'Tampa skyline at sunset',
      gradient: 'bg-gradient-ocean',
      accent: 'text-ocean-blue'
    },
    {
      name: 'St. Petersburg',
      description: 'Artsy downtown with waterfront dining and rich culture',
      imagePlaceholder: 'St. Petersburg waterfront arts district',
      gradient: 'bg-gradient-sunset',
      accent: 'text-sunset-orange'
    },
    {
      name: 'Clearwater',
      description: 'Beautiful beaches and laid-back coastal vibes',
      imagePlaceholder: 'Clearwater Beach crystal clear waters',
      gradient: 'bg-coral-pink',
      accent: 'text-coral-pink'
    },
    {
      name: 'Dunedin',
      description: 'Charming small town with unique dining experiences',
      imagePlaceholder: 'Dunedin historic downtown charm',
      gradient: 'bg-palm-green',
      accent: 'text-palm-green'
    }
  ];

  return (
    <div className="bg-sand-beige py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-night-navy mb-4">
            Explore <span className="text-gradient">Tampa Bay</span>
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Four unique cities, countless adventures. Each with its own personality and charm waiting to be discovered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <Card 
              key={index} 
              className="group glass border-0 hover-lift overflow-hidden transition-all duration-300 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className={`aspect-[4/3] ${city.gradient} rounded-t-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <p className="relative text-cloud-white text-center p-4 font-medium z-10">
                    {city.imagePlaceholder}
                  </p>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className={`w-5 h-5 ${city.accent}`} />
                    <h3 className="font-heading font-bold text-xl text-night-navy">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-warm-gray leading-relaxed">
                    {city.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitiesSection;
