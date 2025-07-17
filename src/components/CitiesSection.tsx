
import { Card, CardContent } from '@/components/ui/card';

const CitiesSection = () => {
  const cities = [
    {
      name: 'Tampa',
      description: 'The heart of the bay with vibrant dining and nightlife',
      imagePlaceholder: 'Tampa skyline'
    },
    {
      name: 'St. Petersburg',
      description: 'Artsy downtown with waterfront dining and culture',
      imagePlaceholder: 'St. Petersburg waterfront'
    },
    {
      name: 'Clearwater',
      description: 'Beautiful beaches and laid-back coastal vibes',
      imagePlaceholder: 'Clearwater Beach with people enjoying the water'
    },
    {
      name: 'Dunedin',
      description: 'Charming small town with unique dining experiences',
      imagePlaceholder: 'Dunedin downtown'
    }
  ];

  return (
    <div className="bg-tampa-blue-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tampa-dark mb-4">
            Explore Tampa Bay
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-tampa-blue/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="aspect-[4/3] bg-tampa-blue/20 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-tampa-gray text-sm text-center p-2">
                    {city.imagePlaceholder}
                  </p>
                </div>
                <h3 className="font-bold text-lg text-tampa-dark mb-2">
                  {city.name}
                </h3>
                <p className="text-tampa-gray text-sm">
                  {city.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitiesSection;
