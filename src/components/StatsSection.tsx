
import { Users, MapPin, Utensils, Waves } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      number: '4', 
      label: 'Cities Covered',
      icon: MapPin,
      color: 'text-ocean-blue'
    },
    { 
      number: '50+', 
      label: 'Restaurants',
      icon: Utensils,
      color: 'text-sunset-orange'
    },
    { 
      number: '15+', 
      label: 'Beaches',
      icon: Waves,
      color: 'text-coral-pink'
    },
    { 
      number: '18+', 
      label: 'Age Friendly',
      icon: Users,
      color: 'text-palm-green'
    },
  ];

  return (
    <div className="bg-cloud-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-night-navy mb-4">
            Tampa Bay by the <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Discover why thousands of young adults choose us as their guide to Tampa Bay's best experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover-lift glass rounded-2xl p-8 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-beach mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-night-navy mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-warm-gray font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
