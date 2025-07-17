
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Restaurants',
      description: 'From upscale dining to casual hangouts, discover the best eats across Tampa Bay',
      imagePlaceholder: 'Restaurant dining'
    },
    {
      title: 'Beaches',
      description: 'Sun, sand, and endless activities at the most beautiful beaches in Florida',
      imagePlaceholder: 'Beautiful Tampa Bay beach scene'
    },
    {
      title: 'Nightlife',
      description: '18+ clubs, karaoke bars, and late-night spots for unforgettable nights out',
      imagePlaceholder: 'Nightlife scene'
    },
    {
      title: 'Activities',
      description: 'Adventure sports, arcades, mini golf, and unique experiences for every mood',
      imagePlaceholder: 'Fun activities'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tampa-dark mb-4">
            What You'll Find
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-tampa-blue-light/50 border-tampa-blue/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="aspect-[16/9] bg-tampa-blue/20 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-tampa-gray text-center p-4">
                    {feature.imagePlaceholder}
                  </p>
                </div>
                <h3 className="font-bold text-xl text-tampa-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-tampa-gray">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
