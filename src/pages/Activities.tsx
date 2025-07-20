
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star } from 'lucide-react';

// Import activity images
import eliteWaterSportsImage from '@/assets/elite-water-sports-jetski.jpg';
import gamingArcadeImage from '@/assets/gaming-arcade-scene.jpg';
import bullaRooftopImage from '@/assets/bulla-rooftop-dining.jpg';
import fortDeSotoCyclingImage from '@/assets/fort-de-soto-cycling.jpg';
import tampaRestaurantImage from '@/assets/tampa-restaurant-scene.jpg';
import stPeteNightlifeImage from '@/assets/st-pete-nightlife-scene.jpg';
import clearwaterSunsetImage from '@/assets/clearwater-beach-sunset.jpg';
import clubparana from '@/assets/club-prana-multi-level.jpg'
const Activities = () => {
  const featuredActivities = [
    {
      name: "Bulla GastroBar",
      type: "Restaurant",
      location: "Tampa",
      description: "Rooftop Spanish tapas with amazing city views",
      features: ["Rooftop Views", "Spanish Tapas", "City Views", "Upscale"],
      imagePlaceholder: "Bulla GastroBar rooftop dining with Tampa skyline",
      image: bullaRooftopImage
    },
    {
      name: "Fort De Soto Park",
      type: "Beach",
      location: "St. Petersburg", 
      description: "Multiple beaches, bike trails, and dog-friendly areas",
      features: ["Multiple Beaches", "Bike Trails", "Dog Friendly", "Nature"],
      imagePlaceholder: "Fort De Soto bike trails and beach views",
      image: fortDeSotoCyclingImage
    },
    {
      name: "Club Prana",
      type: "Nightlife",
      location: "Ybor City",
      description: "Multi-level 18+ club with different music on each floor",
      features: ["18+", "Multi-Level", "Live Music", "Dancing"],
      image: clubparana
    },
    {
      name: "Elite Water Sports",
      type: "Activity",
      location: "Tampa Bay",
      description: "Jet skiing, parasailing, and water adventures",
      features: ["Jet Skiing", "Parasailing", "Water Sports", "Adventures"],
      imagePlaceholder: "Elite Water Sports jet skiing on Tampa Bay",
      image: eliteWaterSportsImage
    }
  ];

  const categories = [
    {
      title: "Tampa Restaurants",
      description: "Discover the best dining spots in Tampa",
      link: "/restaurants",
      imagePlaceholder: "Tampa restaurant scene",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      image: tampaRestaurantImage
    },
    {
      title: "St. Pete Nightlife", 
      description: "Explore St. Petersburg's vibrant night scene",
      link: "/nightlife",
      imagePlaceholder: "St. Petersburg nightlife",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      image: stPeteNightlifeImage
    },
    {
      title: "Clearwater Beaches",
      description: "Find your perfect beach day spot",
      link: "/beaches",
      imagePlaceholder: "Clearwater Beach sunset",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      image: clearwaterSunsetImage
    },
    {
      title: "Gaming & Arcades",
      description: "Level up your fun at Tampa's best arcades",
      link: "/activities",
      imagePlaceholder: "Gaming arcade scene",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      image: gamingArcadeImage
    }
  ];

  const ActivityCard = ({ activity }: { activity: any }) => (
    <Card className="bg-white border-tampa-blue/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        {/* Activity image */}
        <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
          {activity.image ? (
            <>
              <img 
                src={activity.image} 
                alt={activity.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </>
          ) : (
            <>
              <div className="aspect-[4/3] bg-gradient-to-br from-ocean-blue/30 to-palm-green/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                  <p className="text-cloud-white text-center font-medium text-sm">
                    📷 {activity.imagePlaceholder}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg text-tampa-dark group-hover:text-tampa-blue transition-colors">
            {activity.name}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="bg-tampa-blue text-tampa-dark text-xs px-2 py-1 rounded ml-2">
              {activity.type}
            </span>
          </div>
        </div>
        
        <div className="flex items-center text-tampa-gray text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {activity.location}
        </div>
        
        <p className="text-tampa-gray mb-4 leading-relaxed">{activity.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {activity.features.map((feature: string, index: number) => (
            <span key={index} className="bg-tampa-blue-light text-tampa-dark text-xs px-3 py-1 rounded-full border border-tampa-blue/30">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const CategoryCard = ({ category }: { category: any }) => (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        {/* Category image */}
        <div className={`aspect-[3/2] ${category.color} flex items-center justify-center relative overflow-hidden`}>
          {category.image ? (
            <>
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/30 transition-colors"></div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/30 transition-colors"></div>
              <div className="relative z-10 bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:bg-black/20 transition-colors">
                <p className="text-cloud-white text-center font-medium text-sm">
                  📷 {category.imagePlaceholder}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-tampa-dark mb-2 group-hover:text-tampa-blue transition-colors">
            {category.title}
          </h3>
          <p className="text-tampa-gray">{category.description}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Explore Tampa Bay"
        subtitle="Your adventure starts here. Browse by category or discover featured spots that make Tampa Bay the perfect place for 18+ fun."
      />

      {/* Where to Start Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tampa-dark mb-4">
              Where to Start
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured This Week */}
      <div className="bg-tampa-blue-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tampa-dark mb-4">
              Featured This Week
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-tampa-blue to-tampa-blue-light py-16">

      </div>
    </div>
  );
};

export default Activities;
