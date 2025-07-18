
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Beaches = () => {
  const beaches = [
    {
      name: "Coconut Charlie's",
      type: "Party Beach",
      location: "Clearwater",
      description: "Beach bar with music, volleyball, and mocktails",
      features: ["Volleyball", "Live Music", "Mocktails", "Beach Games"],
      imagePlaceholder: "Coconut Charlie's beach volleyball"
    },
    {
      name: "Caddy's on the Beach",
      type: "Sunset Spot",
      location: "Treasure Island",
      description: "Food, music, and sunsets on the sand",
      features: ["Live Music", "Sunset Views", "Beach Dining", "Dancing"],
      imagePlaceholder: "Caddy's sunset dining"
    },
    {
      name: "Pass-a-Grille Beach",
      type: "Laid-back",
      location: "St. Pete Beach",
      description: "Laid-back beach with shops and cafés",
      features: ["Shopping", "Cafés", "Walking", "Relaxing"],
      imagePlaceholder: "Pass-a-Grille Beach shops"
    },
    {
      name: "Fort De Soto",
      type: "Adventure",
      location: "St. Petersburg",
      description: "Multiple beaches, bike trails, dog beach, and history",
      features: ["Biking", "Dog Beach", "History", "Multiple Beaches"],
      imagePlaceholder: "Fort De Soto bike trails"
    },
    {
      name: "Indian Rocks Beach",
      type: "Peaceful",
      location: "Indian Rocks",
      description: "Quiet, wide beach for games and relaxing",
      features: ["Beach Games", "Swimming", "Sunbathing", "Walking"],
      imagePlaceholder: "Indian Rocks Beach peaceful scene"
    },
    {
      name: "Apollo Beach",
      type: "Nature",
      location: "Apollo Beach",
      description: "Peaceful with fishing and wildlife viewing",
      features: ["Fishing", "Wildlife Watching", "Photography", "Nature"],
      imagePlaceholder: "Apollo Beach wildlife"
    },
    {
      name: "Davis Islands Beach",
      type: "Local Favorite",
      location: "Tampa",
      description: "Skyline views and a local, chill scene",
      features: ["City Views", "Local Hangout", "Swimming", "Picnics"],
      imagePlaceholder: "Davis Islands with Tampa skyline"
    },
    {
      name: "Treasure Island",
      type: "Active",
      location: "Treasure Island",
      description: "Volleyball courts, water sports, and beach bars",
      features: ["Volleyball", "Water Sports", "Beach Bars", "Rentals"],
      imagePlaceholder: "Treasure Island volleyball"
    },
    {
      name: "Honeymoon Island",
      type: "Natural",
      location: "Dunedin",
      description: "Shelling, trails, and natural beauty",
      features: ["Shelling", "Nature Trails", "Wildlife", "Photography"],
      imagePlaceholder: "Honeymoon Island nature trail"
    },
    {
      name: "St. Pete Beach",
      type: "Classic Beach",
      location: "St. Pete Beach",
      description: "Classic busy beach with parasailing and shops",
      features: ["Parasailing", "Shopping", "Water Sports", "Dining"],
      imagePlaceholder: "St. Pete Beach parasailing"
    },
    {
      name: "White Sand Beach",
      type: "Group Fun",
      location: "Clearwater",
      description: "Soft sand, perfect for games and group outings",
      features: ["Beach Games", "Group Activities", "Swimming", "Sunbathing"],
      imagePlaceholder: "White Sand Beach group activities"
    }
  ];

  const BeachCard = ({ beach }: { beach: any }) => (
    <Card className="bg-white border-tampa-blue/20 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        {/* Image placeholder - ready for actual image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-ocean-blue/30 to-palm-green/30 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
            <p className="text-cloud-white text-center font-medium text-sm">
              📷 {beach.imagePlaceholder}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg text-tampa-dark">{beach.name}</h3>
          <span className="bg-tampa-blue text-tampa-dark text-xs px-2 py-1 rounded">
            {beach.type}
          </span>
        </div>
        
        <div className="flex items-center text-tampa-gray text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {beach.location}
        </div>
        
        <p className="text-tampa-gray mb-4">{beach.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {beach.features.map((feature: string, index: number) => (
            <span key={index} className="bg-tampa-blue-light text-tampa-dark text-xs px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Beaches & Coastal Fun"
        subtitle="From party beaches with live music to peaceful nature spots, discover Tampa Bay's most beautiful coastlines and the endless activities they offer."
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Beach Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {beaches.map((beach, index) => (
              <BeachCard key={index} beach={beach} />
            ))}
          </div>

          {/* Beach Day Tips */}
          <section className="bg-tampa-blue-light/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-tampa-dark mb-6">Beach Day Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-tampa-dark mb-2">Best Times to Visit</h3>
                <p className="text-tampa-gray text-sm">Early morning (7-10am) for peaceful vibes, late afternoon (4-7pm) for sunset views and social scenes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-tampa-dark mb-2">What to Bring</h3>
                <p className="text-tampa-gray text-sm">Sunscreen, water, snacks, beach games, portable speaker, and a cooler for the perfect beach day.</p>
              </div>
              <div>
                <h3 className="font-semibold text-tampa-dark mb-2">Photo Spots</h3>
                <p className="text-tampa-gray text-sm">Sunset at Caddy's, skyline views from Davis Islands, and natural beauty at Honeymoon Island.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Beaches;
