
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, Coffee, Utensils } from 'lucide-react';

// Import restaurant images
import oxfordExchangeImage from '@/assets/oxford-exchange-cafe.jpg';
import buddyBrewImage from '@/assets/buddy-brew-coffee.jpg';
import firstWatchImage from '@/assets/first-watch-healthy-breakfast.jpg';
import oliviaImage from '@/assets/olivia-restaurant-open-kitchen.jpg';
import besosImage from '@/assets/besos-tableside-guac.jpg';

const Restaurants = () => {
  const restaurants = [
    // Tampa
    {
      name: "Oxford Exchange",
      type: "Upscale Café",
      location: "Tampa",
      city: "Tampa",
      description: "Upscale café with artisanal coffee and gourmet breakfast",
      features: ["Artisanal Coffee", "Gourmet Breakfast", "Instagram-Worthy", "Study Spot"],
      imagePlaceholder: "Oxford Exchange elegant café interior with books and coffee",
      image: oxfordExchangeImage
    },
    {
      name: "Buddy Brew Coffee", 
      type: "Local Coffee",
      location: "Tampa",
      city: "Tampa",
      description: "Local coffee roaster with amazing breakfast sandwiches",
      features: ["Local Roaster", "Breakfast Sandwiches", "Multiple Locations", "Student Friendly"],
      imagePlaceholder: "Buddy Brew Coffee shop with local roasting equipment",
      image: buddyBrewImage
    },
    {
      name: "First Watch",
      type: "Fresh & Healthy",
      location: "Tampa", 
      city: "Tampa",
      description: "Fresh breakfast and brunch with healthy options",
      features: ["Healthy Options", "Fresh Ingredients", "Brunch Menu", "Casual Dining"],
      imagePlaceholder: "First Watch fresh healthy breakfast spread",
      image: firstWatchImage
    },
    {
      name: "Olivia",
      type: "Upscale Casual",
      location: "Tampa",
      city: "Tampa", 
      description: "Modern Italian with an open kitchen",
      features: ["Open Kitchen", "Modern Italian", "Great Atmosphere"],
      imagePlaceholder: "Olivia restaurant open kitchen with Italian dishes",
      image: oliviaImage
    },
    {
      name: "Besos",
      type: "Upscale",
      location: "Tampa",
      city: "Tampa",
      description: "Upscale Mexican, tableside guac, cocktails", 
      features: ["Tableside Guac", "Craft Cocktails", "Mexican Cuisine"],
      imagePlaceholder: "Besos upscale Mexican restaurant with tableside guac preparation",
      image: besosImage
    },
    {
      name: "Timpano",
      type: "Lively",
      location: "Tampa",
      city: "Tampa",
      description: "Bold Italian-American with a lively scene",
      features: ["Italian-American", "Energetic Vibe", "Great for Groups"],
      imagePlaceholder: "Timpano lively Italian-American restaurant atmosphere"
    },
    {
      name: "Bartaco",
      type: "Casual",
      location: "Tampa", 
      city: "Tampa",
      description: "Coastal vibes, handheld bites",
      features: ["Coastal Theme", "Tacos", "Relaxed Atmosphere"],
      imagePlaceholder: "Bartaco coastal themed restaurant with tacos"
    },
    {
      name: "Bulla GastroBar",
      type: "Rooftop",
      location: "Tampa",
      city: "Tampa",
      description: "Rooftop lounge, Spanish tapas",
      features: ["Rooftop Views", "Spanish Tapas", "Lounge Atmosphere"],
      imagePlaceholder: "Bulla GastroBar rooftop with Spanish tapas and city views"
    },

    // St. Petersburg
    {
      name: "The Mill",
      type: "Trendy Breakfast",
      location: "St. Petersburg",
      city: "St. Petersburg",
      description: "Trendy breakfast spot with creative dishes and great coffee",
      features: ["Creative Dishes", "Great Coffee", "Instagram-Worthy", "Local Favorite"],
      imagePlaceholder: "The Mill trendy breakfast spot with creative plating"
    },
    {
      name: "Ruby's Elixir",
      type: "Health Café", 
      location: "St. Petersburg",
      city: "St. Petersburg",
      description: "Health-focused café with smoothie bowls and avocado toast",
      features: ["Smoothie Bowls", "Avocado Toast", "Health-Focused", "Fresh Ingredients"],
      imagePlaceholder: "Ruby's Elixir colorful smoothie bowls and healthy dishes"
    },
    {
      name: "Ceviche",
      type: "Festive",
      location: "St. Petersburg",
      city: "St. Petersburg", 
      description: "Flamenco, tapas, sangria, and festive energy",
      features: ["Flamenco Shows", "Spanish Tapas", "Festive Energy"],
      imagePlaceholder: "Ceviche restaurant with flamenco performance and tapas"
    },
    {
      name: "Birchwood",
      type: "Rooftop",
      location: "St. Petersburg",
      city: "St. Petersburg",
      description: "Rooftop lounge, sunset views, and small plates",
      features: ["Sunset Views", "Small Plates", "Rooftop Lounge"],
      imagePlaceholder: "Birchwood rooftop lounge with sunset views over water"
    },

    // Clearwater  
    {
      name: "Lenny's Restaurant",
      type: "Classic Diner",
      location: "Clearwater",
      city: "Clearwater",
      description: "Classic American breakfast diner with huge portions",
      features: ["Huge Portions", "Classic American", "Affordable", "Local Institution"],
      imagePlaceholder: "Lenny's classic American diner with large breakfast plates"
    },
    {
      name: "Island Way Grill",
      type: "Waterfront", 
      location: "Clearwater",
      city: "Clearwater",
      description: "Seafood and sushi with waterfront views",
      features: ["Waterfront Views", "Sushi", "Fresh Seafood"],
      imagePlaceholder: "Island Way Grill waterfront dining with fresh seafood"
    },

    // Dunedin
    {
      name: "Café Alfresco",
      type: "European Café",
      location: "Dunedin",
      city: "Dunedin", 
      description: "European-style café with fresh pastries and strong coffee",
      features: ["Fresh Pastries", "Strong Coffee", "European Style", "Outdoor Seating"],
      imagePlaceholder: "Café Alfresco European style café with pastries and outdoor seating"
    },
    {
      name: "Casa Tina",
      type: "Festive",
      location: "Dunedin",
      city: "Dunedin",
      description: "Festive Mexican restaurant with a vibrant feel",
      features: ["Mexican Cuisine", "Vibrant Atmosphere", "Festive Decor"],
      imagePlaceholder: "Casa Tina festive Mexican restaurant with colorful decor"
    }
  ];

  const cities = ["Tampa", "St. Petersburg", "Clearwater", "Dunedin"];

  const RestaurantCard = ({ restaurant }: { restaurant: any }) => (
    <Card className="bg-white border-tampa-blue/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        {/* Restaurant image */}
        <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
          {restaurant.image ? (
            <>
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </>
          ) : (
            <>
              <div className="aspect-[4/3] bg-gradient-to-br from-sunset-orange/30 to-coral-pink/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                  <p className="text-cloud-white text-center font-medium text-sm">
                    📷 {restaurant.imagePlaceholder}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg text-tampa-dark group-hover:text-orange-600 transition-colors">
            {restaurant.name}
          </h3>
          <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-3 py-1 rounded-full">
            {restaurant.type}
          </span>
        </div>
        
        <div className="flex items-center text-tampa-gray text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {restaurant.location}
        </div>
        
        <p className="text-tampa-gray mb-4 leading-relaxed">{restaurant.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {restaurant.features.map((feature: string, index: number) => (
            <span key={index} className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full border border-orange-200">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const CitySection = ({ city }: { city: string }) => {
    const cityRestaurants = restaurants.filter(restaurant => restaurant.city === city);

    return (
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-tampa-dark mb-4">{city}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Restaurants & Dining"
        subtitle="From upscale dining to casual hangouts, discover the best eats across Tampa Bay. Every spot welcomes 18+ and offers unforgettable experiences."
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cities.map((city, index) => (
            <CitySection key={index} city={city} />
          ))}
        </div>
      </div>

      {/* Dining Tips */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dining Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Coffee className="w-6 h-6 text-orange-300 mr-3" />
                <h3 className="font-semibold text-white">Best Times</h3>
              </div>
              <p className="text-orange-100 text-sm">Breakfast spots: 8-11am. Lunch: 11:30am-2pm. Dinner: 5:30-8pm for best service and atmosphere.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Utensils className="w-6 h-6 text-orange-300 mr-3" />
                <h3 className="font-semibold text-white">Reservations</h3>
              </div>
              <p className="text-orange-100 text-sm">Upscale spots often require reservations. Call ahead or check online booking for popular restaurants.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-300 mr-3" />
                <h3 className="font-semibold text-white">Local Favorites</h3>
              </div>
              <p className="text-orange-100 text-sm">Ask locals for hidden gems and daily specials. Many spots offer student discounts with valid ID.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
