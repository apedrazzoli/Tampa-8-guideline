
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Waves, Music, Gamepad2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Restaurants',
      description: 'From upscale dining to casual hangouts, discover the best eats across Tampa Bay with curated recommendations',
      imagePlaceholder: 'Elegant restaurant dining experience',
      icon: Utensils,
      gradient: 'bg-gradient-sunset'
    },
    {
      title: 'Beaches',
      description: 'Sun, sand, and endless activities at the most beautiful beaches in Florida with crystal clear waters',
      imagePlaceholder: 'Pristine Tampa Bay beach paradise',
      icon: Waves,
      gradient: 'bg-gradient-ocean'
    },
    {
      title: 'Nightlife',
      description: '18+ clubs, karaoke bars, and late-night spots for unforgettable nights out in the city',
      imagePlaceholder: 'Vibrant nightlife entertainment scene',
      icon: Music,
      gradient: 'bg-coral-pink'
    },
    {
      title: 'Activities',
      description: 'Adventure sports, arcades, mini golf, and unique experiences for every mood and interest',
      imagePlaceholder: 'Exciting recreational activities',
      icon: Gamepad2,
      gradient: 'bg-palm-green'
    }
  ];

  return (
    <div className="bg-cloud-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-night-navy mb-4">
            What You'll <span className="text-gradient">Discover</span>
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Every category thoughtfully curated to help you make the most of your Tampa Bay experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group glass border-0 hover-lift overflow-hidden transition-all duration-300 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-cloud-white" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-night-navy">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-warm-gray text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className={`aspect-[16/9] ${feature.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <p className="relative text-cloud-white text-center p-6 font-medium z-10">
                      {feature.imagePlaceholder}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
